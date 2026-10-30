
"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react"
import {
  AnimatePresence,
  motion,
  MotionConfig,
} from "framer-motion"
import {
  ACCESS_TOKEN_KEY,
  AUTH_USER_KEY,
  VERIFICATION_TOKEN_KEY,
} from "@/lib/api-client"

const Ctx = createContext<any>(null)

export const useApp = () => useContext(Ctx)

const CHECKOUT_STORAGE_KEY = "ranapay_checkout_items"

const get = (key: string, fallback: any) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback
  } catch {
    return fallback
  }
}

const put = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export function Provider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [cart, setCart] = useState<any[]>([])
  const [orders, setOrders] = useState<any[]>([])
  const [checkoutItems, setCheckoutItems] = useState<any[]>([])
  const [checkoutSource, setCheckoutSource] = useState<"cart" | "buyNow" | null>(null)
  const [ready, setReady] = useState(false)

  const [msg, setMsg] = useState("")
  const [cartOpen, setCartOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  useEffect(() => {
    setUser(get("ranapay_user", null))
    setCart(get("ranapay_gift_cart", []))
    setOrders(get("ranapay_orders", []))

    try {
      const saved = sessionStorage.getItem(CHECKOUT_STORAGE_KEY)

      if (saved) {
        const parsed = JSON.parse(saved)

        if (Array.isArray(parsed)) {
          setCheckoutItems(parsed)
          setCheckoutSource("buyNow")
        } else if (parsed && Array.isArray(parsed.items)) {
          setCheckoutItems(parsed.items)
          setCheckoutSource(parsed.source === "cart" ? "cart" : "buyNow")
        }
      }
    } catch (error) {
      console.error("Unable to restore checkout state:", error)
    }

    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return

    try {
      put("ranapay_user", user)
      put("ranapay_gift_cart", cart)
      put("ranapay_orders", orders)
    } catch (error) {
      console.error("Unable to save app state:", error)
    }
  }, [user, cart, orders, ready])

  useEffect(() => {
    if (!msg) return

    const timer = window.setTimeout(() => setMsg(""), 2200)
    return () => window.clearTimeout(timer)
  }, [msg])

  // ADD TO CART: Add the selected product to the cart.
  const addToCart = (p: any, amount: number, qty: number) => {
    if (qty <= 0) return

    setCart((current) => {
      const key = `${p.slug}-${amount}`
      const exists = current.some((item) => item.key === key)

      if (exists) {
        return current.map((item) =>
          item.key === key
            ? { ...item, qty: item.qty + qty }
            : item
        )
      }

      return [
        ...current,
        {
          key,
          slug: p.slug,
          brand: p.brand,
          title: p.title,
          color: p.color,
          discount: p.discount,
          amount,
          qty,
        },
      ]
    })

    setMsg(`${p.title} added to your cart.`)
  }

  // BUY NOW: Only the selected product goes to checkout.
  // Existing cart items remain untouched.
  const buyNow = (p: any, amount: number, qty: number) => {
    if (qty <= 0) return

    const items = [
      {
        key: `${p.slug}-${amount}`,
        slug: p.slug,
        brand: p.brand,
        title: p.title,
        color: p.color,
        discount: p.discount,
        amount,
        qty,
      },
    ]

    setCheckoutItems(items)
    setCheckoutSource("buyNow")

    try {
      sessionStorage.setItem(
        CHECKOUT_STORAGE_KEY,
        JSON.stringify({ source: "buyNow", items })
      )
    } catch (error) {
      console.error("Unable to save Buy Now checkout:", error)
    }
  }

  // CART CHECKOUT: Snapshot all current cart items.
  const startCartCheckout = () => {
    if (cart.length === 0) {
      setMsg("Your cart is empty.")
      return false
    }

    const items = cart.map((item) => ({ ...item }))

    setCheckoutItems(items)
    setCheckoutSource("cart")

    try {
      sessionStorage.setItem(
        CHECKOUT_STORAGE_KEY,
        JSON.stringify({ source: "cart", items })
      )
    } catch (error) {
      console.error("Unable to save cart checkout:", error)
    }

    return true
  }

  const clearCheckout = () => {
    setCheckoutItems([])
    setCheckoutSource(null)

    try {
      sessionStorage.removeItem(CHECKOUT_STORAGE_KEY)
    } catch (error) {
      console.error("Unable to clear checkout state:", error)
    }
  }

  // Update the quantity of an item in the cart.
  const setQty = (key: string, qty: number) => {
    setCart((current) =>
      current
        .map((item) =>
          item.key === key ? { ...item, qty } : item
        )
        .filter((item) => item.qty > 0)
    )
  }

  const clearCart = () => setCart([])

  const logout = () => {
    setUser(null)
    setLoginOpen(false)
    clearCheckout()
    setMsg("Logged out")

    try {
      localStorage.removeItem("ranapay_user")
      localStorage.removeItem(ACCESS_TOKEN_KEY)
      localStorage.removeItem(AUTH_USER_KEY)
      localStorage.removeItem(VERIFICATION_TOKEN_KEY)

      window.dispatchEvent(new Event("auth-change"))
      window.dispatchEvent(new Event("ranapay-auth-change"))
    } catch (error) {
      console.error("Unable to clear auth session:", error)
    }
  }

  const login = (incomingUser: any) => {
    const displayName =
      incomingUser?.fullName ||
      incomingUser?.name ||
      [
        incomingUser?.firstName,
        incomingUser?.lastName,
      ].filter(Boolean).join(" ") ||
      incomingUser?.email?.split("@")[0] ||
      "User"

    const normalizedUser = {
      ...incomingUser,
      name: displayName,
      fullName: incomingUser?.fullName || displayName,
    }

    setUser(normalizedUser)
    setMsg(`Welcome back, ${displayName.split(/\s+/)[0]}!`)

    try {
      localStorage.setItem(
        "ranapay_user",
        JSON.stringify(normalizedUser)
      )

      window.dispatchEvent(new Event("auth-change"))
      window.dispatchEvent(new Event("ranapay-auth-change"))
    } catch (error) {
      console.error("Unable to save user:", error)
    }
  }

  const addOrder = (order: any) => {
    setOrders((current) => [order, ...current])
  }

  const value = {
    user,
    ready,
    cart,
    orders,
    checkoutItems,
    checkoutSource,
    addToCart,
    buyNow,
    startCartCheckout,
    setQty,
    clearCart,
    clearCheckout,
    toast: setMsg,
    cartOpen,
    setCartOpen,
    loginOpen,
    setLoginOpen,
    login,
    logout,
    addOrder,
  }

  return (
    <Ctx.Provider value={value}>
      <MotionConfig reducedMotion="user">
        {children}

        <AnimatePresence>
          {msg && (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              role="status"
              aria-live="polite"
              className="fixed bottom-4 left-1/2 z-[70] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-xl bg-ink px-4 py-3 text-center text-sm text-white shadow-lg"
            >
              {msg}
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </Ctx.Provider>
  )
}
