import ProductClient from "./ProductClient"

import { products } from "@/lib/data"

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductPage() {
  return <ProductClient />
}