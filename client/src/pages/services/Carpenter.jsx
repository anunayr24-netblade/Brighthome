import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

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
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20 px-6">
        <div className="container mx-auto">
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
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Service Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Service */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
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
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Services Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
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
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Why List Your Carpentry Service on BrightHome?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Premium Project Leads
                      </h4>
                      <p className="text-gray-700">
                        Connect with homeowners seeking quality carpentry work for their homes and offices.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Increase Project Value
                      </h4>
                      <p className="text-gray-700">
                        Access high-value custom furniture and woodwork projects that boost your revenue.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Showcase Your Craftsmanship
                      </h4>
                      <p className="text-gray-700">
                        Build a portfolio of work, collect reviews, and establish yourself as a master carpenter.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Simple Project Management
                      </h4>
                      <p className="text-gray-700">
                        Manage inquiries, share quotes, and update project progress all through our platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to List */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  How to List Your Carpentry Service
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Create Your Account
                      </h4>
                      <p className="text-gray-700">
                        Register with your business details, experience, and specialization areas.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Complete Verification
                      </h4>
                      <p className="text-gray-700">
                        Submit identity proof and references for background verification within 24-48 hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Build Your Profile
                      </h4>
                      <p className="text-gray-700">
                        Upload photos of completed projects, your workshop, specialties, and pricing details.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Start Receiving Leads
                      </h4>
                      <p className="text-gray-700">
                        Once verified, start receiving project inquiries and custom furniture requests immediately.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
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
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">📈</div>
                    <h4 className="font-semibold text-lg mb-2">Business Growth</h4>
                    <p className="text-gray-700 text-sm">
                      Expand your customer base with consistent flow of custom furniture and repair projects.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🛡️</div>
                    <h4 className="font-semibold text-lg mb-2">Verified Customers</h4>
                    <p className="text-gray-700 text-sm">
                      Work with serious customers who value quality craftsmanship and fair pricing.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">💳</div>
                    <h4 className="font-semibold text-lg mb-2">Secure Payments</h4>
                    <p className="text-gray-700 text-sm">
                      Receive payments securely through our platform with milestone-based payment options.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">📊</div>
                    <h4 className="font-semibold text-lg mb-2">Portfolio Showcase</h4>
                    <p className="text-gray-700 text-sm">
                      Display your best work, track project history, and attract premium clients.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🎓</div>
                    <h4 className="font-semibold text-lg mb-2">Free Resources</h4>
                    <p className="text-gray-700 text-sm">
                      Access design trends, pricing guides, and business development resources.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🏆</div>
                    <h4 className="font-semibold text-lg mb-2">Recognition</h4>
                    <p className="text-gray-700 text-sm">
                      Top craftsmen get featured profiles, priority leads, and partnership opportunities.
                    </p>
                  </div>
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

            {/* Right Column - CTA Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
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
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Carpenter;
