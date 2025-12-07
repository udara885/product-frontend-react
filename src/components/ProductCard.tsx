import type { Dispatch, SetStateAction } from "react"
import type Product from "../types/product"

interface props {
  product: Product
  setCartCount: Dispatch<SetStateAction<number>>
}

const ProductCard = ({ product, setCartCount }: props) => {
  const handleAddToCart = () => {
    setCartCount(prev => prev + 1)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
      <div className="aspect-square bg-gray-200 overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="size-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">
            ${product.price}
          </span>
          <button
            className="px-6 py-2 rounded-lg transition-all duration-300 transform font-semibold bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 active:scale-95 cursor-pointer"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductCard
