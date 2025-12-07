import { Menu, Search, ShoppingCart, X } from "lucide-react"
import { useState, type Dispatch, type SetStateAction } from "react"

interface props {
  cartCount: number
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
}

const Header = ({ cartCount, searchQuery, setSearchQuery }: props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <h1 className="text-2xl font-bold text-indigo-600">TechStore</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button className="relative p-2 text-gray-700 hover:text-indigo-600 transition">
              <ShoppingCart className="cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0  bg-indigo-600 text-white text-xs rounded-full size-5 flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-300">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-indigo-600 transition font-medium"
              >
                Home
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-indigo-600 transition font-medium"
              >
                Products
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-indigo-600 transition font-medium"
              >
                Contact
              </a>
            </nav>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-5 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
export default Header
