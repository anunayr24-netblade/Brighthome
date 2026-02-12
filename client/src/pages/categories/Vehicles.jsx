import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const Vehicles = () => {
  const buyCategories = [
    {
      title: "Cars",
      icon: "🚗",
      description: "Buy & sell new and used cars",
      count: "3,450+ listings",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=250&fit=crop",
    },
    {
      title: "Bikes & Motorcycles",
      icon: "🏍️",
      description: "Explore two-wheeler options",
      count: "2,890+ listings",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    },
    {
      title: "Commercial Vehicles",
      icon: "🚚",
      description: "Trucks, buses & commercial vehicles",
      count: "1,230+ listings",
      image: "https://images.unsplash.com/photo-1581274455760-d9d125a0a63e?w=400&h=250&fit=crop",
    },
    {
      title: "Auto Parts & Accessories",
      icon: "🔧",
      description: "Parts, tyres, and accessories",
      count: "5,670+ listings",
      image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=250&fit=crop",
    },
  ];

  const services = [
    {
      title: "🔧 Car Repair & Service",
      description: "Professional maintenance and repair",
      count: "1,890+ listings",
      image: "https://images.unsplash.com/photo-1487700492686-f7f738ff4175?w=400&h=250&fit=crop",
    },
    {
      title: "🚗 Car Wash & Cleaning",
      description: "Professional detailing services",
      count: "2,340+ listings",
      image: "https://images.unsplash.com/photo-1601584942062-3cb5c9885b13?w=400&h=250&fit=crop",
    },
    {
      title: "📋 Insurance & Papers",
      description: "Vehicle insurance & documentation",
      count: "1,450+ listings",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
    },
    {
      title: "🛗 Vehicle Lifting & Hydraulics",
      description: "Lifting equipment & modifications",
      count: "890+ listings",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-red-600 to-orange-600 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=400&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">🚗 Vehicles</h1>
          <p className="text-2xl text-orange-100 mb-8">
            Buy, sell, and service vehicles with ease
          </p>
          <Link
            to="/post-listing"
            className="inline-block px-8 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition w-fit"
          >
            Post Vehicle Now
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Vehicles Listed", value: "13,240+" },
            { label: "Transactions Done", value: "12,450+" },
            { label: "Active Buyers", value: "89,000+" },
            { label: "Success Rate", value: "98.5%" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="text-3xl font-bold text-red-600">{stat.value}</div>
              <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Buy & Sell Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Buy & Sell Vehicles</h2>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
              13,240 listings
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyCategories.map((category, idx) => (
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
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {category.count}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{category.description}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition text-sm">
                    Browse
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Vehicle Services</h2>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              6,450 listings
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to="/post-listing"
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                  <div className="mt-3 text-sm font-semibold text-red-600">
                    {service.count}
                  </div>
                  <button className="mt-4 w-full py-2 px-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition text-sm">
                    Browse
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose BrightHome for Vehicles?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "✅", title: "Verified Listings", desc: "All listings are verified" },
              {
                icon: "🛡️",
                title: "Safe Transactions",
                desc: "Secure payment & ownership transfer",
              },
              { icon: "📱", title: "Easy Communication", desc: "Chat directly with sellers" },
              { icon: "🚚", title: "Delivery Support", desc: "We arrange delivery services" },
              {
                icon: "💰",
                title: "Best Prices",
                desc: "Compare prices across listings",
              },
              {
                icon: "⭐",
                title: "Rated Reviews",
                desc: "See authentic buyer reviews",
              },
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
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Buy or Sell Your Vehicle?</h3>
          <p className="text-orange-100 mb-8 text-lg">
            Get the best deals on BrightHome - Join 100,000+ vehicle traders
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/post-listing"
              className="px-8 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Post Your Vehicle
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">
              Browse Vehicles
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vehicles;
