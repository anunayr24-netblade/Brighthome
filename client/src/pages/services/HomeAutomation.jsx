import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const HomeAutomation = () => {
  const exampleProviders = [
    { name: "SmartHome Pro", rating: "4.9", jobs: "320+", location: "Mumbai" },
    { name: "AutoTech Solutions", rating: "4.8", jobs: "280+", location: "Bangalore" },
    { name: "iHome Systems", rating: "4.7", jobs: "240+", location: "Delhi" },
  ];

  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/services" className="text-white/80 hover:text-white transition">Services</Link>
            <span className="text-white/60">/</span>
            <span>Home Automation</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-7xl">🤖</div>
            <div>
              <h1 className="text-5xl font-bold mb-4">Home Automation Services</h1>
              <p className="text-xl text-white/90">Smart home installation and automation solutions</p>
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2"><span className="text-yellow-300">★★★★★</span><span className="font-semibold">4.8 Rating</span></div>
                <div><span className="font-semibold">45+ Providers</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div><div className="text-3xl font-bold text-indigo-600">45+</div><div className="text-gray-600">Certified Professionals</div></div>
            <div><div className="text-3xl font-bold text-indigo-600">2,500+</div><div className="text-gray-600">Smart Homes Setup</div></div>
            <div><div className="text-3xl font-bold text-indigo-600">4.8/5</div><div className="text-gray-600">Average Rating</div></div>
            <div><div className="text-3xl font-bold text-indigo-600">100%</div><div className="text-gray-600">Tech Support</div></div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto"><div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-4">About Home Automation Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Transform your home into a smart living space with cutting-edge automation technology. Our certified professionals install and configure smart home systems for lighting, security, climate control, and entertainment.</p>
                <p className="text-gray-700 leading-relaxed">From single-device setups to complete home automation, our providers deliver seamless integration with popular platforms like Google Home, Alexa, and Apple HomeKit.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Services Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Smart Lighting Systems", "Voice Control Setup", "Security Automation", "Climate Control", "Smart Locks & Doorbells", "Entertainment Systems", "Energy Management", "Integration & Programming"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center"><span className="text-green-600 font-bold">✓</span></div><span>{item}</span></div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Why List Your Home Automation Service on BrightHome?</h3>
                <div className="space-y-4">
                  <div className="flex gap-4"><div className="text-3xl">🚀</div><div><h4 className="font-semibold text-lg">Growing Market</h4><p className="text-gray-700">Smart home adoption is rapidly increasing - tap into this booming market.</p></div></div>
                  <div className="flex gap-4"><div className="text-3xl">💎</div><div><h4 className="font-semibold text-lg">Premium Projects</h4><p className="text-gray-700">Work on high-value automation projects with tech-savvy homeowners.</p></div></div>
                  <div className="flex gap-4"><div className="text-3xl">🔧</div><div><h4 className="font-semibold text-lg">Recurring Revenue</h4><p className="text-gray-700">Earn from installations, upgrades, and ongoing maintenance contracts.</p></div></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">How to List Your Home Automation Service</h3>
                <div className="space-y-6">
                  {["Register with your certifications and technical credentials", "Complete verification process (24-48 hours)", "Create profile with your specialties and supported systems", "Start receiving smart home project requests"].map((step, i) => (
                    <div key={i} className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">{i+1}</div><div><p className="text-gray-700 pt-2">{step}</p></div></div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Benefits of Listing Your Home Automation Services</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {icon: "📈", title: "High Growth", desc: "Be part of the fastest-growing home service segment"},
                    {icon: "💰", title: "Premium Pricing", desc: "Earn top rates for specialized smart home expertise"},
                    {icon: "🎓", title: "Training Access", desc: "Get updates on latest smart home technologies"},
                    {icon: "🤝", title: "Brand Partnerships", desc: "Connect with leading smart device manufacturers"},
                    {icon: "📱", title: "Tech Platform", desc: "Use our advanced tools for project management"},
                    {icon: "🏆", title: "Recognition", desc: "Become a certified BrightHome smart home expert"}
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-xl p-5 shadow"><div className="text-3xl mb-3">{item.icon}</div><h4 className="font-semibold text-lg mb-2">{item.title}</h4><p className="text-gray-700 text-sm">{item.desc}</p></div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Featured Home Automation Providers</h3>
                <div className="space-y-4">
                  {exampleProviders.map((provider, i) => (
                    <div key={i} className="border rounded-xl p-6 hover:shadow-lg transition">
                      <div className="flex justify-between items-start mb-3">
                        <div><h4 className="text-xl font-semibold">{provider.name}</h4><p className="text-gray-600">{provider.location}</p></div>
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">★ {provider.rating}</div>
                      </div>
                      <div className="flex gap-6 text-sm text-gray-600">
                        <div>✓ {provider.jobs} Installs</div><div>✓ All Platforms</div><div>✓ 1 Yr Support</div>
                      </div>
                      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold">View Profile</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Join as Provider</h3>
                  <p className="mb-6 text-white/90">List your smart home services</p>
                  <Link to="/become-partner" className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-center">Register Now</Link>
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

export default HomeAutomation;
