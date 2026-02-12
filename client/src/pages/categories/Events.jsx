import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const Events = () => {
  const services = [
    {
      title: "📋 Event Planning",
      description: "Weddings, birthdays, corporate events",
      count: "2,340+ listings",
      image: "https://images.unsplash.com/photo-1519167758481-83f19106048c?w=400&h=250&fit=crop",
    },
    {
      title: "📸 Photography",
      description: "Professional event photography",
      count: "3,890+ listings",
      image: "https://images.unsplash.com/photo-1502126613408-eca07ce68773?w=400&h=250&fit=crop",
    },
    {
      title: "🍽️ Catering",
      description: "Food & beverage services",
      count: "2,670+ listings",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561404?w=400&h=250&fit=crop",
    },
    {
      title: "🎵 DJ & Entertainment",
      description: "Music, entertainment, sound systems",
      count: "1,450+ listings",
      image: "https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=400&h=250&fit=crop",
    },
    {
      title: "🎉 Decorations",
      description: "Tent, flowers, venue decoration",
      count: "2,120+ listings",
      image: "https://images.unsplash.com/photo-1549887534-7ef5cad22f5d?w=400&h=250&fit=crop",
    },
    {
      title: "💒 Video & Cinematography",
      description: "Professional event videography",
      count: "1,890+ listings",
      image: "https://images.unsplash.com/photo-1533928298208-27ff66555d0d?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519167758481-83f19106048c?w=1200&h=400&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">🎉 Events & Services</h1>
          <p className="text-2xl text-purple-100 mb-8">
            Plan your perfect celebration
          </p>
          <Link
            to="/post-listing"
            className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition w-fit"
          >
            Offer Your Service
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Service Providers", value: "14,370+" },
            { label: "Events Organized", value: "85,000+" },
            { label: "Happy Clients", value: "200,000+" },
            { label: "Avg Rating", value: "4.8/5⭐" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="text-3xl font-bold text-purple-600">{stat.value}</div>
              <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Event Services</h2>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              14,370 providers
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.count}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition text-sm">
                    Get Quote
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose BrightHome Events?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "✓", title: "Verified Vendors", desc: "Tested & trusted professionals" },
              { icon: "💰", title: "Competitive Pricing", desc: "Get best quotes instantly" },
              { icon: "🎯", title: "Custom Plans", desc: "Tailored to your needs" },
              { icon: "📋", title: "Easy Planning", desc: "One-stop event solution" },
              { icon: "⭐", title: "Reviews", desc: "See real vendor feedback" },
              { icon: "🤝", title: "Support", desc: "We're here throughout" },
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
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Plan Your Perfect Event</h3>
          <p className="text-purple-100 mb-8 text-lg">
            Get connected with 14,000+ event professionals in your area
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/post-listing"
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Offer Your Service
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">
              Browse Services
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
