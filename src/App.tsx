import { useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Products from "./components/Products"

const App = () => {
  const [cartCount, setCartCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartCount={cartCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Banner />
      <Products setCartCount={setCartCount} searchQuery={searchQuery} />
      <Footer />
    </div>
  )
}
export default App
