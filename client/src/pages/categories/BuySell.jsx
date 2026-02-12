import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const BuySell = () => {
  const categories = [
    {
      title: "📱 Electronics",
      description: "Mobiles, laptops, cameras & more",
      count: "12,340+ listings",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop",
    },
    {
      title: "🏠 Home & Furniture",
      description: "Furniture, appliances, kitchen items",
      count: "8,560+ listings",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=250&fit=crop",
    },
    {
      title: "👔 Fashion",
      description: "Clothing, shoes, accessories",
      count: "15,230+ listings",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    },
    {
      title: "📚 Books & Media",
      description: "Books, magazines, educational materials",
      count: "4,890+ listings",
      image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=250&fit=crop",
    },
    {
      title: "⚽ Sports & Fitness",
      description: "Equipment, gear, sports items",
      count: "3,450+ listings",
      image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=250&fit=crop",
    },
    {
      title: "🎸 Musical Instruments",
      description: "Guitars, keyboards, drums & more",
      count: "2,120+ listings",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-pink-600 to-rose-600 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=400&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">🛍️ Buy & Sell</h1>
          <p className="text-2xl text-rose-100 mb-8">
            Discover secondhand deals and new items
          </p>
          <Link
            to="/post-listing"
            className="inline-block px-8 py-3 bg-white text-pink-600 rounded-lg font-semibold hover:bg-gray-100 transition w-fit"
          >
            Post Item Now
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Items Listed", value: "46,590+" },
            { label: "Active Buyers", value: "180,000+" },
            { label: "Transactions", value: "250,000+" },
            { label: "Avg Rating", value: "4.7/5⭐" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="text-3xl font-bold text-pink-600">{stat.value}</div>
              <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">All Categories</h2>
            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
              46,590 listings
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <Link
                key={idx}
                to="/post-listing"
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {category.count}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{category.description}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition text-sm">
                    Browse
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Shop on BrightHome?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "✓", title: "Safe Transactions", desc: "Secure buyer-seller protection" },
              { icon: "💰", title: "Best Prices", desc: "Find deals on quality items" },
              { icon: "📱", title: "Easy Browsing", desc: "Filter & search easily" },
              { icon: "🚚", title: "Delivery Options", desc: "Checkout with shipping" },
              { icon: "⭐", title: "Rated Reviews", desc: "Buy with confidence" },
              { icon: "🔒", title: "Verified Users", desc: "Community verified sellers" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Buy or Sell?</h3>
          <p className="text-rose-100 mb-8 text-lg">
            Join 500,000+ users buying & selling on BrightHome
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/post-listing"
              className="px-8 py-3 bg-white text-pink-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Post Your Item
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition">
              Browse Listings
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BuySell;
