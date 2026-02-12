import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import CarpentryImage from "../../assets/images/Carpentry.jpg";

const Carpenter = () => {
  const exampleProviders = [
    { name: "WoodCraft Masters", rating: "4.9", jobs: "520+", location: "Mumbai" },
    { name: "Expert Carpenters Co.", rating: "4.8", jobs: "460+", location: "Delhi" },
    { name: "Premium Woodworks", rating: "4.7", jobs: "390+", location: "Bangalore" },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20 px-6 relative overflow-hidden" style={{
        backgroundImage: `url(${CarpentryImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-orange-600/90"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/services" className="text-white/80 hover:text-white transition">
              Services
            </Link>
            <span className="text-white/60">/</span>
            <span>Carpenter</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-7xl">🪚</div>
            <div>
              <h1 className="text-5xl font-bold mb-4">Carpenter Services</h1>
              <p className="text-xl text-white/90">
                Professional furniture making, repair, and custom woodwork solutions
              </p>
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">★★★★★</span>
                  <span className="font-semibold">4.8 Rating</span>
                </div>
                <div>
                  <span className="font-semibold">180+ Providers</span>
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
              <div className="text-3xl font-bold text-amber-600">180+</div>
              <div className="text-gray-600">Skilled Carpenters</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">6,500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">95%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
              {/* About Service */}
              <div className="py-8 border-b border-gray-200">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  About Carpentry Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  From custom furniture to intricate woodwork, our skilled carpenters bring craftsmanship and 
                  precision to every project. Whether you need furniture repair, custom cabinets, doors, 
                  windows, or complete woodwork solutions, our verified carpenters deliver quality work that 
                  stands the test of time.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All registered carpenters on BrightHome are experienced professionals with verified portfolios 
                  and customer reviews. Compare quotes, view past work, and hire trusted carpenters for 
                  residential and commercial projects of any scale.
                </p>
              </div>

              {/* Services Included */}
              <div className="py-8 border-b border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Services Included</h3>
                <div className="flex gap-12 items-start">
                  {/* Services Grid 2x1 */}
                  <div className="flex-1 grid grid-cols-2 gap-6">
                    {[
                      "Custom Furniture Making",
                      "Furniture Repair",
                      "Door Installation & Repair",
                      "Window Fitting",
                      "Kitchen Cabinets",
                      "Wardrobes & Storage",
                      "Wooden Flooring",
                      "Deck Building",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">✓</span>
                        </div>
                        <span className="text-gray-800 font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Image */}
                  <div className="flex-1 flex items-center justify-end">
                    <img 
                      src={CarpentryImage} 
                      alt="Carpenter Services"
                      className="rounded-xl shadow-lg w-full max-w-sm object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Why List Your Service */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Why List Your Carpentry Service on BrightHome?
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: "🎯",
                      title: "Premium Project Leads",
                      desc: "Connect with homeowners seeking quality carpentry work for their homes and offices."
                    },
                    {
                      icon: "💰",
                      title: "Increase Project Value",
                      desc: "Access high-value custom furniture and woodwork projects that boost your revenue."
                    },
                    {
                      icon: "⭐",
                      title: "Showcase Your Craftsmanship",
                      desc: "Build a portfolio of work, collect reviews, and establish yourself as a master carpenter."
                    },
                    {
                      icon: "📱",
                      title: "Simple Project Management",
                      desc: "Manage inquiries, share quotes, and update project progress all through our platform."
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 animate-slideUpIn hover-scale-105 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-all group"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <div className="text-4xl group-hover:animate-iconPulse">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800 mb-1 group-hover:text-amber-600 transition">
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
                  How to List Your Carpentry Service
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      num: "1",
                      title: "Create Your Account",
                      desc: "Register with your business details, experience, and specialization areas."
                    },
                    {
                      num: "2",
                      title: "Complete Verification",
                      desc: "Submit identity proof and references for background verification within 24-48 hours."
                    },
                    {
                      num: "3",
                      title: "Build Your Profile",
                      desc: "Upload photos of completed projects, your workshop, specialties, and pricing details."
                    },
                    {
                      num: "4",
                      title: "Start Receiving Leads",
                      desc: "Once verified, start receiving project inquiries and custom furniture requests immediately."
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 animate-detailBounce hover:shadow-lg transition-shadow group"
                      style={{animationDelay: `${index * 150}ms`}}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-full flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                        {item.num}
                      </div>
                      <div className="group-hover:translate-x-1 transition-transform">
                        <h4 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-amber-600 transition">
                          {item.title}
                        </h4>
                        <p className="text-gray-700">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-amber-50 border-l-4 border-amber-600 p-6 rounded animate-slideUpIn" style={{animationDelay: "600ms"}}>
                  <p className="text-gray-700">
                    <strong className="text-amber-600">Pro Tip:</strong> Carpenters with detailed portfolios, 
                    project photos, and excellent reviews get 5x more project inquiries!
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Benefits of Listing Your Carpentry Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: "📈",
                      title: "Business Growth",
                      desc: "Expand your customer base with consistent flow of custom furniture and repair projects."
                    },
                    {
                      icon: "🛡️",
                      title: "Verified Customers",
                      desc: "Work with serious customers who value quality craftsmanship and fair pricing."
                    },
                    {
                      icon: "💳",
                      title: "Secure Payments",
                      desc: "Receive payments securely through our platform with milestone-based payment options."
                    },
                    {
                      icon: "📊",
                      title: "Portfolio Showcase",
                      desc: "Display your best work, track project history, and attract premium clients."
                    },
                    {
                      icon: "🎓",
                      title: "Free Resources",
                      desc: "Access design trends, pricing guides, and business development resources."
                    },
                    {
                      icon: "🏆",
                      title: "Recognition",
                      desc: "Top craftsmen get featured profiles, priority leads, and partnership opportunities."
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-5 shadow hover:shadow-xl animate-scaleIn hover-scale-105 group transition-all border border-transparent hover:border-amber-200"
                      style={{animationDelay: `${index * 80}ms`}}
                    >
                      <div className="text-4xl mb-3 group-hover:animate-iconPulse inline-block">{item.icon}</div>
                      <h4 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-amber-600 transition">
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
                  Featured Carpentry Providers
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
                        <div>✓ {provider.jobs} Projects Done</div>
                        <div>✓ Verified Pro</div>
                        <div>✓ Custom Work</div>
                      </div>
                      <button className="mt-4 w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition font-semibold">
                        View Profile & Get Quote
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Register CTA */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
              <p className="mb-6 text-white/90">
                Start receiving carpentry project requests within 24 hours
              </p>
              <Link
                to="/become-partner"
                className="block w-full bg-white text-amber-600 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-center"
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
      </section>

      <Footer />
    </>
  );
};

export default Carpenter;
