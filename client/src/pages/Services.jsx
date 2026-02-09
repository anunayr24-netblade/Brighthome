import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ServiceCard from "../components/services/ServiceCard";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample services data
  const services = [
    {
      id: 1,
      title: "Packers & Movers",
      icon: "📦",
      description: "Professional moving and packing services",
      category: "moving",
      rating: "4.8",
      providers: "150",
      link: "/services/packers-movers",
    },
    {
      id: 2,
      title: "Painting Services",
      icon: "🎨",
      description: "Expert interior and exterior painting",
      category: "renovation",
      rating: "4.7",
      providers: "120",
      link: "/services/painting",
    },
    {
      id: 3,
      title: "Electrician",
      icon: "⚡",
      description: "Licensed electricians for all needs",
      category: "maintenance",
      rating: "4.9",
      providers: "200",
      link: "/services/electrician",
    },
    {
      id: 4,
      title: "Plumber",
      icon: "🔧",
      description: "24/7 plumbing repair services",
      category: "maintenance",
      rating: "4.6",
      providers: "180",
      link: "/services/plumber",
    },
    {
      id: 5,
      title: "Carpenter",
      icon: "🪚",
      description: "Custom furniture and woodwork",
      category: "renovation",
      rating: "4.7",
      providers: "95",
      link: "/services/carpenter",
    },
    {
      id: 6,
      title: "House Cleaning",
      icon: "🧹",
      description: "Professional home cleaning services",
      category: "cleaning",
      rating: "4.8",
      providers: "220",
      link: "/services/house-cleaning",
    },
    {
      id: 7,
      title: "Pest Control",
      icon: "🐛",
      description: "Safe and effective pest management",
      category: "maintenance",
      rating: "4.5",
      providers: "85",
      link: "/services/pest-control",
    },
    {
      id: 8,
      title: "Interior Designer",
      icon: "🏠",
      description: "Transform your living space",
      category: "design",
      rating: "4.9",
      providers: "60",
      link: "/services/interior-designer",
    },
    {
      id: 9,
      title: "AC Repair",
      icon: "❄️",
      description: "Air conditioning installation & repair",
      category: "maintenance",
      rating: "4.7",
      providers: "140",
      link: "/services/ac-repair",
    },
    {
      id: 10,
      title: "Home Automation",
      icon: "🤖",
      description: "Smart home installation services",
      category: "technology",
      rating: "4.8",
      providers: "45",
      link: "/services/home-automation",
    },
    {
      id: 11,
      title: "Garden Maintenance",
      icon: "🌳",
      description: "Landscaping and garden care",
      category: "outdoor",
      rating: "4.6",
      providers: "70",
      link: "/services/garden-maintenance",
    },
    {
      id: 12,
      title: "Security Systems",
      icon: "🔒",
      description: "CCTV and security installation",
      category: "security",
      rating: "4.8",
      providers: "110",
      link: "/services/security-systems",
    },
  ];

  const categories = [
    { value: "all", label: "All Services" },
    { value: "moving", label: "Moving & Packing" },
    { value: "renovation", label: "Renovation" },
    { value: "maintenance", label: "Maintenance" },
    { value: "cleaning", label: "Cleaning" },
    { value: "design", label: "Design" },
    { value: "technology", label: "Technology" },
    { value: "outdoor", label: "Outdoor" },
    { value: "security", label: "Security" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <>
      <Header />

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Home Services</h1>
          <p className="text-xl mb-2">
            Connect with trusted professionals for all your home needs
          </p>
          <p className="text-white/80 mb-8">
            Over 1,500 verified service providers • 50,000+ successful projects
          </p>

          {/* SEARCH BAR */}
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-lg text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-purple-50 border-b">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">✓</div>
              <h3 className="font-bold text-lg text-gray-800">Verified Professionals</h3>
              <p className="text-sm text-gray-600">Background-checked service providers</p>
            </div>
            <div>
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="font-bold text-lg text-gray-800">Quality Guaranteed</h3>
              <p className="text-sm text-gray-600">Rated by real customers</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💰</div>
              <h3 className="font-bold text-lg text-gray-800">Best Rates</h3>
              <p className="text-sm text-gray-600">Compare quotes from multiple pros</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🛡️</div>
              <h3 className="font-bold text-lg text-gray-800">Secure Bookings</h3>
              <p className="text-sm text-gray-600">Safe payment and insurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          {/* CATEGORY FILTERS */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Categories</h3>
            <div className="flex gap-3 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    selectedCategory === category.value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* SERVICE CARDS */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              {filteredServices.length} Services Available
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Are You a Service Provider?
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Join BrightHome and connect with thousands of potential customers. 
                Grow your business with verified leads and secure payments.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Get quality leads from verified customers</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Manage bookings with easy-to-use dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Build your reputation with customer reviews</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Transparent pricing - pay only on bookings</span>
                </li>
              </ul>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-xl">
                Register as a Service Provider →
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-white/80">Service Providers</span>
                  <span className="text-3xl font-bold">1,500+</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-white/80">Cities Covered</span>
                  <span className="text-3xl font-bold">50+</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-white/80">Successful Bookings</span>
                  <span className="text-3xl font-bold">50K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Average Rating</span>
                  <span className="text-3xl font-bold">4.7 ⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
