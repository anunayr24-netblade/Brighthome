import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const Plumber = () => {
  const exampleProviders = [
    { name: "FlowPro Plumbing", rating: "4.9", jobs: "450+", location: "Mumbai" },
    { name: "QuickFix Plumbers", rating: "4.8", jobs: "380+", location: "Delhi" },
    { name: "WaterWorks Solutions", rating: "4.7", jobs: "310+", location: "Bangalore" },
    { name: "PipeLine Experts", rating: "4.8", jobs: "290+", location: "Pune" },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/services" className="text-white/80 hover:text-white transition">
              Services
            </Link>
            <span className="text-white/60">/</span>
            <span>Plumber</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-7xl">🔧</div>
            <div>
              <h1 className="text-5xl font-bold mb-4">Plumber Services</h1>
              <p className="text-xl text-white/90">
                Expert plumbing repairs, installations, and maintenance for your home
              </p>
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">★★★★★</span>
                  <span className="font-semibold">4.8 Rating</span>
                </div>
                <div>
                  <span className="font-semibold">200+ Providers</span>
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
              <div className="text-3xl font-bold text-blue-600">200+</div>
              <div className="text-gray-600">Verified Plumbers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">8,000+</div>
              <div className="text-gray-600">Jobs Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
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
                  About Plumbing Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  From leaky faucets to major pipe installations, our professional plumbers handle all your 
                  plumbing needs with expertise and efficiency. Whether you need emergency repairs, routine 
                  maintenance, or new installations, our verified plumbers are available 24/7 to keep your 
                  home's plumbing system running smoothly.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All registered plumbers on BrightHome are licensed, background-verified, and equipped with 
                  professional tools and materials. Get instant quotes, compare prices, read genuine reviews, 
                  and book trusted plumbers for any residential or commercial plumbing work.
                </p>
              </div>

              {/* Services Included */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Services Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Leak Detection & Repair",
                    "Pipe Installation",
                    "Drain Cleaning",
                    "Water Heater Services",
                    "Faucet & Fixture Repair",
                    "Bathroom Plumbing",
                    "Kitchen Plumbing",
                    "Emergency Repairs",
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
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Why List Your Plumbing Service on BrightHome?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Consistent Lead Flow
                      </h4>
                      <p className="text-gray-700">
                        Connect with homeowners and businesses seeking reliable plumbers in your service area daily.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Boost Your Income
                      </h4>
                      <p className="text-gray-700">
                        Receive high-quality leads and emergency job requests from verified customers ready to pay.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Grow Your Reputation
                      </h4>
                      <p className="text-gray-700">
                        Build trust with verified reviews and establish your business as a go-to plumbing expert.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Simple Job Management
                      </h4>
                      <p className="text-gray-700">
                        Accept jobs, schedule appointments, and manage customer communication all in one place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to List */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  How to List Your Plumbing Service
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Create Your Account
                      </h4>
                      <p className="text-gray-700">
                        Register as a service provider with your business details, plumbing license, and insurance.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Complete Verification
                      </h4>
                      <p className="text-gray-700">
                        Submit required documents for background verification. Typically completed within 24-48 hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Build Your Profile
                      </h4>
                      <p className="text-gray-700">
                        Add photos of completed work, service areas, certifications, and competitive pricing.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Start Receiving Leads
                      </h4>
                      <p className="text-gray-700">
                        Once verified, you'll immediately start receiving job requests and customer inquiries.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                  <p className="text-gray-700">
                    <strong className="text-blue-600">Pro Tip:</strong> Plumbers with complete profiles, 
                    verified licenses, and 5-star reviews get 4x more job requests!
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Benefits of Listing Your Plumbing Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">📈</div>
                    <h4 className="font-semibold text-lg mb-2">Business Growth</h4>
                    <p className="text-gray-700 text-sm">
                      Scale your plumbing business with steady customer flow and emergency job opportunities.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🛡️</div>
                    <h4 className="font-semibold text-lg mb-2">Verified Customers</h4>
                    <p className="text-gray-700 text-sm">
                      Work with verified customers, reducing time-wasters and ensuring payment security.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">💳</div>
                    <h4 className="font-semibold text-lg mb-2">Secure Payments</h4>
                    <p className="text-gray-700 text-sm">
                      Get paid quickly through our secure platform with multiple payment options available.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">📊</div>
                    <h4 className="font-semibold text-lg mb-2">Analytics Dashboard</h4>
                    <p className="text-gray-700 text-sm">
                      Monitor your job history, earnings, customer ratings, and business performance metrics.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🎓</div>
                    <h4 className="font-semibold text-lg mb-2">Free Resources</h4>
                    <p className="text-gray-700 text-sm">
                      Access business tips, pricing guides, and technical training resources to enhance skills.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🏆</div>
                    <h4 className="font-semibold text-lg mb-2">Top Performer Benefits</h4>
                    <p className="text-gray-700 text-sm">
                      Get featured listings, priority job alerts, and exclusive partnership opportunities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Example Providers */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Featured Plumbing Providers
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
                        <div>✓ Licensed & Insured</div>
                        <div>✓ 24/7 Available</div>
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
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
                  <p className="mb-6 text-white/90">
                    Start receiving plumbing job requests within 24 hours of verification
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

export default Plumber;
