import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const InteriorDesigner = () => {
  const exampleProviders = [
    { name: "UrbanSpace Designers", rating: "4.9", jobs: "220+", location: "Mumbai" },
    { name: "ModernLiving Interiors", rating: "4.8", jobs: "180+", location: "Delhi" },
    { name: "EliteDesign Studio", rating: "4.9", jobs: "160+", location: "Bangalore" },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/services" className="text-white/80 hover:text-white transition">
              Services
            </Link>
            <span className="text-white/60">/</span>
            <span>Interior Designer</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-7xl">🏠</div>
            <div>
              <h1 className="text-5xl font-bold mb-4">Interior Designer Services</h1>
              <p className="text-xl text-white/90">
                Transform your space with professional interior design and decoration
              </p>
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">★★★★★</span>
                  <span className="font-semibold">4.9 Rating</span>
                </div>
                <div>
                  <span className="font-semibold">120+ Providers</span>
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
              <div className="text-3xl font-bold text-purple-600">120+</div>
              <div className="text-gray-600">Professional Designers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">3,500+</div>
              <div className="text-gray-600">Projects Designed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">96%</div>
              <div className="text-gray-600">Client Satisfaction</div>
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
                  About Interior Design Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Create your dream space with our talented interior designers. From concept development to 
                  complete execution, our designers bring your vision to life with creative solutions, quality 
                  materials, and attention to detail. Whether it's a single room refresh or a full home 
                  renovation, we match you with designers who understand your style and budget.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All interior designers on BrightHome have verified portfolios showcasing their work across 
                  various styles—modern, traditional, minimalist, luxury, and more. View their projects, read 
                  client testimonials, and hire the perfect designer for your residential or commercial space.
                </p>
              </div>

              {/* Services Included */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Services Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Complete Home Design",
                    "Room Renovation",
                    "Space Planning",
                    "3D Visualization",
                    "Furniture Selection",
                    "Color Consultation",
                    "Lighting Design",
                    "Project Management",
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
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Why List Your Interior Design Service on BrightHome?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Premium Client Access
                      </h4>
                      <p className="text-gray-700">
                        Connect with homeowners and businesses ready to invest in quality interior design.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        High-Value Projects
                      </h4>
                      <p className="text-gray-700">
                        Access full home renovations and commercial projects that significantly boost revenue.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Portfolio Showcase
                      </h4>
                      <p className="text-gray-700">
                        Display your best work with high-quality images and attract clients matching your style.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">
                        Efficient Project Flow
                      </h4>
                      <p className="text-gray-700">
                        Manage consultations, proposals, and client communication seamlessly on our platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to List */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  How to List Your Interior Design Service
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Create Your Account
                      </h4>
                      <p className="text-gray-700">
                        Register with your design credentials, qualifications, and years of experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Complete Verification
                      </h4>
                      <p className="text-gray-700">
                        Submit identity proof and professional credentials for verification within 24-48 hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Build Your Profile
                      </h4>
                      <p className="text-gray-700">
                        Upload your portfolio with before/after photos, design styles, services, and pricing.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Start Receiving Inquiries
                      </h4>
                      <p className="text-gray-700">
                        Once verified, start receiving consultation requests and design project inquiries.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
                  <p className="text-gray-700">
                    <strong className="text-purple-600">Pro Tip:</strong> Designers with stunning portfolios, 
                    detailed style descriptions, and client testimonials get 7x more project inquiries!
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Benefits of Listing Your Interior Design Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">📈</div>
                    <h4 className="font-semibold text-lg mb-2">Business Growth</h4>
                    <p className="text-gray-700 text-sm">
                      Scale your design business with high-value residential and commercial projects.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🛡️</div>
                    <h4 className="font-semibold text-lg mb-2">Quality Clients</h4>
                    <p className="text-gray-700 text-sm">
                      Work with serious clients who appreciate good design and are ready to invest.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">💳</div>
                    <h4 className="font-semibold text-lg mb-2">Milestone Payments</h4>
                    <p className="text-gray-700 text-sm">
                      Secure milestone-based payments through our platform for larger projects.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">📊</div>
                    <h4 className="font-semibold text-lg mb-2">Portfolio Building</h4>
                    <p className="text-gray-700 text-sm">
                      Showcase completed projects with professional photography and client reviews.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🎓</div>
                    <h4 className="font-semibold text-lg mb-2">Industry Trends</h4>
                    <p className="text-gray-700 text-sm">
                      Access latest design trends, material guides, and business development resources.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <div className="text-3xl mb-3">🏆</div>
                    <h4 className="font-semibold text-lg mb-2">Featured Designer Status</h4>
                    <p className="text-gray-700 text-sm">
                      Top designers get premium placement, magazine features, and exclusive opportunities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Example Providers */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Featured Interior Design Providers
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
                        <div>✓ Award Winning</div>
                        <div>✓ 3D Design</div>
                      </div>
                      <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-semibold">
                        View Portfolio & Consult
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
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
                  <p className="mb-6 text-white/90">
                    Start receiving design project inquiries within 24 hours
                  </p>
                  <Link
                    to="/become-partner"
                    className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-center"
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

export default InteriorDesigner;
