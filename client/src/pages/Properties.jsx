import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import PropertyCard from "../components/property/PropertyCard";

const Properties = () => {
  const [filters, setFilters] = useState({
    type: "all",
    location: "",
    priceRange: "all",
    bhk: "all",
  });

  // Sample property data
  const properties = [
    {
      id: 1,
      title: "3 BHK Luxury Apartment",
      location: "Boring Road, Patna",
      price: "65 Lakhs",
      type: "For Sale",
      bhk: "3",
      area: "1,450",
    },
    {
      id: 2,
      title: "2 BHK Flat",
      location: "Kankarbagh, Patna",
      price: "15,000/month",
      type: "For Rent",
      bhk: "2",
      area: "950",
    },
    {
      id: 3,
      title: "Independent House",
      location: "Raja Bazar, Patna",
      price: "1.2 Crore",
      type: "For Sale",
      bhk: "4",
      area: "2,200",
    },
    {
      id: 4,
      title: "1 BHK Studio Apartment",
      location: "Patliputra, Patna",
      price: "12,000/month",
      type: "For Rent",
      bhk: "1",
      area: "600",
    },
    {
      id: 5,
      title: "4 BHK Penthouse",
      location: "Fraser Road, Patna",
      price: "95 Lakhs",
      type: "For Sale",
      bhk: "4",
      area: "2,800",
    },
    {
      id: 6,
      title: "Commercial Space",
      location: "Exhibition Road, Patna",
      price: "50,000/month",
      type: "For Rent",
      bhk: "",
      area: "1,200",
    },
  ];

  return (
    <>
      <Header />

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Browse Properties</h1>
          <p className="text-xl">
            Find your dream home or perfect investment opportunity
          </p>
        </div>
      </section>

      {/* FILTERS & LISTINGS */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          {/* FILTERS */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4">Filters</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Property Type
                </label>
                <select
                  value={filters.type}
                  onChange={(e) =>
                    setFilters({ ...filters, type: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Types</option>
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter location"
                  value={filters.location}
                  onChange={(e) =>
                    setFilters({ ...filters, location: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  BHK
                </label>
                <select
                  value={filters.bhk}
                  onChange={(e) =>
                    setFilters({ ...filters, bhk: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Any</option>
                  <option value="1">1 BHK</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4+ BHK</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Price Range
                </label>
                <select
                  value={filters.priceRange}
                  onChange={(e) =>
                    setFilters({ ...filters, priceRange: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Any Price</option>
                  <option value="low">Under 30 Lakhs</option>
                  <option value="mid">30-60 Lakhs</option>
                  <option value="high">Above 60 Lakhs</option>
                </select>
              </div>
            </div>
          </div>

          {/* PROPERTY LISTINGS */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">
                {properties.length} Properties Found
              </h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Properties;
