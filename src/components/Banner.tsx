const Banner = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="bg-linear-to-r from-indigo-600 to-purple-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to TechStore
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            Discover the latest tech products at unbeatable prices
          </p>
          <button
            onClick={scrollToProducts}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition transform hover:scale-105 cursor-pointer"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}
export default Banner
