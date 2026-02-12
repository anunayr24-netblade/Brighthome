import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const BecomePartner = () => {
  const benefits = [
    {
      icon: "✓",
      title: "Verified Partner Badge",
      description: "Build instant trust with customers",
    },
    {
      icon: "📈",
      title: "Priority Placement",
      description: "Your listings appear above normal users",
    },
    {
      icon: "📲",
      title: "Direct Lead Access",
      description: "Get direct customer contact details",
    },
    {
      icon: "🧲",
      title: "Dedicated Business Profile Page",
      description: "Complete professional profile at brighthome.in/partner/your-brand",
    },
    {
      icon: "🧠",
      title: "Marketing Support",
      description: "SEO visibility, social media promotion, featured exposure",
    },
  ];

  const categories = [
    {
      title: "🏠 Real Estate Growth Partner",
      description: "Perfect for real estate agents and agencies",
      benefits: [
        "Unlimited Property Listings",
        "Featured Placement",
        "Premium Badge",
        "Direct Buyer Leads",
        "Dedicated Agent Profile",
      ],
      image: "https://images.unsplash.com/photo-1560518099-ce2b3797b546?w=400&h=300&fit=crop",
    },
    {
      title: "👨‍💻 Developer Growth Partner",
      description: "For developers and digital agencies",
      benefits: [
        "Business Listing",
        "Project Showcase Section",
        "Lead Generation Form",
        "SEO Ranking Support",
        "Portfolio Display",
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    },
    {
      title: "🛠 Service Pro Growth Partner",
      description: "For plumbers, electricians, painters & more",
      benefits: [
        "Service Area Targeting",
        "Priority Listing",
        "Verified Badge",
        "Lead Notifications via WhatsApp",
        "Review Building",
      ],
      image: "https://images.unsplash.com/photo-1581092162562-40038f60dd12?w=400&h=300&fit=crop",
    },
  ];

  const plans = [
    {
      name: "Starter Partner",
      price: "₹2,999",
      period: "/year",
      icon: "🥉",
      color: "from-orange-500 to-orange-600",
      features: [
        "50 Listings per year",
        "Verified Badge",
        "Basic Profile Page",
        "5 Featured Ads",
        "Direct Leads",
      ],
      popular: false,
    },
    {
      name: "Growth Partner",
      price: "₹5,999",
      period: "/year",
      icon: "🥈",
      color: "from-gray-500 to-gray-600",
      features: [
        "Unlimited Listings",
        "Priority Placement",
        "Premium Profile Page",
        "25 Featured Ads",
        "WhatsApp Integration",
        "Lead Notifications",
        "Review & Rating System",
      ],
      popular: true,
    },
    {
      name: "Elite Partner",
      price: "₹11,999",
      period: "/year",
      icon: "🥇",
      color: "from-yellow-500 to-yellow-600",
      features: [
        "Everything in Growth",
        "Homepage Feature Rotation",
        "Social Media Promotion",
        "SEO Boost",
        "Dedicated Account Support",
        "Custom Branding Page",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            🚀 BrightHome Growth Partner Program
          </h1>
          <p className="text-2xl text-blue-100 mb-8">
            Built for Your Business Growth - Turn Visibility into Revenue
          </p>
          <a
            href="#plans"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition w-fit"
          >
            Explore Plans
          </a>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Why BrightHome Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Become a BrightHome Partner?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              BrightHome is not just a listing platform. It's a lead generation + visibility +
              branding system designed to help your business scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                emoji: "🏠",
                title: "Real Estate Agents",
                desc: "Get more buyer leads and close deals faster",
              },
              {
                emoji: "👨‍💻",
                title: "Developers & IT Services",
                desc: "Showcase projects and attract high-value clients",
              },
              {
                emoji: "🛠",
                title: "Local Service Providers",
                desc: "Build authority and get consistent job requests",
              },
              {
                emoji: "🏗",
                title: "Contractors & Builders",
                desc: "Get major project opportunities",
              },
              {
                emoji: "💼",
                title: "Business Consultants",
                desc: "Establish expertise and generate consulting leads",
              },
              {
                emoji: "📈",
                title: "Growing Businesses",
                desc: "We grow when you grow",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            🎯 What You Get as a Partner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            🏆 Partner Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {category.benefits.map((benefit, bidx) => (
                        <li key={bidx} className="flex items-start">
                          <span className="text-green-600 font-bold mr-2">✓</span>
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans Section */}
        <div id="plans" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              💎 Annual Subscription Plans
            </h2>
            <p className="text-gray-600 mb-2">
              Choose the perfect plan for your business growth
            </p>
            <p className="text-green-600 font-semibold">💰 Save up to 40% with Annual Plans</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 ${
                  plan.popular ? "ring-2 ring-blue-600 md:scale-105" : ""
                }`}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${plan.color} text-white p-6 text-center`}>
                  <div className="text-5xl mb-2">{plan.icon}</div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  {plan.popular && (
                    <div className="text-xs font-bold mt-2 bg-white bg-opacity-20 px-3 py-1 rounded-full inline-block">
                      MOST POPULAR
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="bg-white p-6 border-b">
                  <div className="text-center">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                    <p className="text-sm text-gray-500 mt-2">
                      ₹{(parseInt(plan.price.replace("₹", "")) / 12).toFixed(0)}/month equivalent
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-white p-6">
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start">
                        <span className="text-green-600 font-bold mr-3 text-lg">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-bold transition ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Annual Section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            💡 Why Annual Instead of Monthly?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Long-term Growth",
                desc: "You focus on building your business without interruption",
              },
              {
                title: "Consistent Visibility",
                desc: "Build brand authority and customer recognition over 12 months",
              },
              {
                title: "40% Cost Savings",
                desc: "Annual plans are significantly cheaper than monthly subscriptions",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Value Breakdown Example */}
        <div className="bg-white rounded-lg shadow-lg p-12 mb-16 border-l-4 border-green-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            📊 Example Value Breakdown (Real Estate Agent)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-sm font-semibold text-blue-600 mb-2">ASSUMPTION</div>
              <div className="text-3xl font-bold text-gray-900">3 Deals/Year</div>
              <p className="text-gray-600 text-sm mt-2">Property transactions through BrightHome</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-sm font-semibold text-green-600 mb-2">COMMISSION</div>
              <div className="text-3xl font-bold text-gray-900">₹50,000</div>
              <p className="text-gray-600 text-sm mt-2">Average commission per deal</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="text-sm font-semibold text-purple-600 mb-2">TOTAL REVENUE</div>
              <div className="text-3xl font-bold text-gray-900">₹1,50,000</div>
              <p className="text-gray-600 text-sm mt-2">Just 1 extra deal covers the annual fee!</p>
            </div>
          </div>
          <div className="bg-green-100 border-2 border-green-600 rounded-lg p-6">
            <p className="text-lg text-gray-900">
              <span className="font-bold">👉 This is an investment, not an expense.</span>
              <br />
              Even one additional deal through BrightHome completely covers your annual partnership
              fee and generates pure profit.
            </p>
          </div>
        </div>

        {/* Our Promise Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-lg p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🌟 Our Promise to Partners</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8">
              We are not selling listings. We are building:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "📍", title: "Your Brand", desc: "Professional visibility in your market" },
                {
                  icon: "🏆",
                  title: "Your Authority",
                  desc: "Establish expertise and credibility",
                },
                {
                  icon: "👑",
                  title: "Your Local Dominance",
                  desc: "Become the go-to choice in your niche",
                },
                {
                  icon: "🚀",
                  title: "Your Customer Pipeline",
                  desc: "Consistent stream of qualified leads",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-4xl mr-4">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-blue-100">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-lg mt-8 text-center font-semibold">
              BrightHome becomes your digital showroom.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Become a BrightHome Growth Partner today and turn visibility into revenue
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-12 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition">
              Apply Now
            </button>
            <button className="px-12 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
              Schedule a Call
            </button>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="bg-gray-100 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ❓ Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Can I change my plan anytime?",
                a: "Yes, you can upgrade or downgrade your plan at any time during your partnership.",
              },
              {
                q: "What's included in marketing support?",
                a: "SEO optimization, social media promotion, featured ad placement, and seasonal campaign boosts.",
              },
              {
                q: "Do I get analytics and insights?",
                a: "Yes, Elite and Growth partners get detailed performance analytics.",
              },
              {
                q: "Is there a contract or lock-in period?",
                a: "Annual plans are valid for 12 months. You can renew or change anytime.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BecomePartner;
