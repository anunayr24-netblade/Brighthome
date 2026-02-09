import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const ACRepair = () => {
  const exampleProviders = [
    { name: "CoolTech AC Services", rating: "4.9", jobs: "720+", location: "Mumbai" },
    { name: "ChillMax Repairs", rating: "4.8", jobs: "640+", location: "Delhi" },
    { name: "FrostCare Solutions", rating: "4.8", jobs: "580+", location: "Bangalore" },
    { name: "AirCool Experts", rating: "4.7", jobs: "510+", location: "Pune" },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/services" className="text-white/80 hover:text-white transition">
              Services
            </Link>
            <span className="text-white/60">/</span>
            <span>AC Repair</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-7xl">❄️</div>
            <div>
              <h1 className="text-5xl font-bold mb-4">AC Repair & Installation</h1>
              <p className="text-xl text-white/90">
                Professional AC installation, repair, and maintenance services
              </p>
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">★★★★★</span>
                  <span className="font-semibold">4.8 Rating</span>
                </div>
                <div>
                  <span className="font-semibold">220+ Providers</span>
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
              <div className="text-3xl font-bold text-cyan-600">220+</div>
              <div className="text-gray-600">Certified Technicians</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600">10,000+</div>
              <div className="text-gray-600">ACs Serviced</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600">24/7</div>
              <div className="text-gray-600">Emergency Support</div>
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
                  About AC Repair & Installation Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Keep your home cool and comfortable with our professional AC services. From new installations 
                  and repairs to regular maintenance and gas refilling, our certified technicians handle all 
                  major AC brands and models. Whether it's a split AC, window AC, or central cooling system, 
                  we ensure optimal performance and energy efficiency.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All AC technicians on BrightHome are certified, experienced, and equipped with genuine spare 
                  parts. Get quick service appointments, transparent pricing, genuine parts warranty, and 
                  reliable AC solutions for your home or office.
                </p>
              </div>

              {/* Services Included */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Services Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "AC Installation",
                    "AC Repair",
                    "Gas Refilling",
                    "AC Servicing & Cleaning",
                    "Compressor Repair",
                    "PCB Replacement",
                    "AC Uninstallation",
                    "Annual Maintenance",
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
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Why List Your AC Service on BrightHome?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Year-Round Demand
                      </h4>
                      <p className="text-gray-700">
                        Connect with customers needing AC services throughout the year, especially in summer.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Multiple Revenue Streams
                      </h4>
                      <p className="text-gray-700">
                        Earn from installations, repairs, servicing, and annual maintenance contracts.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Build Customer Loyalty
                      </h4>
                      <p className="text-gray-700">
                        Collect reviews, secure repeat customers, and grow your local reputation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Easy Job Management
                      </h4>
                      <p className="text-gray-700">
                        Schedule appointments, track service history, and manage customer calls effortlessly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to List */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  How to List Your AC Service
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Create Your Account
                      </h4>
                      <p className="text-gray-700">
                        Register with your business details, technician certifications, and service areas.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Complete Verification
                      </h4>
                      <p className="text-gray-700">
                        Submit technician certifications and identity proof for verification within 24-48 hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Build Your Profile
                      </h4>
                      <p className="text-gray-700">
                        Add supported brands, service types, pricing, spare parts availability, and photos.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Start Receiving Calls
                      </h4>
                      <p className="text-gray-700">
                        Once verified, receive AC repair and installation requests immediately.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded">
                  <p className="text-gray-700">
                    <strong className="text-cyan-600">Pro Tip:</strong> Technicians offering emergency service, 
                    genuine parts, and warranties get 5x more bookings during peak season!
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Benefits of Listing Your AC Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">📈</div>
                    <h4 className="font-semibold text-lg mb-2">Business Growth</h4>
                    <p className="text-gray-700 text-sm">
                      Expand your customer base with consistent service requests all year round.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🛡️</div>
                    <h4 className="font-semibold text-lg mb-2">Verified Customers</h4>
                    <p className="text-gray-700 text-sm">
                      Work with genuine customers who need urgent AC repairs and quality service.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">💳</div>
                    <h4 className="font-semibold text-lg mb-2">Instant Payments</h4>
                    <p className="text-gray-700 text-sm">
                      Receive quick payments through our secure platform after service completion.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">📊</div>
                    <h4 className="font-semibold text-lg mb-2">Service Tracking</h4>
                    <p className="text-gray-700 text-sm">
                      Track service history, manage AMC contracts, and schedule preventive maintenance.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🎓</div>
                    <h4 className="font-semibold text-lg mb-2">Technical Training</h4>
                    <p className="text-gray-700 text-sm">
                      Access product manuals, troubleshooting guides, and technician training resources.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🏆</div>
                    <h4 className="font-semibold text-lg mb-2">Recognition</h4>
                    <p className="text-gray-700 text-sm">
                      Top technicians get featured profiles, priority leads, and brand partnerships.
                    </p>
                  </div>
                </div>
              </div>

              {/* Example Providers */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Featured AC Service Providers
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
                        <div>✓ {provider.jobs} ACs Serviced</div>
                        <div>✓ Certified Tech</div>
                        <div>✓ Same Day Service</div>
                      </div>
                      <button className="mt-4 w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition font-semibold">
                        View Profile & Book Service
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
                <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
                  <p className="mb-6 text-white/90">
                    Start receiving AC service requests within 24 hours
                  </p>
                  <Link
                    to="/become-partner"
                    className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-center"
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

export default ACRepair;
