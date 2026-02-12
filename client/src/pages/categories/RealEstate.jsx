import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const RealEstate = () => {
  const buyOptions = [
    {
      title: "Apartments for Sale",
      icon: "🏢",
      description: "Modern apartments in prime locations",
      count: "2,340+ listings",
      image: "https://images.unsplash.com/photo-1545324418-cc1a9f4ef042?w=400&h=250&fit=crop",
    },
    {
      title: "Independent House",
      icon: "🏠",
      description: "Spacious independent homes",
      count: "1,890+ listings",
      image: "https://images.unsplash.com/photo-1570129477492-45a003537e1b?w=400&h=250&fit=crop",
    },
    {
      title: "Villas",
      icon: "🏛️",
      description: "Luxury villas with premium amenities",
      count: "890+ listings",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop",
    },
    {
      title: "Plots & Land",
      icon: "🌍",
      description: "Plots for investment & construction",
      count: "3,120+ listings",
      image: "https://images.unsplash.com/photo-1500382017468-7049faf28e74?w=400&h=250&fit=crop",
    },
  ];

  const rentOptions = [
    {
      title: "Apartments for Rent",
      icon: "🔑",
      description: "Affordable rental apartments",
      count: "4,560+ listings",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop",
    },
    {
      title: "House for Rent",
      icon: "🏡",
      description: "Family houses available now",
      count: "2,340+ listings",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop",
    },
    {
      title: "PG & Hostel",
      icon: "👥",
      description: "Budget-friendly shared spaces",
      count: "1,240+ listings",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    },
  ];

  const serviceProviders = [
    { name: "Property Dealers", icon: "👨‍💼" },
    { name: "Home Loan Agents", icon: "🏦" },
    { name: "Legal Documentation", icon: "📄" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c62733eee317?w=1200&h=400&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">🏡 Real Estate</h1>
          <p className="text-2xl text-blue-100 mb-8">
            Find your dream home or investment property
          </p>
          <Link
            to="/post-listing"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition w-fit"
          >
            Post Property Now
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Active Listings", value: "12,890+" },
            { label: "Properties Sold", value: "8,340+" },
            { label: "Happy Customers", value: "45,000+" },
            { label: "Cities Covered", value: "50+" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Buy Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">🏠 Buy Property</h2>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              12,240 listings
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyOptions.map((option, idx) => (
              <Link
                key={idx}
                to="/post-listing"
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {option.count}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">{option.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{option.description}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-sm">
                    Browse
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Rent Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">🔑 Rent Property</h2>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              7,140 listings
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rentOptions.map((option, idx) => (
              <Link
                key={idx}
                to="/post-listing"
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {option.count}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">{option.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{option.description}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition text-sm">
                    Browse
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Service Providers */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            👨‍💼 Connect with Professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceProviders.map((provider, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 shadow-md text-center hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{provider.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {provider.name}
                </h3>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                  Connect Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Buy, Sell, or Rent?</h3>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of property seekers and investors on BrightHome
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/post-listing"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Post Property
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Browse Properties
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RealEstate;
