import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const GardenMaintenance = () => {
  const exampleProviders = [
    { name: "GreenScape Gardens", rating: "4.7", jobs: "550+", location: "Mumbai" },
    { name: "Nature's Touch Landscaping", rating: "4.6", jobs: "480+", location: "Bangalore" },
    { name: "Garden Experts Pro", rating: "4.5", jobs: "420+", location: "Delhi" },
  ];

  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/services" className="text-white/80 hover:text-white transition">Services</Link>
            <span className="text-white/60">/</span>
            <span>Garden Maintenance</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-7xl">🌳</div>
            <div>
              <h1 className="text-5xl font-bold mb-4">Garden Maintenance Services</h1>
              <p className="text-xl text-white/90">Professional landscaping and garden care services</p>
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2"><span className="text-yellow-300">★★★★★</span><span className="font-semibold">4.6 Rating</span></div>
                <div><span className="font-semibold">70+ Providers</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div><div className="text-3xl font-bold text-green-600">70+</div><div className="text-gray-600">Professional Gardeners</div></div>
            <div><div className="text-3xl font-bold text-green-600">4,200+</div><div className="text-gray-600">Gardens Maintained</div></div>
            <div><div className="text-3xl font-bold text-green-600">4.6/5</div><div className="text-gray-600">Average Rating</div></div>
            <div><div className="text-3xl font-bold text-green-600">100%</div><div className="text-gray-600">Eco-Friendly</div></div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto"><div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-4">About Garden Maintenance Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Professional garden maintenance and landscaping services to keep your outdoor spaces beautiful year-round. Our expert gardeners provide regular maintenance, seasonal planting, and complete landscape design.</p>
                <p className="text-gray-700 leading-relaxed">From lawn care to complex landscaping projects, our verified providers deliver exceptional results using sustainable practices and quality materials.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Services Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Lawn Mowing & Care", "Tree & Shrub Pruning", "Garden Design", "Seasonal Planting", "Irrigation Systems", "Pest & Weed Control", "Fertilization", "Landscape Installation"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center"><span className="text-green-600 font-bold">✓</span></div><span>{item}</span></div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Why List Your Garden Service on BrightHome?</h3>
                <div className="space-y-4">
                  <div className="flex gap-4"><div className="text-3xl">🌱</div><div><h4 className="font-semibold text-lg">Recurring Contracts</h4><p className="text-gray-700">Get monthly maintenance contracts for steady income throughout the year.</p></div></div>
                  <div className="flex gap-4"><div className="text-3xl">🏡</div><div><h4 className="font-semibold text-lg">Premium Properties</h4><p className="text-gray-700">Work on beautiful properties with homeowners who value quality landscaping.</p></div></div>
                  <div className="flex gap-4"><div className="text-3xl">📅</div><div><h4 className="font-semibold text-lg">Easy Scheduling</h4><p className="text-gray-700">Manage multiple properties efficiently with our scheduling tools.</p></div></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">How to List Your Garden Service</h3>
                <div className="space-y-6">
                  {["Register your gardening business with credentials", "Upload photos of your landscaping work", "Set your service packages and pricing", "Start getting garden maintenance requests"].map((step, i) => (
                    <div key={i} className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">{i+1}</div><div><p className="text-gray-700 pt-2">{step}</p></div></div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Benefits of Listing Your Garden Services</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {icon: "💚", title: "Regular Clients", desc: "Build long-term relationships with recurring maintenance contracts"},
                    {icon: "💰", title: "Good Revenue", desc: "Earn consistently from weekly/monthly garden maintenance"},
                    {icon: "📸", title: "Portfolio", desc: "Showcase before/after photos of your landscaping work"},
                    {icon: "🌿", title: "Seasonal Work", desc: "Get seasonal planting and renovation projects"},
                    {icon: "🚛", title: "Equipment", desc: "Connect with equipment rental and supplier networks"},
                    {icon: "⭐", title: "Reviews", desc: "Build reputation with verified customer feedback"}
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-xl p-5 shadow"><div className="text-3xl mb-3">{item.icon}</div><h4 className="font-semibold text-lg mb-2">{item.title}</h4><p className="text-gray-700 text-sm">{item.desc}</p></div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Featured Garden Maintenance Providers</h3>
                <div className="space-y-4">
                  {exampleProviders.map((provider, i) => (
                    <div key={i} className="border rounded-xl p-6 hover:shadow-lg transition">
                      <div className="flex justify-between items-start mb-3">
                        <div><h4 className="text-xl font-semibold">{provider.name}</h4><p className="text-gray-600">{provider.location}</p></div>
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">★ {provider.rating}</div>
                      </div>
                      <div className="flex gap-6 text-sm text-gray-600">
                        <div>✓ {provider.jobs} Gardens</div><div>✓ Eco-Friendly</div><div>✓ Licensed</div>
                      </div>
                      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold">Get Quote</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Join as Gardener</h3>
                  <p className="mb-6 text-white/90">List your garden services today</p>
                  <Link to="/become-partner" className="block w-full bg-white text-green-600 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-center">Register Now</Link>
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

export default GardenMaintenance;
