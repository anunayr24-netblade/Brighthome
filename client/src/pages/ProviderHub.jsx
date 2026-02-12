import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import {
  providerStats,
  providerListings,
  providerListingPerformance,
  providerLeads,
  providerLeadInsights,
  providerReviews,
  providerProfile,
  providerVerification
} from "../data/providerData";

const ProviderHub = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-blue-600 tracking-widest">BRIGHTHOME PROVIDER HUB</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3">
            List Services, Buy Verified Leads, Grow Faster
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Everything you need to run your service business: listings, verified leads, reviews, and profile verification.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {[
            { id: "overview", label: "Overview", icon: "📊" },
            { id: "listings", label: "My Listings", icon: "📝" },
            { id: "leads", label: "Verified Leads", icon: "✅" },
            { id: "reviews", label: "Reviews", icon: "⭐" },
            { id: "profile", label: "Profile", icon: "🛡️" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-400"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeInUp">
            {providerStats.map((item, idx) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <p className="text-sm text-gray-500 font-semibold">{item.label}</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{item.value}</p>
                <p className="text-xs text-gray-500 mt-2">Updated today</p>
              </div>
            ))}

            <div className="lg:col-span-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Boost visibility with verified profile</h3>
                  <p className="text-blue-100 mt-1">Verified providers get 2.3x more leads and higher conversion.</p>
                </div>
                <button className="px-5 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition">
                  Start Verification
                </button>
              </div>
            </div>
          </section>
        )}

        {activeTab === "listings" && (
          <section className="space-y-6 animate-fadeInUp">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">My Service Listings</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  + Create Listing
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {providerListings.map((service) => (
                  <div key={service.name} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{service.name}</h3>
                        <p className="text-sm text-gray-500">Status: {service.status}</p>
                      </div>
                      <button className="text-blue-600 font-semibold hover:text-blue-700">Edit</button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Leads this week: {service.leadsThisWeek}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Listing Performance</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {providerListingPerformance.map(item => (
                  <div key={item.label} className="p-4 bg-gray-50 rounded-xl text-center">
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="text-xl font-bold text-gray-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === "leads" && (
          <section className="space-y-6 animate-fadeInUp">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Verified Leads Marketplace</h2>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Buy Leads
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {providerLeads.map(lead => (
                  <div key={lead.title} className="p-4 border border-gray-200 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{lead.title}</p>
                      <p className="text-xs text-gray-500">Verified • Budget: {lead.budget}</p>
                    </div>
                    <button className="text-green-600 font-semibold hover:text-green-700">Buy</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Lead Quality Insights</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {providerLeadInsights.map(item => (
                  <div key={item.label} className="p-4 bg-green-50 rounded-xl">
                    <p className="text-sm text-gray-600">{item.label}</p>
                    <p className="text-xl font-bold text-gray-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === "reviews" && (
          <section className="bg-white rounded-2xl shadow-lg p-6 animate-fadeInUp">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Reviews</h2>
            <div className="space-y-4">
              {providerReviews.map((review, idx) => (
                <div key={review.text} className="p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-900">{review.text}</p>
                    <span className="text-yellow-500">{"★".repeat(review.rating)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Customer: {review.meta}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "profile" && (
          <section className="grid md:grid-cols-2 gap-6 animate-fadeInUp">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Provider Profile</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Business Name</label>
                  <input className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg" defaultValue={providerProfile.businessName} />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Service Category</label>
                  <input className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg" defaultValue={providerProfile.serviceCategory} />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Operating Cities</label>
                  <input className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg" defaultValue={providerProfile.operatingCities} />
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Update Profile
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Verification Status</h2>
              <div className="space-y-4">
                {providerVerification.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-gray-700">{item.label}</span>
                    <span className={`font-semibold ${item.status === "Verified" ? "text-green-600" : "text-yellow-600"}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Complete Verification
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProviderHub;
