import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const SecuritySystems = () => {
  const exampleProviders = [
    { name: "SecureHome Systems", rating: "4.8", jobs: "680+", location: "Mumbai" },
    { name: "SafeWatch Security", rating: "4.9", jobs: "720+", location: "Delhi" },
    { name: "Guardian CCTV Pro", rating: "4.7", jobs: "590+", location: "Bangalore" },
  ];

  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-slate-700 to-gray-800 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/services" className="text-white/80 hover:text-white transition">Services</Link>
            <span className="text-white/60">/</span>
            <span>Security Systems</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-7xl">🔒</div>
            <div>
              <h1 className="text-5xl font-bold mb-4">Security Systems Services</h1>
              <p className="text-xl text-white/90">CCTV installation and comprehensive security solutions</p>
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2"><span className="text-yellow-300">★★★★★</span><span className="font-semibold">4.8 Rating</span></div>
                <div><span className="font-semibold">110+ Providers</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div><div className="text-3xl font-bold text-slate-700">110+</div><div className="text-gray-600">Security Experts</div></div>
            <div><div className="text-3xl font-bold text-slate-700">6,500+</div><div className="text-gray-600">Systems Installed</div></div>
            <div><div className="text-3xl font-bold text-slate-700">4.8/5</div><div className="text-gray-600">Average Rating</div></div>
            <div><div className="text-3xl font-bold text-slate-700">24/7</div><div className="text-gray-600">Support Available</div></div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto"><div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-4">About Security Systems Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Protect your home and business with professional security system installation. Our certified experts install and configure CCTV cameras, alarm systems, access control, and integrated security solutions.</p>
                <p className="text-gray-700 leading-relaxed">From basic camera setups to advanced multi-location monitoring systems, our providers deliver reliable security solutions with remote access and 24/7 monitoring capabilities.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Services Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {["CCTV Installation", "Alarm Systems", "Access Control", "Video Doorbells", "Smart Locks", "Motion Sensors", "Remote Monitoring", "System Maintenance"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center"><span className="text-green-600 font-bold">✓</span></div><span>{item}</span></div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Why List Your Security Service on BrightHome?</h3>
                <div className="space-y-4">
                  <div className="flex gap-4"><div className="text-3xl">🎯</div><div><h4 className="font-semibold text-lg">High Demand</h4><p className="text-gray-700">Security is a top priority - get consistent installation and maintenance jobs.</p></div></div>
                  <div className="flex gap-4"><div className="text-3xl">💼</div><div><h4 className="font-semibold text-lg">Commercial Projects</h4><p className="text-gray-700">Access both residential and high-value commercial security projects.</p></div></div>
                  <div className="flex gap-4"><div className="text-3xl">🔧</div><div><h4 className="font-semibold text-lg">AMC Revenue</h4><p className="text-gray-700">Earn recurring income from annual maintenance contracts.</p></div></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">How to List Your Security Service</h3>
                <div className="space-y-6">
                  {["Register with your security installation certifications", "Complete verification with credentials and past work", "List your specialties, brands, and service areas", "Start receiving security installation requests"].map((step, i) => (
                    <div key={i} className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold">{i+1}</div><div><p className="text-gray-700 pt-2">{step}</p></div></div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Benefits of Listing Your Security Services</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {icon: "🏢", title: "Commercial Jobs", desc: "Get access to large commercial security projects"},
                    {icon: "💰", title: "Premium Rates", desc: "Charge competitive rates for specialized security work"},
                    {icon: "🔄", title: "Repeat Business", desc: "Build long-term relationships with AMC contracts"},
                    {icon: "🛡️", title: "Brand Partnerships", desc: "Work with leading security equipment brands"},
                    {icon: "📱", title: "Tech Tools", desc: "Use advanced project management and scheduling tools"},
                    {icon: "⭐", title: "Credibility", desc: "Build trust with verified reviews and certifications"}
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-xl p-5 shadow"><div className="text-3xl mb-3">{item.icon}</div><h4 className="font-semibold text-lg mb-2">{item.title}</h4><p className="text-gray-700 text-sm">{item.desc}</p></div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Featured Security Systems Providers</h3>
                <div className="space-y-4">
                  {exampleProviders.map((provider, i) => (
                    <div key={i} className="border rounded-xl p-6 hover:shadow-lg transition">
                      <div className="flex justify-between items-start mb-3">
                        <div><h4 className="text-xl font-semibold">{provider.name}</h4><p className="text-gray-600">{provider.location}</p></div>
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">★ {provider.rating}</div>
                      </div>
                      <div className="flex gap-6 text-sm text-gray-600">
                        <div>✓ {provider.jobs} Installs</div><div>✓ All Brands</div><div>✓ AMC Available</div>
                      </div>
                      <button className="mt-4 w-full bg-slate-700 text-white py-2 rounded-lg hover:bg-slate-800 transition font-semibold">Contact Provider</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                <div className="bg-gradient-to-br from-slate-700 to-gray-800 text-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Join as Provider</h3>
                  <p className="mb-6 text-white/90">List your security installation services</p>
                  <Link to="/become-partner" className="block w-full bg-white text-slate-700 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-center">Register Now</Link>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <h4 className="font-bold text-lg mb-3">💰 Commission</h4>
                  <div className="text-2xl font-bold text-blue-600">8-12%</div>
                  <div className="text-xs text-gray-600 mt-1">Per completed project</div>
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

export default SecuritySystems;
