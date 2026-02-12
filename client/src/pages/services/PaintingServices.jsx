import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const PaintingServices = () => {
  const exampleProviders = [
    { name: "ColorCraft Painters", rating: "4.9", jobs: "800+", location: "Mumbai" },
    { name: "Perfect Finish Painting", rating: "4.7", jobs: "650+", location: "Delhi" },
    { name: "Royal Painters", rating: "4.8", jobs: "550+", location: "Pune" },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/services" className="text-white/80 hover:text-white transition">Services</Link>
            <span className="text-white/60">/</span>
            <span>Painting Services</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-7xl">🎨</div>
            <div>
              <h1 className="text-5xl font-bold mb-4">Painting Services</h1>
              <p className="text-xl text-white/90">Expert interior and exterior painting for homes and offices</p>
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">★★★★★</span>
                  <span className="font-semibold">4.7 Rating</span>
                </div>
                <div><span className="font-semibold">120+ Providers</span></div>
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
              <div className="text-gray-600">Professional Painters</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">8,000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">4.7/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">95%</div>
              <div className="text-gray-600">On-Time Completion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Service */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">About Painting Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Transform your space with professional painting services from experienced painters. Whether you need interior wall painting, exterior facade work, or specialized finishes, our verified painters deliver high-quality results using premium materials.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From color consultation to final finishing, our painters ensure smooth, even coats and clean workspaces. All providers are background-verified with proven track records.
                </p>
              </div>

              {/* Services Included */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Services Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Interior Painting", "Exterior Painting", "Wall Texturing", "Wood Polishing", "Color Consultation", "Surface Preparation", "Waterproofing", "Decorative Finishes"].map((item, index) => (
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
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Why List Your Painting Service on BrightHome?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "🎯",
                      title: "High-Value Projects",
                      desc: "Access residential and commercial painting projects with competitive budgets."
                    },
                    {
                      icon: "💼",
                      title: "Steady Work Flow",
                      desc: "Get consistent painting jobs throughout the year from verified clients."
                    },
                    {
                      icon: "🏆",
                      title: "Showcase Your Portfolio",
                      desc: "Display before/after photos and build credibility with customer reviews."
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="animate-slideUpIn hover:scale-105 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm hover:shadow-md group transition-all"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-3xl mb-3 group-hover:animate-iconPulse" style={{ animationDelay: `${index * 100}ms` }}>
                        {item.icon}
                      </div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1 group-hover:text-purple-600 transition">
                        {item.title}
                      </h4>
                      <p className="text-gray-700">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to List */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">How to List Your Painting Service</h3>
                <div className="space-y-6">
                  {[
                    {
                      num: "1",
                      title: "Register Your Business",
                      desc: "Sign up with business credentials and previous work portfolio."
                    },
                    {
                      num: "2",
                      title: "Get Verified",
                      desc: "Submit ID proof and business documents for quick verification."
                    },
                    {
                      num: "3",
                      title: "Upload Your Work",
                      desc: "Add photos of completed projects, service rates, and available areas."
                    },
                    {
                      num: "4",
                      title: "Start Getting Projects",
                      desc: "Receive painting job requests and quotes from interested customers."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 animate-detailBounce show:shadow-lg transition-shadow group" style={{ animationDelay: `${index * 150}ms` }}>
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition">
                        {item.num}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-purple-600 transition">
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

              {/* Example Providers */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Featured Painting Providers</h3>
                <div className="space-y-4">
                  {exampleProviders.map((provider, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                      <div className="flex justify-between items-start mb-3">
                        <div><h4 className="text-xl font-semibold">{provider.name}</h4><p className="text-gray-600">{provider.location}</p></div>
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">★ {provider.rating}</div>
                      </div>
                      <div className="flex gap-6 text-sm text-gray-600">
                        <div>✓ {provider.jobs} Projects</div>
                        <div>✓ Premium Paints</div>
                        <div>✓ 1 Year Warranty</div>
                      </div>
                      <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-semibold">Get Quote</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - CTA Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Join as a Painter</h3>
                  <p className="mb-6 text-white/90">Start receiving painting projects instantly</p>
                  <Link to="/become-partner" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-center">Register Now</Link>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                  <h4 className="font-bold text-lg mb-3">💰 Earn More</h4>
                  <div className="text-2xl font-bold text-yellow-600">10% Commission</div>
                  <div className="text-xs text-gray-600 mt-1">Only on successful projects</div>
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

export default PaintingServices;
