import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const PostListing = () => {
  const [listingType, setListingType] = useState("property");
  const [formData, setFormData] = useState({
    // Property fields
    propertyType: "",
    title: "",
    description: "",
    location: "",
    price: "",
    bhk: "",
    area: "",
    listingFor: "sale",
    // Service fields
    serviceName: "",
    serviceCategory: "",
    serviceDescription: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Listing submitted successfully! (Demo)");
    console.log("Form Data:", formData);
  };

  return (
    <>
      <Header />

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Post Your Listing</h1>
          <p className="text-xl">
            List your property or service and reach thousands of customers
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white shadow-lg rounded-lg p-8">
            {/* LISTING TYPE SELECTOR */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">
                What would you like to list?
              </h3>
              <div className="flex gap-4">
                <button
                  onClick={() => setListingType("property")}
                  className={`flex-1 py-4 rounded-lg font-semibold transition ${
                    listingType === "property"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  🏠 Property
                </button>
                <button
                  onClick={() => setListingType("service")}
                  className={`flex-1 py-4 rounded-lg font-semibold transition ${
                    listingType === "service"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  🔧 Service
                </button>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
              {listingType === "property" ? (
                <>
                  <h3 className="text-xl font-bold mb-4">Property Details</h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Property Type *
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Type</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">Independent House</option>
                        <option value="villa">Villa</option>
                        <option value="plot">Plot/Land</option>
                        <option value="commercial">Commercial Space</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Listing For *
                      </label>
                      <select
                        name="listingFor"
                        value={formData.listingFor}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="sale">For Sale</option>
                        <option value="rent">For Rent</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Property Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g., 3 BHK Luxury Apartment in Boring Road"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your property..."
                      rows="4"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g., Boring Road, Patna"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Price *
                      </label>
                      <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="e.g., 65 Lakhs or 15000/month"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        BHK *
                      </label>
                      <select
                        name="bhk"
                        value={formData.bhk}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select BHK</option>
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4">4 BHK</option>
                        <option value="5">5+ BHK</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Area (sq ft) *
                      </label>
                      <input
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
                        placeholder="e.g., 1200"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-4">Service Details</h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Service Name *
                      </label>
                      <input
                        type="text"
                        name="serviceName"
                        value={formData.serviceName}
                        onChange={handleInputChange}
                        placeholder="e.g., Professional Packers & Movers"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Service Category *
                      </label>
                      <select
                        name="serviceCategory"
                        value={formData.serviceCategory}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Category</option>
                        <option value="moving">Moving & Packing</option>
                        <option value="renovation">Renovation</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="cleaning">Cleaning</option>
                        <option value="design">Design</option>
                        <option value="technology">Technology</option>
                        <option value="outdoor">Outdoor</option>
                        <option value="security">Security</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Service Description *
                    </label>
                    <textarea
                      name="serviceDescription"
                      value={formData.serviceDescription}
                      onChange={handleInputChange}
                      placeholder="Describe your service offering..."
                      rows="4"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                </>
              )}

              {/* CONTACT DETAILS */}
              <h3 className="text-xl font-bold mb-4 mt-8">Contact Details</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    placeholder="Your name"
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
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-bold text-lg"
              >
                Submit Listing
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PostListing;
