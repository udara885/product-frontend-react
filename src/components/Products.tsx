import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import ProductCard from "./ProductCard"
import type Product from "../types/product"

interface props {
  setCartCount: Dispatch<SetStateAction<number>>
  searchQuery: string
}

const Products = ({ setCartCount, searchQuery }: props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      if (!res.ok) {
        throw new Error("Failed to fetch products")
      }
      const data = await res.json()
      setProducts(data)
      setError(null)
    } catch (error: any) {
      console.error("Error fetching products: ", error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section
      id="products"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
        Our Products
      </h2>
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full size-12 border-b-2 border-indigo-600" />
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      )}
      {error && !loading && (
        <div className="text-center py-12">
          <p className="mb-4 text-gray-600">API connection failed.</p>
        </div>
      )}
      {!loading && filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No products found.</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            setCartCount={setCartCount}
          />
        ))}
      </div>
    </section>
  )
}
export default Products
