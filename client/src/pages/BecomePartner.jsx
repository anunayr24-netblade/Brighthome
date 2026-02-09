import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const BecomePartner = () => {
  const [formData, setFormData] = useState({
    partnerType: "agent",
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Partner registration submitted! We'll contact you soon. (Demo)");
    console.log("Partner Data:", formData);
  };

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Become a Partner</h1>
          <p className="text-xl mb-8">
            Join BrightHome and grow your business with thousands of customers
          </p>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Partner with BrightHome?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-3">Grow Your Business</h3>
              <p className="text-gray-600">
                Reach thousands of potential customers actively looking for your
                services
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">Earn More</h3>
              <p className="text-gray-600">
                Get quality leads and increase your revenue with our platform
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3">Build Trust</h3>
              <p className="text-gray-600">
                Showcase your work and build a strong reputation in your area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER TYPES */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Who Can Partner?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                🏢 Property Agents & Developers
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ List unlimited properties</li>
                <li>✓ Featured listing options</li>
                <li>✓ Direct lead generation</li>
                <li>✓ Analytics dashboard</li>
                <li>✓ Priority customer support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                🔧 Service Providers
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Create professional profile</li>
                <li>✓ Showcase your services</li>
                <li>✓ Get customer inquiries</li>
                <li>✓ Build your portfolio</li>
                <li>✓ Customer reviews & ratings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Partner Registration Form
            </h2>

            <form onSubmit={handleSubmit}>
              {/* PARTNER TYPE */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3">
                  I want to register as: *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, partnerType: "agent" })
                    }
                    className={`py-4 rounded-lg font-semibold transition ${
                      formData.partnerType === "agent"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Property Agent
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, partnerType: "service" })
                    }
                    className={`py-4 rounded-lg font-semibold transition ${
                      formData.partnerType === "service"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Service Provider
                  </button>
                </div>
              </div>

              {/* PERSONAL DETAILS */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Business/Company Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Your business name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Location/City *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Your operating location"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Tell us about your business *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your services, experience, and what makes you unique..."
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-bold text-lg"
              >
                Submit Registration
              </button>

              <p className="text-center text-gray-600 mt-4 text-sm">
                Our team will review your application and contact you within 2-3
                business days
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Partnership Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">Free</p>
              <ul className="text-left space-y-3 mb-6 text-gray-700">
                <li>✓ List up to 5 items</li>
                <li>✓ Basic profile</li>
                <li>✓ Standard support</li>
              </ul>
              <button className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-semibold">
                Get Started
              </button>
            </div>

            <div className="bg-blue-600 text-white rounded-lg shadow-xl p-8 text-center transform scale-105">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <p className="text-4xl font-bold mb-4">₹999/mo</p>
              <ul className="text-left space-y-3 mb-6">
                <li>✓ Unlimited listings</li>
                <li>✓ Featured placement</li>
                <li>✓ Priority support</li>
                <li>✓ Analytics dashboard</li>
              </ul>
              <button className="w-full py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-bold">
                Most Popular
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">Custom</p>
              <ul className="text-left space-y-3 mb-6 text-gray-700">
                <li>✓ Everything in Premium</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ API access</li>
                <li>✓ Custom branding</li>
              </ul>
              <button className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BecomePartner;
