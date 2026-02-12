import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const PackersMovers = () => {
  const exampleProviders = [
    { name: "SwiftMove Packers", rating: "4.9", jobs: "500+", location: "Mumbai" },
    { name: "SafePack Movers", rating: "4.8", jobs: "350+", location: "Delhi" },
    { name: "Express Relocations", rating: "4.7", jobs: "420+", location: "Bangalore" },
    { name: "ProMove Services", rating: "4.6", jobs: "280+", location: "Pune" },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/services" className="text-white/80 hover:text-white transition">
              Services
            </Link>
            <span className="text-white/60">/</span>
            <span>Packers & Movers</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-7xl">📦</div>
            <div>
              <h1 className="text-5xl font-bold mb-4">Packers & Movers</h1>
              <p className="text-xl text-white/90">
                Professional moving and packing services for stress-free relocation
              </p>
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">★★★★★</span>
                  <span className="font-semibold">4.8 Rating</span>
                </div>
                <div>
                  <span className="font-semibold">150+ Providers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <div className="text-gray-600">Verified Providers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">5,000+</div>
              <div className="text-gray-600">Successful Moves</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Service Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Service */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  About Packers & Movers Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Moving to a new home or office can be overwhelming. Our professional packers and movers 
                  take the stress out of relocation with comprehensive services including packing, loading, 
                  transportation, unloading, and unpacking. Whether you're moving locally or across states, 
                  our verified providers ensure your belongings reach safely and on time.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All our registered packers and movers are background-verified, insured, and equipped with 
                  professional packing materials and vehicles. Get multiple quotes, compare prices, read 
                  reviews, and book the best service provider for your moving needs.
                </p>
              </div>

              {/* Services Included */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Services Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Professional Packing",
                    "Loading & Unloading",
                    "Safe Transportation",
                    "Unpacking Services",
                    "Furniture Dismantling",
                    "Insurance Coverage",
                    "Storage Solutions",
                    "Vehicle Transportation",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why List Your Service */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Why List Your Packing & Moving Service on BrightHome?
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: "🎯",
                      title: "Reach Thousands of Customers",
                      desc: "Connect with homeowners and businesses actively looking for moving services in your area."
                    },
                    {
                      icon: "💰",
                      title: "Increase Your Revenue",
                      desc: "Get quality leads and booking requests directly from verified customers ready to hire."
                    },
                    {
                      icon: "⭐",
                      title: "Build Your Reputation",
                      desc: "Showcase your work, collect reviews, and establish yourself as a trusted service provider."
                    },
                    {
                      icon: "📱",
                      title: "Easy Management",
                      desc: "Manage bookings, respond to inquiries, and update your profile with our simple dashboard."
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 animate-slideUpIn hover-scale-105 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-all group"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <div className="text-4xl group-hover:animate-iconPulse">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800 mb-1 group-hover:text-blue-600 transition">
                          {item.title}
                        </h4>
                        <p className="text-gray-700">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to List */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  How to List Your Packing & Moving Service
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      num: "1",
                      title: "Create Your Account",
                      desc: "Register as a service provider with your business details, licenses, and insurance documents."
                    },
                    {
                      num: "2",
                      title: "Complete Verification",
                      desc: "Submit required documents for background verification. This typically takes 24-48 hours."
                    },
                    {
                      num: "3",
                      title: "Build Your Profile",
                      desc: "Add photos of your vehicles, team, past projects, service areas, and pricing information."
                    },
                    {
                      num: "4",
                      title: "Start Receiving Leads",
                      desc: "Once verified, you'll start receiving booking requests and customer inquiries instantly."
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 animate-detailBounce hover:shadow-lg transition-shadow group"
                      style={{animationDelay: `${index * 150}ms`}}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                        {item.num}
                      </div>
                      <div className="group-hover:translate-x-1 transition-transform">
                        <h4 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition">
                          {item.title}
                        </h4>
                        <p className="text-gray-700">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded animate-slideUpIn" style={{animationDelay: "600ms"}}>
                  <p className="text-gray-700">
                    <strong className="text-blue-600">Pro Tip:</strong> Providers with complete profiles, 
                    verified documents, and positive reviews get 3x more booking requests!
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Benefits of Listing Your Moving Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: "📈",
                      title: "Business Growth",
                      desc: "Expand your customer base and grow your business with consistent lead flow."
                    },
                    {
                      icon: "🛡️",
                      title: "Verified Customers",
                      desc: "All customers on our platform are verified, reducing no-show appointments."
                    },
                    {
                      icon: "💳",
                      title: "Secure Payments",
                      desc: "Get paid securely through our platform with multiple payment options."
                    },
                    {
                      icon: "📊",
                      title: "Analytics Dashboard",
                      desc: "Track your performance, earnings, and customer feedback in real-time."
                    },
                    {
                      icon: "🎓",
                      title: "Free Training",
                      desc: "Access business tips, customer service training, and industry best practices."
                    },
                    {
                      icon: "🏆",
                      title: "Recognition",
                      desc: "Top performers get featured listings and exclusive partnership opportunities."
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-5 shadow hover:shadow-xl animate-scaleIn hover-scale-105 group transition-all border border-transparent hover:border-blue-200"
                      style={{animationDelay: `${index * 80}ms`}}
                    >
                      <div className="text-4xl mb-3 group-hover:animate-iconPulse inline-block">{item.icon}</div>
                      <h4 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example Providers */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Featured Packers & Movers Providers
                </h3>
                <div className="space-y-4">
                  {exampleProviders.map((provider, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-800">
                            {provider.name}
                          </h4>
                          <p className="text-gray-600">{provider.location}</p>
                        </div>
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                          ★ {provider.rating}
                        </div>
                      </div>
                      <div className="flex gap-6 text-sm text-gray-600">
                        <div>✓ {provider.jobs} Completed Jobs</div>
                        <div>✓ Verified & Insured</div>
                        <div>✓ 24/7 Support</div>
                      </div>
                      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                        View Profile & Get Quote
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - CTA Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                {/* Register CTA */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
                  <p className="mb-6 text-white/90">
                    Start getting booking requests within 24 hours of verification
                  </p>
                  <Link
                    to="/become-partner"
                    className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-center"
                  >
                    Register Now
                  </Link>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="text-sm space-y-2">
                      <div className="flex items-center gap-2">
                        <span>✓</span>
                        <span>Free Registration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✓</span>
                        <span>No Hidden Charges</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✓</span>
                        <span>Cancel Anytime</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Support */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h4 className="font-bold text-lg mb-4">Need Help?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Have questions about listing your service? Our team is here to help!
                  </p>
                  <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition font-semibold">
                    Contact Support
                  </button>
                </div>

                {/* Pricing Info */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <h4 className="font-bold text-lg mb-3 text-green-800">
                    💰 Transparent Pricing
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Only pay when you get a confirmed booking. No subscription fees!
                  </p>
                  <div className="text-2xl font-bold text-green-600">
                    8-12% Commission
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Per successful booking</div>
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

export default PackersMovers;
