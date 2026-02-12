import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const Health = () => {
  const services = [
    {
      title: "💪 Gym & Fitness",
      description: "Personal training & gym memberships",
      count: "4,230+ listings",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop",
    },
    {
      title: "🧘 Yoga & Meditation",
      description: "Yoga classes & wellness programs",
      count: "2,560+ listings",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop",
    },
    {
      title: "🥗 Nutrition & Diet",
      description: "Dieticians & nutritionists",
      count: "1,890+ listings",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
    },
    {
      title: "🏥 Clinics & Hospitals",
      description: "Healthcare facilities & consultations",
      count: "3,120+ listings",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=400&h=250&fit=crop",
    },
    {
      title: "🩺 Physiotherapy",
      description: "Recovery & rehabilitation services",
      count: "1,450+ listings",
      image: "https://images.unsplash.com/photo-1576091160677-112d276e5b98?w=400&h=250&fit=crop",
    },
    {
      title: "👩‍⚕️ Home Nursing",
      description: "Professional nursing care at home",
      count: "1,230+ listings",
      image: "https://images.unsplash.com/photo-1576091160679-112d276e5b9d?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-cyan-600 to-teal-700 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=400&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">🏥 Health & Wellness</h1>
          <p className="text-2xl text-cyan-100 mb-8">
            Your wellness journey starts here
          </p>
          <Link
            to="/post-listing"
            className="inline-block px-8 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition w-fit"
          >
            Offer Your Service
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Health Providers", value: "14,890+" },
            { label: "Services Booked", value: "180,000+" },
            { label: "Happy Patients", value: "350,000+" },
            { label: "Avg Rating", value: "4.9/5⭐" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="text-3xl font-bold text-cyan-600">{stat.value}</div>
              <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Wellness Services</h2>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">
              14,890 providers
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
                  <div className="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.count}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition text-sm">
                    Book Now
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Trust BrightHome Health?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "✓", title: "Certified Professionals", desc: "Qualified & licensed providers" },
              { icon: "🔒", title: "Privacy Protected", desc: "Your health data is secure" },
              { icon: "💰", title: "Affordable", desc: "Transparent pricing structure" },
              { icon: "📱", title: "Easy Booking", desc: "Schedule appointments online" },
              { icon: "⭐", title: "Verified Reviews", desc: "Real patient feedback" },
              { icon: "📞", title: "24/7 Support", desc: "Always here to help" },
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
        <div className="bg-gradient-to-r from-cyan-600 to-teal-700 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Take Control of Your Health</h3>
          <p className="text-cyan-100 mb-8 text-lg">
            Connect with wellness professionals & book services instantly
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/post-listing"
              className="px-8 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Offer Your Service
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition">
              Find Services
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Health;
