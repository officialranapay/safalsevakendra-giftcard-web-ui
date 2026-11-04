
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  AnimatePresence,
  motion,
  MotionConfig,
} from "framer-motion";

import {
  ACCESS_TOKEN_KEY,
  AUTH_USER_KEY,
  VERIFICATION_TOKEN_KEY,
} from "@/lib/api-client";

import { bySlug } from "@/lib/data";

/* ==========================================
   CONTEXT
========================================== */

const Ctx = createContext<any>(null);

export const useApp = () => useContext(Ctx);

/* ==========================================
   safalsevakendra STORAGE KEYS
========================================== */

const USER_STORAGE_KEY = "safalsevakendra_user";
const CART_STORAGE_KEY = "safalsevakendra_gift_cart";
const ORDERS_STORAGE_KEY = "safalsevakendra_orders";
const CHECKOUT_STORAGE_KEY = "safalsevakendra_checkout_items";

/* ==========================================
   STORAGE HELPERS
========================================== */

const get = (key: string, fallback: any) => {
  try {
    return (
      JSON.parse(localStorage.getItem(key) || "null") ??
      fallback
    );
  } catch {
    return fallback;
  }
};

const put = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/* ==========================================
   NORMALIZE CUSTOMER DETAILS
========================================== */

const normalizeUser = (incomingUser: any) => {
  if (!incomingUser) return null;

  const displayName =
    incomingUser?.fullName ||
    incomingUser?.name ||
    [
      incomingUser?.firstName,
      incomingUser?.lastName,
    ]
      .filter(Boolean)
      .join(" ") ||
    incomingUser?.email?.split("@")[0] ||
    "User";

  const phone =
    incomingUser?.phone ||
    incomingUser?.mobile ||
    incomingUser?.phoneNumber ||
    incomingUser?.mobileNumber ||
    incomingUser?.customerPhone ||
    incomingUser?.contactNumber ||
    incomingUser?.profile?.phone ||
    incomingUser?.profile?.mobile ||
    incomingUser?.data?.phone ||
    incomingUser?.data?.mobile ||
    "";

  return {
    ...incomingUser,

    name: displayName,

    fullName:
      incomingUser?.fullName || displayName,

    phone: String(phone),
  };
};

/* ==========================================
   NORMALIZE PRODUCT / CART ITEM
========================================== */

const normalizeCartItem = (item: any) => {
  const product = item?.slug
    ? bySlug(item.slug)
    : undefined;

  const productId =
    item?.giftCardId ||
    item?.id ||
    product?.id;

  return {
    ...item,

    id: productId,
    giftCardId: productId,

    brand: item?.brand || product?.brand,

    title: item?.title || product?.title,

    slug: item?.slug || product?.slug,

    color: item?.color || product?.color,

    discount:
      item?.discount ?? product?.discount ?? 0,
  };
};

/* ==========================================
   APP PROVIDER
========================================== */

export function Provider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<any>(null);

  const [cart, setCart] = useState<any[]>([]);

  const [orders, setOrders] = useState<any[]>([]);

  const [checkoutItems, setCheckoutItems] =
    useState<any[]>([]);

  const [checkoutSource, setCheckoutSource] =
    useState<"cart" | "buyNow" | null>(null);

  const [ready, setReady] = useState(false);

  const [msg, setMsg] = useState("");

  const [cartOpen, setCartOpen] = useState(false);

  const [loginOpen, setLoginOpen] = useState(false);

  /* ==========================================
     RESTORE SAVED DATA
  ========================================== */

  useEffect(() => {
    const savedUser = get(USER_STORAGE_KEY, null);

    setUser(normalizeUser(savedUser));

    const savedCart = get(CART_STORAGE_KEY, []);

    setCart(
      Array.isArray(savedCart)
        ? savedCart.map(normalizeCartItem)
        : []
    );

    const savedOrders = get(ORDERS_STORAGE_KEY, []);

    setOrders(
      Array.isArray(savedOrders)
        ? savedOrders
        : []
    );

    /* RESTORE CHECKOUT SESSION */

    try {
      const saved = sessionStorage.getItem(
        CHECKOUT_STORAGE_KEY
      );

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setCheckoutItems(
            parsed.map(normalizeCartItem)
          );

          setCheckoutSource("buyNow");
        } else if (
          parsed &&
          Array.isArray(parsed.items)
        ) {
          setCheckoutItems(
            parsed.items.map(normalizeCartItem)
          );

          setCheckoutSource(
            parsed.source === "cart"
              ? "cart"
              : "buyNow"
          );
        }
      }
    } catch (error) {
      console.error(
        "Unable to restore checkout state:",
        error
      );
    }

    setReady(true);
  }, []);

  /* ==========================================
     SAVE APP STATE
  ========================================== */

  useEffect(() => {
    if (!ready) return;

    try {
      put(USER_STORAGE_KEY, user);

      put(CART_STORAGE_KEY, cart);

      put(ORDERS_STORAGE_KEY, orders);
    } catch (error) {
      console.error(
        "Unable to save app state:",
        error
      );
    }
  }, [user, cart, orders, ready]);

  /* ==========================================
     TOAST MESSAGE
  ========================================== */

  useEffect(() => {
    if (!msg) return;

    const timer = window.setTimeout(
      () => setMsg(""),
      2200
    );

    return () => window.clearTimeout(timer);
  }, [msg]);

  /* ==========================================
     ADD TO CART
  ========================================== */

  const addToCart = (
    p: any,
    amount: number,
    qty: number
  ) => {
    if (qty <= 0) return;

    const product = normalizeCartItem(p);

    if (!product.id) {
      setMsg("Invalid gift card product.");
      return;
    }

    setCart((current) => {
      const key = `${product.slug}-${amount}`;

      const exists = current.some(
        (item) => item.key === key
      );

      if (exists) {
        return current.map((item) =>
          item.key === key
            ? {
                ...item,
                qty: item.qty + qty,
              }
            : item
        );
      }

      return [
        ...current,
        {
          id: product.id,
          giftCardId: product.id,

          key,

          slug: product.slug,
          brand: product.brand,
          title: product.title,
          color: product.color,
          discount: product.discount,

          amount,
          qty,
        },
      ];
    });

    setMsg(`${product.title} added to your cart.`);
  };

  /* ==========================================
     BUY NOW
  ========================================== */

  const buyNow = (
    p: any,
    amount: number,
    qty: number
  ) => {
    if (qty <= 0) return;

    const product = normalizeCartItem(p);

    if (!product.id) {
      setMsg("Invalid gift card product.");
      return;
    }

    const items = [
      {
        id: product.id,
        giftCardId: product.id,

        key: `${product.slug}-${amount}`,

        slug: product.slug,
        brand: product.brand,
        title: product.title,
        color: product.color,
        discount: product.discount,

        amount,
        qty,
      },
    ];

    setCheckoutItems(items);

    setCheckoutSource("buyNow");

    try {
      sessionStorage.setItem(
        CHECKOUT_STORAGE_KEY,
        JSON.stringify({
          source: "buyNow",
          items,
        })
      );
    } catch (error) {
      console.error(
        "Unable to save Buy Now checkout:",
        error
      );
    }
  };

  /* ==========================================
     CART CHECKOUT
  ========================================== */

  const startCartCheckout = () => {
    if (cart.length === 0) {
      setMsg("Your cart is empty.");
      return false;
    }

    const items = cart.map((item) =>
      normalizeCartItem(item)
    );

    const invalidItem = items.some(
      (item) => !item.id
    );

    if (invalidItem) {
      setMsg("Please add the gift card again.");
      return false;
    }

    setCheckoutItems(items);

    setCheckoutSource("cart");

    try {
      sessionStorage.setItem(
        CHECKOUT_STORAGE_KEY,
        JSON.stringify({
          source: "cart",
          items,
        })
      );
    } catch (error) {
      console.error(
        "Unable to save cart checkout:",
        error
      );
    }

    return true;
  };

  /* ==========================================
     CLEAR CHECKOUT
  ========================================== */

  const clearCheckout = () => {
    setCheckoutItems([]);

    setCheckoutSource(null);

    try {
      sessionStorage.removeItem(
        CHECKOUT_STORAGE_KEY
      );
    } catch (error) {
      console.error(
        "Unable to clear checkout state:",
        error
      );
    }
  };

  /* ==========================================
     UPDATE CART QUANTITY
  ========================================== */

  const setQty = (key: string, qty: number) => {
    setCart((current) =>
      current
        .map((item) =>
          item.key === key
            ? {
                ...item,
                qty,
              }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  /* ==========================================
     CLEAR CART
  ========================================== */

  const clearCart = () => {
    setCart([]);
  };

  /* ==========================================
     LOGIN
  ========================================== */

  const login = (incomingUser: any) => {
    const normalizedUser = normalizeUser(incomingUser);

    if (!normalizedUser) return;

    setUser(normalizedUser);

    setMsg(
      `Welcome back, ${
        normalizedUser.name.split(/\s+/)[0]
      }!`
    );

    try {
      localStorage.setItem(
        USER_STORAGE_KEY,
        JSON.stringify(normalizedUser)
      );

      window.dispatchEvent(
        new Event("auth-change")
      );

      window.dispatchEvent(
        new Event("safalsevakendra-auth-change")
      );
    } catch (error) {
      console.error(
        "Unable to save user:",
        error
      );
    }
  };

  /* ==========================================
     LOGOUT
  ========================================== */

  const logout = () => {
    setUser(null);

    setLoginOpen(false);

    clearCheckout();

    setMsg("Logged out successfully.");

    try {
      localStorage.removeItem(USER_STORAGE_KEY);

      localStorage.removeItem(ACCESS_TOKEN_KEY);

      localStorage.removeItem(AUTH_USER_KEY);

      localStorage.removeItem(VERIFICATION_TOKEN_KEY);

      window.dispatchEvent(
        new Event("auth-change")
      );

      window.dispatchEvent(
        new Event("safalsevakendra-auth-change")
      );
    } catch (error) {
      console.error(
        "Unable to clear authentication session:",
        error
      );
    }
  };

  /* ==========================================
     ADD ORDER
  ========================================== */

  const addOrder = (order: any) => {
    setOrders((current) => [
      order,
      ...current,
    ]);
  };

  /* ==========================================
     CONTEXT VALUE
  ========================================== */

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
  };

  /* ==========================================
     PROVIDER RENDER
  ========================================== */

  return (
    <Ctx.Provider value={value}>
      <MotionConfig reducedMotion="user">
        {children}

        <AnimatePresence>
          {msg && (
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
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
  );
}
