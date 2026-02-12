import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { locations } from "../../data/locations";

const Header = () => {
  const [realEstateOpen, setRealEstateOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [expandedLocation, setExpandedLocation] = useState(null);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [taglineVisible, setTaglineVisible] = useState(true);

  const taglineWords = ["Properties", "Services", "Professionals", "Opportunities"];

  useEffect(() => {
    let timeoutId;
    const intervalId = setInterval(() => {
      setTaglineVisible(false);

      timeoutId = setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % taglineWords.length);
        setTaglineVisible(true);
      }, 350);
    }, 2500);

    return () => {
      clearInterval(intervalId);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [taglineWords.length]);

  const realEstateOptions = [
    { title: "🏠 Buy Property", items: ["Apartments for Sale", "Independent House", "Villas", "Plots / Land", "Farmhouse"], path: "/category/real-estate" },
    { title: "🔑 Rent Property", items: ["Apartments for Rent", "House for Rent", "PG / Hostel", "Commercial Rent"], path: "/category/real-estate" },
    { title: "🏢 Commercial", items: ["Office Space", "Shops", "Warehouses"], path: "/category/real-estate" },
    { title: "👨‍💼 Services", items: ["Property Dealers", "Home Loan Agents", "Legal Documentation"], path: "/category/real-estate" },
  ];

  const categories = [
    {
      id: "vehicles",
      title: "🚗 Vehicles",
      path: "/category/vehicles",
      icon: "🚗",
      subcategories: ["Cars", "Bikes & Scooters", "Commercial", "Services"],
      description: "Buy, sell & rent vehicles",
    },
    {
      id: "home-services",
      title: "🛠 Home Services",
      path: "/category/home-services",
      icon: "🛠",
      subcategories: ["Repair & Maintenance", "Improvement", "Cleaning"],
      description: "Professional home services",
    },
    {
      id: "jobs",
      title: "💼 Jobs",
      path: "/category/jobs",
      icon: "💼",
      subcategories: ["Full Time", "Part Time", "Freelance"],
      description: "Find your next opportunity",
    },
    {
      id: "buy-sell",
      title: "🛒 Buy & Sell",
      path: "/category/buy-sell",
      icon: "🛒",
      subcategories: ["Electronics", "Home & Furniture", "Fashion"],
      description: "Buy and sell anything",
    },
    {
      id: "education",
      title: "🎓 Education",
      path: "/category/education",
      icon: "🎓",
      subcategories: ["Tutors", "Coaching", "Courses"],
      description: "Learning & development",
    },
    {
      id: "health",
      title: "🏥 Health & Wellness",
      path: "/category/health",
      icon: "🏥",
      subcategories: ["Gym", "Yoga", "Medical"],
      description: "Health services",
    },
    {
      id: "events",
      title: "🎉 Events & Services",
      path: "/category/events",
      icon: "🎉",
      subcategories: ["Planning", "Photography", "Catering"],
      description: "Make events memorable",
    },
    {
      id: "pets",
      title: "🐾 Pets",
      path: "/category/pets",
      icon: "🐾",
      subcategories: ["Pets for Sale", "Grooming", "Veterinary"],
      description: "Pet care solutions",
    },
    {
      id: "business",
      title: "🏢 Business Services",
      path: "/category/business-services",
      icon: "🏢",
      subcategories: ["Registration", "Legal", "Marketing"],
      description: "Business solutions",
    },
  ];

  return (
    <header className="bg-transparent shadow-lg sticky top-0 z-50 border-b-2 border-white/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Navigation - Left Side */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group flex-shrink-0 hover:opacity-90 transition-opacity duration-300">
              {/* Enhanced Logo Icon */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-green-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110"></div>
                <div className="relative flex items-center justify-center w-full h-full">
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-red-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <svg
                    className="w-7 h-7 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                </div>
              </div>
              {/* Logo Text */}
              <div className="relative">
                <h1 className="text-2xl font-black bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent group-hover:from-red-700 group-hover:to-green-700 transition-all duration-300">
                  BrightHome
                </h1>
                <p className="text-lg text-amber-800 -mt-1 font-bold italic tracking-wider h-5 flex items-center gap-1">
                  <span
                    className={`inline-block transition-all duration-300 w-[120px] ${
                      taglineVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                  >
                    {taglineWords[taglineIndex]}
                  </span>
                </p>
              </div>
            </Link>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                to="/"
                className="px-4 py-2 text-white hover:text-white rounded-lg transition font-medium whitespace-nowrap"
              >
                Home
              </Link>

              {/* Location Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setLocationOpen(true)}
                onMouseLeave={() => { setLocationOpen(false); setExpandedLocation(null); }}
              >
                <button className="px-4 py-2 text-white hover:text-white rounded-lg transition font-medium inline-flex items-center whitespace-nowrap">
                  Locations
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      locationOpen ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {locationOpen && (
                  <div className="absolute left-0 mt-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto">
                    <button
                      onClick={() => {
                        setSelectedLocation("All Locations");
                        setLocationOpen(false);
                        setExpandedLocation(null);
                      }}
                      className="block w-full text-left px-5 py-3 hover:bg-blue-50 border-b transition font-semibold text-gray-900"
                    >
                      All Locations
                    </button>
                    {[...locations].sort((a, b) => a.name.localeCompare(b.name)).map((location) => (
                      <div key={location.id}>
                        <button
                          onClick={() => setExpandedLocation(expandedLocation === location.id ? null : location.id)}
                          className="block w-full text-left px-5 py-3 hover:bg-blue-50 border-b transition flex items-center justify-between font-semibold text-gray-900"
                        >
                          <span>{location.name}</span>
                          <svg
                            className={`w-4 h-4 transition-transform ${expandedLocation === location.id ? "rotate-180" : ""}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        {expandedLocation === location.id && (
                          <div className="bg-blue-50">
                            <button
                              onClick={() => {
                                setSelectedLocation(`${location.capital}, ${location.name}`);
                                setLocationOpen(false);
                                setExpandedLocation(null);
                              }}
                              className="block w-full text-left px-8 py-2 hover:bg-blue-100 transition text-sm text-gray-800 font-semibold border-l-4 border-blue-500"
                            >
                              {location.capital} (Capital)
                            </button>
                            {location.majorCities.map((city, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  setSelectedLocation(`${city}, ${location.name}`);
                                  setLocationOpen(false);
                                  setExpandedLocation(null);
                                }}
                                className="block w-full text-left px-8 py-2 hover:bg-blue-100 transition text-sm text-gray-700"
                              >
                                {city}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Real Estate Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setRealEstateOpen(true)}
                onMouseLeave={() => setRealEstateOpen(false)}
              >
                <button className="px-4 py-2 text-white hover:text-white rounded-lg transition font-medium inline-flex items-center whitespace-nowrap">
                  🏡 Real Estate
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      realEstateOpen ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {realEstateOpen && (
                  <div className="absolute left-0 mt-0 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
                    {realEstateOptions.map((option, idx) => (
                      <Link
                        key={idx}
                        to={option.path}
                        className="block px-5 py-3 hover:bg-blue-50 border-b last:border-b-0 transition"
                        onClick={() => setRealEstateOpen(false)}
                      >
                        <div className="font-semibold text-gray-900">{option.title}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {option.items.join(" • ")}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Categories Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCategoriesOpen(true)}
                onMouseLeave={() => setCategoriesOpen(false)}
              >
                <button className="px-4 py-2 text-white hover:text-white rounded-lg transition font-medium inline-flex items-center whitespace-nowrap">
                  Categories
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      categoriesOpen ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {categoriesOpen && (
                  <div className="absolute left-0 mt-0 w-screen max-w-5xl bg-white rounded-xl shadow-2xl border border-gray-200 py-6 px-6 z-50 grid grid-cols-3 gap-6">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={category.path}
                        className="group p-4 rounded-lg hover:bg-blue-50 transition border border-transparent hover:border-blue-200"
                        onClick={() => setCategoriesOpen(false)}
                      >
                        <div className="text-3xl mb-2">{category.icon}</div>
                        <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                          {category.title}
                        </div>
                        <div className="text-xs text-gray-600 mt-2 mb-3">
                          {category.description}
                        </div>
                        <div className="text-xs text-gray-500 line-clamp-2">
                          {category.subcategories.join(" • ")}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/post-listing"
                className="px-4 py-2 text-white hover:text-white rounded-lg transition font-medium whitespace-nowrap"
              >
                Post Ad
              </Link>

              <Link
                to="/provider-hub"
                className="px-4 py-2 text-white hover:text-white rounded-lg transition font-medium whitespace-nowrap"
              >
                For Providers
              </Link>

              <Link
                to="/customer-hub"
                className="px-4 py-2 text-white hover:text-white rounded-lg transition font-medium whitespace-nowrap"
              >
                For Customers
              </Link>

              <Link
                to="/pricing"
                className="px-4 py-2 text-white hover:text-white rounded-lg transition font-medium whitespace-nowrap"
              >
                Pricing
              </Link>

              <Link
                to="/blog"
                className="px-4 py-2 text-white hover:text-white rounded-lg transition font-medium whitespace-nowrap"
              >
                Blog
              </Link>

              <Link
                to="/about"
                className="px-4 py-2 text-white hover:text-white rounded-lg transition font-medium whitespace-nowrap"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="px-4 py-2 text-white hover:text-white rounded-lg transition font-medium whitespace-nowrap"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Right Side - Auth */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/login"
              className="px-5 py-2 text-white hover:text-white transition font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-md hover:shadow-lg"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/20 rounded-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4 animate-fadeIn max-h-96 overflow-y-auto">
            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                className="px-4 py-2 text-white hover:bg-white/20 hover:text-white rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                🏠 Home
              </Link>

              {/* Mobile Location Dropdown */}
              <div className="px-4 py-2">
                <button
                  onClick={() => setLocationOpen(!locationOpen)}
                  className="w-full text-left text-white hover:text-white rounded-lg transition font-medium inline-flex items-center justify-between bg-white/10 hover:bg-white/20 px-3 py-2 rounded"
                >
                  {selectedLocation}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      locationOpen ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {locationOpen && (
                  <div className="mt-2 bg-white/10 rounded-lg p-2 max-h-64 overflow-y-auto">
                    <button
                      onClick={() => {
                        setSelectedLocation("All Locations");
                        setLocationOpen(false);
                        setExpandedLocation(null);
                      }}
                      className="block w-full text-left px-3 py-2 text-white hover:bg-white/20 rounded transition text-sm font-semibold"
                    >
                      All Locations
                    </button>
                    {[...locations].sort((a, b) => a.name.localeCompare(b.name)).map((location) => (
                      <div key={location.id}>
                        <button
                          onClick={() => setExpandedLocation(expandedLocation === location.id ? null : location.id)}
                          className="block w-full text-left px-3 py-2 text-white hover:bg-white/20 rounded transition text-sm font-semibold flex items-center justify-between"
                        >
                          <span>{location.name}</span>
                          <svg
                            className={`w-3 h-3 transition-transform ${expandedLocation === location.id ? "rotate-180" : ""}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        {expandedLocation === location.id && (
                          <div className="bg-white/5 ml-2 rounded">
                            <button
                              onClick={() => {
                                setSelectedLocation(`${location.capital}, ${location.name}`);
                                setLocationOpen(false);
                                setExpandedLocation(null);
                              }}
                              className="block w-full text-left px-4 py-1.5 text-white hover:bg-white/20 rounded transition text-xs font-semibold"
                            >
                              {location.capital} (Capital)
                            </button>
                            {location.majorCities.map((city, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  setSelectedLocation(`${city}, ${location.name}`);
                                  setLocationOpen(false);
                                  setExpandedLocation(null);
                                }}
                                className="block w-full text-left px-4 py-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded transition text-xs"
                              >
                                {city}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Real Estate */}
              <Link
                to="/category/real-estate"
                className="px-4 py-2 text-white hover:bg-white/20 hover:text-white rounded-lg transition font-semibold bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                🏡 Real Estate
              </Link>

              {/* Mobile Categories */}
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={category.path}
                  className="px-4 py-2 text-white hover:bg-white/20 hover:text-white rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.title}
                </Link>
              ))}

              <Link
                to="/post-listing"
                className="px-4 py-2 text-white hover:bg-white/20 hover:text-white rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                📝 Post Ad
              </Link>

              <Link
                to="/provider-hub"
                className="px-4 py-2 text-white hover:bg-white/20 hover:text-white rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                🛠 For Providers
              </Link>

              <Link
                to="/customer-hub"
                className="px-4 py-2 text-white hover:bg-white/20 hover:text-white rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                🧭 For Customers
              </Link>

              <Link
                to="/pricing"
                className="px-4 py-2 text-white hover:bg-white/20 hover:text-white rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                💰 Pricing
              </Link>

              <Link
                to="/blog"
                className="px-4 py-2 text-white hover:bg-white/20 hover:text-white rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                📰 Blog
              </Link>

              <Link
                to="/about"
                className="px-4 py-2 text-white hover:bg-white/20 hover:text-white rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                ℹ️ About Us
              </Link>

              <Link
                to="/contact"
                className="px-4 py-2 text-white hover:bg-white/20 hover:text-white rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✉️ Contact
              </Link>

              <div className="flex space-x-2 pt-4 border-t border-white/20 mt-4">
                <Link
                  to="/login"
                  className="flex-1 px-4 py-2 text-center border-2 border-white text-white rounded-lg hover:bg-white/20 transition font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="flex-1 px-4 py-2 text-center bg-white/20 text-white rounded-lg hover:bg-white/30 transition font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;