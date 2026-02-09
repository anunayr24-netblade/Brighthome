import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [propertiesOpen, setPropertiesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-blue-100">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Navigation - Left Side */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-all">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  BrightHome
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Property & Services</p>
              </div>
            </Link>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                to="/"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium"
              >
                Home
              </Link>

              {/* Properties Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPropertiesOpen(true)}
                onMouseLeave={() => setPropertiesOpen(false)}
              >
                <Link
                  to="/properties"
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium inline-flex items-center"
                >
                  Properties
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      propertiesOpen ? "rotate-180" : ""
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
                </Link>
                <div
                  className={`absolute left-0 mt-0 w-60 bg-white rounded-xl shadow-2xl border border-gray-200 py-3 z-50 transition-all duration-200 ${
                    propertiesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <Link
                    to="/properties?type=sale"
                    className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">🏠</span>
                      <div>
                        <span className="font-semibold block">Buy Properties</span>
                        <p className="text-xs text-gray-500 mt-0.5">Find your dream home</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/properties?type=rent"
                    className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">🔑</span>
                      <div>
                        <span className="font-semibold block">Rent Properties</span>
                        <p className="text-xs text-gray-500 mt-0.5">Affordable rentals</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/properties?type=commercial"
                    className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">🏢</span>
                      <div>
                        <span className="font-semibold block">Commercial</span>
                        <p className="text-xs text-gray-500 mt-0.5">Office & shop spaces</p>
                      </div>
                    </div>
                  </Link>
                  <div className="border-t border-gray-200 my-2 mx-3"></div>
                  <Link
                    to="/post-listing"
                    className="block px-5 py-2.5 text-blue-600 hover:bg-blue-50 font-semibold transition-colors"
                  >
                    <span className="flex items-center">
                      <span className="mr-2">📝</span>
                      Post Property
                    </span>
                  </Link>
                </div>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium inline-flex items-center"
                >
                  Services
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
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
                </Link>
                <div
                  className={`absolute left-0 mt-0 w-60 bg-white rounded-xl shadow-2xl border border-gray-200 py-3 z-50 transition-all duration-200 ${
                    servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                    <Link
                      to="/services?category=moving"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="flex items-center font-medium">
                        <span className="text-xl mr-3">📦</span>
                        Packers & Movers
                      </span>
                    </Link>
                    <Link
                      to="/services?category=renovation"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="flex items-center font-medium">
                        <span className="text-xl mr-3">🎨</span>
                        Painting & Renovation
                      </span>
                    </Link>
                    <Link
                      to="/services?category=maintenance"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="flex items-center font-medium">
                        <span className="text-xl mr-3">🔧</span>
                        Home Maintenance
                      </span>
                    </Link>
                    <Link
                      to="/services?category=cleaning"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="flex items-center font-medium">
                        <span className="text-xl mr-3">🧹</span>
                        Cleaning Services
                      </span>
                    </Link>
                    <Link
                      to="/services?category=design"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="flex items-center font-medium">
                        <span className="text-xl mr-3">🏠</span>
                        Interior Design
                      </span>
                    </Link>
                    <Link
                      to="/services?category=technology"
                      className="block px-5 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="flex items-center font-medium">
                        <span className="text-xl mr-3">🤖</span>
                        Home Automation
                      </span>
                    </Link>
                    <div className="border-t border-gray-200 my-2 mx-3"></div>
                    <Link
                      to="/services"
                      className="block px-5 py-2.5 text-blue-600 hover:bg-blue-50 font-semibold transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      View All Services →
                    </Link>
                  </div>
              </div>

              <Link
                to="/blog"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium"
              >
                Blog & Guides
              </Link>

              <Link
                to="/become-partner"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition font-medium"
              >
                Become Partner
              </Link>
            </nav>
          </div>

          {/* Right Side - Auth & CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/post-listing"
              className="px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition font-semibold shadow-md hover:shadow-lg"
            >
              + Post Listing
            </Link>
            <Link
              to="/login"
              className="px-5 py-2 text-gray-700 hover:text-blue-600 transition font-medium"
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
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
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
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-fadeIn">
            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                🏠 Home
              </Link>
              
              {/* Properties Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setPropertiesOpen(!propertiesOpen)}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition flex items-center justify-between"
                >
                  <span>🏘️ Properties</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      propertiesOpen ? "rotate-180" : ""
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
                {propertiesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      to="/properties?type=sale"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setPropertiesOpen(false);
                      }}
                    >
                      Buy Properties
                    </Link>
                    <Link
                      to="/properties?type=rent"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setPropertiesOpen(false);
                      }}
                    >
                      Rent Properties
                    </Link>
                    <Link
                      to="/properties?type=commercial"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setPropertiesOpen(false);
                      }}
                    >
                      Commercial
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition flex items-center justify-between"
                >
                  <span>🔧 Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
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
                {servicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      to="/services?category=moving"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      Packers & Movers
                    </Link>
                    <Link
                      to="/services?category=renovation"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      Painting & Renovation
                    </Link>
                    <Link
                      to="/services?category=maintenance"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      Home Maintenance
                    </Link>
                    <Link
                      to="/services?category=cleaning"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      Cleaning Services
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                📰 Blog
              </Link>
              <Link
                to="/become-partner"
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                🤝 Become Partner
              </Link>
              <Link
                to="/post-listing"
                className="px-4 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                + Post Listing
              </Link>
              <div className="flex space-x-2 pt-2">
                <Link
                  to="/login"
                  className="flex-1 px-4 py-2 text-center border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="flex-1 px-4 py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
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