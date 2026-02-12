import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const HomeServices = () => {
  const services = [
    {
      title: "🔧 Electrician",
      description: "Wiring, repairs, installations",
      count: "2,340+ listings",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop",
    },
    {
      title: "🚰 Plumber",
      description: "Pipe repair, water systems",
      count: "2,120+ listings",
      image: "https://images.unsplash.com/photo-1585509742656-d0ba44b65b3c?w=400&h=250&fit=crop",
    },
    {
      title: "🪵 Carpenter",
      description: "Wood work, furniture, repairs",
      count: "1,890+ listings",
      image: "https://images.unsplash.com/photo-1541123603104-852fc8324860?w=400&h=250&fit=crop",
    },
    {
      title: "❄️ AC Repair & Service",
      description: "Installation, maintenance, repair",
      count: "2,560+ listings",
      image: "https://images.unsplash.com/photo-1545874534-7d29b8d20da3?w=400&h=250&fit=crop",
    },
    {
      title: "🎨 Painting Services",
      description: "Interior & exterior painting",
      count: "1,670+ listings",
      image: "https://images.unsplash.com/photo-1581092162562-40038f60dd12?w=400&h=250&fit=crop",
    },
    {
      title: "🛋️ Cleaning Services",
      description: "Home, sofa, carpet cleaning",
      count: "3,450+ listings",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-amber-600 to-amber-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=400&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">🛠 Home Services</h1>
          <p className="text-2xl text-amber-100 mb-8">
            Connect with trusted professionals for all your home needs
          </p>
          <Link
            to="/post-listing"
            className="inline-block px-8 py-3 bg-white text-amber-600 rounded-lg font-semibold hover:bg-gray-100 transition w-fit"
          >
            Offer Your Service
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Service Providers", value: "18,030+" },
            { label: "Services Completed", value: "95,000+" },
            { label: "Happy Customers", value: "120,000+" },
            { label: "Avg Rating", value: "4.8/5⭐" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="text-3xl font-bold text-amber-600">{stat.value}</div>
              <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Popular Services</h2>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
              18,030+ listings
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
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.count}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition text-sm">
                    Browse
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why BrightHome Home Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "✓", title: "Verified Professionals", desc: "All verified & background checked" },
              { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges, clear quotes" },
              { icon: "🛡️", title: "Quality Guarantee", desc: "Work guarantee & insurance" },
              { icon: "📱", title: "Easy Booking", desc: "Book online in just 2 clicks" },
              { icon: "📞", title: "24/7 Support", desc: "Round-the-clock customer support" },
              { icon: "⭐", title: "Rated Reviews", desc: "Real customer ratings & reviews" },
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
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need a Service or Have a Skill?</h3>
          <p className="text-orange-100 mb-8 text-lg">
            Both customers & service providers are welcomed on BrightHome
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/post-listing"
              className="px-8 py-3 bg-white text-amber-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Post Service
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition">
              Browse Services
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomeServices;
