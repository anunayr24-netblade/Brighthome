import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const HouseCleaning = () => {
  const exampleProviders = [
    { name: "SparkleClean Services", rating: "4.9", jobs: "680+", location: "Mumbai" },
    { name: "FreshHome Cleaners", rating: "4.8", jobs: "590+", location: "Delhi" },
    { name: "ProClean Solutions", rating: "4.9", jobs: "520+", location: "Bangalore" },
    { name: "PureShine Cleaning", rating: "4.7", jobs: "410+", location: "Pune" },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-green-600 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/services" className="text-white/80 hover:text-white transition">
              Services
            </Link>
            <span className="text-white/60">/</span>
            <span>House Cleaning</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-7xl">🧹</div>
            <div>
              <h1 className="text-5xl font-bold mb-4">House Cleaning Services</h1>
              <p className="text-xl text-white/90">
                Professional cleaning services for spotless and healthy homes
              </p>
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">★★★★★</span>
                  <span className="font-semibold">4.8 Rating</span>
                </div>
                <div>
                  <span className="font-semibold">250+ Providers</span>
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
              <div className="text-3xl font-bold text-teal-600">250+</div>
              <div className="text-gray-600">Professional Cleaners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">12,000+</div>
              <div className="text-gray-600">Homes Cleaned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">97%</div>
              <div className="text-gray-600">Repeat Customers</div>
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
                  About House Cleaning Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Keep your home spotless with our professional cleaning services. From regular maintenance 
                  cleaning to deep cleaning and specialized services, our verified cleaners use eco-friendly 
                  products and proven techniques to ensure your home is hygienically clean and fresh. Whether 
                  you need daily, weekly, or one-time cleaning, we have the perfect solution for you.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All cleaning professionals on BrightHome are background-verified, trained, and insured. 
                  Choose from various cleaning packages, customize services to your needs, and enjoy a 
                  spotless home without lifting a finger.
                </p>
              </div>

              {/* Services Included */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Services Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Regular House Cleaning",
                    "Deep Cleaning",
                    "Kitchen Cleaning",
                    "Bathroom Sanitization",
                    "Floor Mopping & Vacuuming",
                    "Window Cleaning",
                    "Furniture Dusting",
                    "Move-in/Move-out Cleaning",
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
              <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Why List Your Cleaning Service on BrightHome?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Steady Client Base
                      </h4>
                      <p className="text-gray-700">
                        Connect with homeowners and businesses looking for reliable cleaning services daily.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Recurring Revenue
                      </h4>
                      <p className="text-gray-700">
                        Build a base of regular clients with weekly or monthly cleaning subscriptions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Build Trust & Reviews
                      </h4>
                      <p className="text-gray-700">
                        Collect verified reviews and build a reputation as a trusted cleaning professional.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Easy Scheduling
                      </h4>
                      <p className="text-gray-700">
                        Manage bookings, track schedules, and communicate with clients through one dashboard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to List */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  How to List Your Cleaning Service
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Create Your Account
                      </h4>
                      <p className="text-gray-700">
                        Register with your business details, team size, and service areas you cover.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Complete Verification
                      </h4>
                      <p className="text-gray-700">
                        Submit identity and background verification documents. Verification takes 24-48 hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Build Your Profile
                      </h4>
                      <p className="text-gray-700">
                        Add service packages, pricing, availability, and photos showcasing your work quality.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Start Receiving Bookings
                      </h4>
                      <p className="text-gray-700">
                        Once verified, start receiving cleaning job bookings and inquiries instantly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-teal-50 border-l-4 border-teal-600 p-6 rounded">
                  <p className="text-gray-700">
                    <strong className="text-teal-600">Pro Tip:</strong> Cleaners with verified profiles, 
                    before/after photos, and excellent reviews get 6x more recurring bookings!
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Benefits of Listing Your Cleaning Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">📈</div>
                    <h4 className="font-semibold text-lg mb-2">Business Growth</h4>
                    <p className="text-gray-700 text-sm">
                      Scale your cleaning business with consistent bookings and recurring clients.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🛡️</div>
                    <h4 className="font-semibold text-lg mb-2">Verified Customers</h4>
                    <p className="text-gray-700 text-sm">
                      Work with genuine customers who value professional cleaning services.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">💳</div>
                    <h4 className="font-semibold text-lg mb-2">Secure Payments</h4>
                    <p className="text-gray-700 text-sm">
                      Get paid promptly through our secure platform after every completed job.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">📊</div>
                    <h4 className="font-semibold text-lg mb-2">Schedule Management</h4>
                    <p className="text-gray-700 text-sm">
                      Optimize your schedule, track earnings, and manage recurring bookings easily.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🎓</div>
                    <h4 className="font-semibold text-lg mb-2">Training Resources</h4>
                    <p className="text-gray-700 text-sm">
                      Access cleaning best practices, product guides, and customer service training.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🏆</div>
                    <h4 className="font-semibold text-lg mb-2">Top Performer Rewards</h4>
                    <p className="text-gray-700 text-sm">
                      Get featured listings, bonus incentives, and priority booking opportunities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Example Providers */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Featured Cleaning Providers
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
                        <div>✓ {provider.jobs} Homes Cleaned</div>
                        <div>✓ Verified & Trained</div>
                        <div>✓ Eco-Friendly</div>
                      </div>
                      <button className="mt-4 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition font-semibold">
                        View Profile & Book Now
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
                <div className="bg-gradient-to-br from-teal-600 to-green-600 text-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
                  <p className="mb-6 text-white/90">
                    Start receiving cleaning bookings within 24 hours of verification
                  </p>
                  <Link
                    to="/become-partner"
                    className="block w-full bg-white text-teal-600 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-center"
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

export default HouseCleaning;
