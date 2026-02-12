import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const BusinessServices = () => {
  const services = [
    {
      title: "📄 GST & Compliance",
      description: "GST registration, filing, compliance",
      count: "1,230+ listings",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
    },
    {
      title: "🏢 Company Registration",
      description: "Company formation & documentation",
      count: "890+ listings",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    },
    {
      title: "⚖️ Legal Services",
      description: "Legal consultation & documentation",
      count: "1,450+ listings",
      image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=250&fit=crop",
    },
    {
      title: "📱 Digital Marketing",
      description: "SEO, social media, content marketing",
      count: "3,560+ listings",
      image: "https://images.unsplash.com/photo-1460925895917-adf4198c869f?w=400&h=250&fit=crop",
    },
    {
      title: "💻 Web Development",
      description: "Web design & development services",
      count: "2,890+ listings",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
    },
    {
      title: "🎨 Graphic Design",
      description: "Logo, branding, graphic design",
      count: "2,120+ listings",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-slate-700 to-gray-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=400&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">🏢 Business Services</h1>
          <p className="text-2xl text-slate-200 mb-8">
            Professional solutions for your business growth
          </p>
          <Link
            to="/post-listing"
            className="inline-block px-8 py-3 bg-white text-slate-700 rounded-lg font-semibold hover:bg-gray-100 transition w-fit"
          >
            Offer Your Service
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Business Providers", value: "11,890+" },
            { label: "Businesses Helped", value: "45,000+" },
            { label: "Registrations Done", value: "32,000+" },
            { label: "Avg Rating", value: "4.7/5⭐" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="text-3xl font-bold text-slate-700">{stat.value}</div>
              <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Professional Services</h2>
            <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-semibold">
              11,890 providers
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
                  <div className="absolute top-4 right-4 bg-slate-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.count}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-slate-700 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-800 transition text-sm">
                    Get Quote
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-lg p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose BrightHome Business Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "✓", title: "Expert Professionals", desc: "Qualified & certified experts" },
              { icon: "💰", title: "Transparent Pricing", desc: "Clear costs, no hidden charges" },
              { icon: "⏱️", title: "Fast Turnaround", desc: "Quick & efficient services" },
              { icon: "🔒", title: "Confidential", desc: "100% data protection" },
              { icon: "📊", title: "Compliance", desc: "All legal requirements met" },
              { icon: "🤝", title: "Dedicated Support", desc: "One-on-one guidance" },
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
        <div className="bg-gradient-to-r from-slate-700 to-gray-800 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Grow Your Business With Us</h3>
          <p className="text-slate-300 mb-8 text-lg">
            Connect with 45,000+ businesses seeking professional services
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/post-listing"
              className="px-8 py-3 bg-white text-slate-700 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Offer Your Service
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-700 transition">
              Find Services
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessServices;
