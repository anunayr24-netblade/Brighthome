import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const Electrician = () => {
  const exampleProviders = [
    { name: "PowerFix Electricians", rating: "4.9", jobs: "1200+", location: "Mumbai" },
    { name: "Spark Electric Services", rating: "4.8", jobs: "950+", location: "Bangalore" },
    { name: "WireSafe Pros", rating: "4.9", jobs: "870+", location: "Delhi" },
  ];

  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/services" className="text-white/80 hover:text-white transition">Services</Link>
            <span className="text-white/60">/</span>
            <span>Electrician</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-7xl">⚡</div>
            <div>
              <h1 className="text-5xl font-bold mb-4">Electrician Services</h1>
              <p className="text-xl text-white/90">Licensed electricians for installation, repair, and maintenance</p>
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2"><span className="text-yellow-300">★★★★★</span><span className="font-semibold">4.9 Rating</span></div>
                <div><span className="font-semibold">200+ Providers</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div><div className="text-3xl font-bold text-orange-600">200+</div><div className="text-gray-600">Licensed Electricians</div></div>
            <div><div className="text-3xl font-bold text-orange-600">15,000+</div><div className="text-gray-600">Services Completed</div></div>
            <div><div className="text-3xl font-bold text-orange-600">4.9/5</div><div className="text-gray-600">Average Rating</div></div>
            <div><div className="text-3xl font-bold text-orange-600">24/7</div><div className="text-gray-600">Emergency Support</div></div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto"><div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-4">About Electrician Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Professional electrical services for homes and businesses. Our licensed electricians handle everything from simple repairs to complex installations with safety and quality as top priorities.</p>
                <p className="text-gray-700 leading-relaxed">All electricians are certified, insured, and experienced in residential and commercial electrical work.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Services Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Wiring & Rewiring", "Circuit Installation", "Fan & Light Fitting", "Switchboard Repair", "Emergency Repairs", "Safety Inspections", "Smart Home Setup", "Generator Installation"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center"><span className="text-green-600 font-bold">✓</span></div><span>{item}</span></div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Why List Your Electrician Service on BrightHome?</h3>
                <div className="space-y-4">
                  <div className="flex gap-4"><div className="text-3xl">⚡</div><div><h4 className="font-semibold text-lg">High Demand</h4><p className="text-gray-700">Electrical services are consistently in demand - get regular work opportunities.</p></div></div>
                  <div className="flex gap-4"><div className="text-3xl">🛡️</div><div><h4 className="font-semibold text-lg">Safety First</h4><p className="text-gray-700">Work with verified customers on legitimate projects with proper safety protocols.</p></div></div>
                  <div className="flex gap-4"><div className="text-3xl">💡</div><div><h4 className="font-semibold text-lg">Emergency Jobs</h4><p className="text-gray-700">Get access to urgent, high-priority jobs with premium pricing.</p></div></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">How to List Your Electrician Service</h3>
                <div className="space-y-6">
                  {["Register with your electrician license and certifications", "Complete background verification (24-48 hours)", "Set your service areas, rates, and availability", "Start receiving service requests and emergency calls"].map((step, i) => (
                    <div key={i} className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">{i+1}</div><div><p className="text-gray-700 pt-2">{step}</p></div></div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Featured Electrician Providers</h3>
                <div className="space-y-4">
                  {exampleProviders.map((provider, i) => (
                    <div key={i} className="border rounded-xl p-6 hover:shadow-lg transition">
                      <div className="flex justify-between items-start mb-3">
                        <div><h4 className="text-xl font-semibold">{provider.name}</h4><p className="text-gray-600">{provider.location}</p></div>
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">★ {provider.rating}</div>
                      </div>
                      <div className="flex gap-6 text-sm text-gray-600">
                        <div>✓ {provider.jobs} Jobs</div><div>✓ Licensed</div><div>✓ 24/7 Available</div>
                      </div>
                      <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition font-semibold">Contact Now</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                <div className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Join as Electrician</h3>
                  <p className="mb-6 text-white/90">Get instant access to service requests</p>
                  <Link to="/become-partner" className="block w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-center">Register Now</Link>
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

export default Electrician;
