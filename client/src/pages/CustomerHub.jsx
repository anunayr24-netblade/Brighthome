import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const CustomerHub = () => {
  const [activeTab, setActiveTab] = useState("discover");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-rose-600 tracking-widest">BRIGHTHOME CUSTOMER HUB</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3">
            Find Verified Services, Track Purchases, Unlock Deals
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover trusted providers, manage bookings, and access exclusive offers tailored to your needs.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {[
            { id: "discover", label: "Discover", icon: "🔍" },
            { id: "providers", label: "Verified Providers", icon: "🛡️" },
            { id: "purchases", label: "My Purchases", icon: "🧾" },
            { id: "deals", label: "Deals", icon: "🎁" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-rose-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-rose-400"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "discover" && (
          <section className="space-y-6 animate-fadeInUp">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Services</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {["AC Repair", "House Cleaning", "Plumbing", "Electrician", "Pest Control", "Painting"].map(service => (
                  <div key={service} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition">
                    <p className="font-semibold text-gray-900">{service}</p>
                    <p className="text-xs text-gray-500 mt-1">From verified professionals</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended For You</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {["Interior Design Consultation", "Bathroom Renovation"].map(item => (
                  <div key={item} className="p-4 bg-rose-50 rounded-xl">
                    <p className="font-semibold text-gray-900">{item}</p>
                    <p className="text-xs text-gray-600 mt-1">4.9★ average rating • 120+ reviews</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === "providers" && (
          <section className="space-y-6 animate-fadeInUp">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Verified Providers</h2>
                <button className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition">
                  Compare Providers
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {["SparkPro Services", "CleanZen Solutions", "PrimeFix Experts", "UrbanCare Pros"].map(provider => (
                  <div key={provider} className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{provider}</p>
                        <p className="text-xs text-gray-500">Verified • 4.8★ rating</p>
                      </div>
                      <button className="text-rose-600 font-semibold hover:text-rose-700">View</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === "purchases" && (
          <section className="bg-white rounded-2xl shadow-lg p-6 animate-fadeInUp">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Purchases</h2>
            <div className="space-y-4">
              {["AC Service - Noida", "Home Cleaning - Gurgaon", "Electrical Repair - Delhi"].map((purchase, idx) => (
                <div key={idx} className="p-4 border border-gray-200 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{purchase}</p>
                    <p className="text-xs text-gray-500">Order ID: BHX-20{idx} • Completed</p>
                  </div>
                  <button className="text-gray-600 font-semibold hover:text-gray-800">View Details</button>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "deals" && (
          <section className="grid md:grid-cols-2 gap-6 animate-fadeInUp">
            {["15% off on Cleaning", "Free AC Inspection", "Combo Home Care"].map(deal => (
              <div key={deal} className="bg-gradient-to-r from-rose-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">{deal}</h3>
                <p className="text-rose-100 mt-2">Limited time offer for verified bookings</p>
                <button className="mt-4 px-4 py-2 bg-white text-rose-700 rounded-lg font-semibold">
                  Claim Now
                </button>
              </div>
            ))}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CustomerHub;
