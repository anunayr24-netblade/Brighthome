import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Pricing = () => {
  const freePlan = {
    name: "Free Plan",
    price: "₹0",
    icon: "🎁",
    period: "To Build Traffic",
    features: [
      "5 Ads per month",
      "14 days validity",
      "Basic listing",
      "No featured placement",
    ],
    description: "Get sellers on platform",
  };

  const boostPlans = [
    {
      title: "Basic Boost",
      price: "₹149",
      validity: "14 Days",
      benefit: "Top of category",
      icon: "⭐",
    },
    {
      title: "Homepage Featured",
      options: [
        { price: "₹499", validity: "7 Days", benefit: "Homepage display" },
        { price: "₹999", validity: "15 Days", benefit: "Homepage display" },
      ],
      icon: "🏠",
    },
    {
      title: "Urgent Tag",
      options: [
        { price: "₹149", validity: "5 Days", benefit: '"Urgent" badge' },
        { price: "₹299", validity: "10 Days", benefit: '"Urgent" badge' },
        { price: "₹999", validity: "30 Days", benefit: '"Urgent" badge' },
      ],
      icon: "🔴",
    },
  ];

  const sellerPlans = [
    {
      name: "Silver Plan",
      price: "₹499",
      period: "/month",
      description: "Perfect for individual sellers",
      features: [
        "25 Ads per month",
        "2 Featured Ads included",
        "Priority Support",
        "14 days validity per ad",
      ],
      popular: false,
    },
    {
      name: "Gold Plan",
      price: "₹1,199",
      period: "/month",
      description: "For active sellers & dealers",
      features: [
        "50 Ads per month",
        "5 Featured Ads included",
        "WhatsApp Button",
        "Top Placement",
        "Priority Support",
        "14 days validity per ad",
      ],
      popular: true,
    },
  ];

  const categoryPlans = [
    {
      category: "Property Featured",
      price: "₹499",
      description: "Boost single property listing",
    },
    {
      category: "Premium Property",
      price: "₹999",
      description: "High visibility premium placement",
    },
    {
      category: "Dealer Monthly",
      price: "₹1,499",
      description: "Complete monthly package for dealers",
      highlight: true,
    },
  ];

  const leadModel = [
    { role: "Property Dealers", range: "₹20–₹100 per lead or 1% commission" },
    { role: "Loan Agents", range: "₹20–₹100 per lead or 1% commission" },
    { role: "Service Providers", range: "₹20–₹100 per lead or 1% commission" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">BrightHome Pricing</h1>
          <p className="text-gray-600 text-xl">Choose the perfect plan for your needs</p>
        </div>

        {/* Free Plan */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 border-2 border-green-200">
              <div className="text-5xl mb-4">{freePlan.icon}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{freePlan.name}</h2>
              <p className="text-green-600 font-semibold mb-4">{freePlan.period}</p>
              <p className="text-5xl font-bold text-green-600 mb-6">{freePlan.price}</p>
              <p className="text-gray-600 mb-6 text-lg">{freePlan.description}</p>
              <ul className="space-y-3">
                {freePlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-600 mr-3 font-bold">✔</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 py-3 px-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
                Get Started Free
              </button>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect for:</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">→</span>
                  <span>New sellers wanting to test the platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">→</span>
                  <span>Building organic traffic and visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">→</span>
                  <span>Casual listing of used items</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Listing Boosts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">One-Time Listing Boosts</h2>
          <p className="text-center text-gray-600 mb-8">Increase visibility with instant boost without monthly commitment</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boostPlans.map((boost, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                  <div className="text-4xl mb-3">{boost.icon}</div>
                  <h3 className="text-2xl font-bold">{boost.title}</h3>
                </div>
                <div className="p-6">
                  {boost.options ? (
                    <div className="space-y-4">
                      {boost.options.map((option, idx) => (
                        <div key={idx} className="border-b pb-4 last:border-b-0 last:pb-0">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{option.price}</div>
                          <div className="text-sm text-gray-600 mb-1">Validity: {option.validity}</div>
                          <div className="text-sm text-gray-700 font-medium">{option.benefit}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{boost.price}</div>
                      <div className="text-sm text-gray-600 mb-2">Validity: {boost.validity}</div>
                      <div className="text-gray-700 font-medium">{boost.benefit}</div>
                    </div>
                  )}
                  <button className="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-sm">
                    Boost Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seller Subscriptions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Monthly Seller Subscriptions</h2>
          <p className="text-center text-gray-600 mb-8">Unlimited posting with recurring monthly benefits</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sellerPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg ${
                  plan.popular ? "ring-2 ring-blue-600 md:scale-105" : ""
                }`}
              >
                <div className={`p-8 ${plan.popular ? "bg-blue-600 text-white" : "bg-white"}`}>
                  {plan.popular && (
                    <div className="text-sm font-semibold mb-3 bg-white text-blue-600 py-2 px-4 rounded-full w-fit">
                      👑 Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.popular ? "text-blue-100" : "text-gray-600"}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="ml-2">{plan.period}</span>
                  </div>
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition ${
                      plan.popular
                        ? "bg-white text-blue-600 hover:bg-gray-100"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Subscribe Now
                  </button>
                </div>
                <div className={`p-8 ${plan.popular ? "bg-blue-50" : "bg-gray-50"}`}>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-blue-600 mr-3 font-bold">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Pricing for High Revenue Categories */}
        <div className="mb-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🏠 Special Pricing for Real Estate & Vehicles</h2>
          <p className="text-gray-600 mb-8 text-lg">These categories generate the highest ROI</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition ${
                  plan.highlight ? "border-2 border-purple-600" : ""
                }`}
              >
                {plan.highlight && (
                  <div className="text-sm font-semibold mb-3 bg-purple-600 text-white py-2 px-4 rounded-full w-fit">
                    Recommended
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.category}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-purple-600 mb-4">{plan.price}</div>
                <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition text-sm">
                  Choose
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Lead-Based Model */}
        <div className="mb-16 bg-blue-50 rounded-lg p-12 border-2 border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🚀 Lead-Based Model (Optional)</h2>
          <p className="text-center text-gray-600 mb-8 text-lg">For service providers and professionals</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadModel.map((model, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{model.role}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">Pay Per Lead</div>
                <p className="text-gray-700">{model.range}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-sm">
            Only pay when you get qualified leads. Perfect for scaling your business!
          </p>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Can I upgrade or downgrade anytime?</h3>
              <p className="text-gray-600">Yes! Switch between plans anytime and we'll adjust your billing accordingly. Upgrades take effect immediately.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">What happens to my ads if I cancel?</h3>
              <p className="text-gray-600">Your active ads will remain visible until their validity expires. No data loss.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Can I combine multiple plans?</h3>
              <p className="text-gray-600">Absolutely! Use a subscription plan and add one-time boosts for maximum visibility.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Is there a commitment period?</h3>
              <p className="text-gray-600">No! Monthly plans can be cancelled anytime. One-time boosts don't have any commitment.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">How are leads tracked for commission?</h3>
              <p className="text-gray-600">We provide a tracking dashboard to monitor all leads and verify closed deals for commission calculation.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Do you offer bulk discounts?</h3>
              <p className="text-gray-600">Yes! Contact our sales team for custom pricing for large volume bookings.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="mb-8 text-lg opacity-90">Choose your plan and start growing your business today</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/post-listing"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Post Your First Ad
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
