import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                BrightHome
              </h3>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Your trusted platform for properties and home services across India. Connecting dreams with homes since 2026.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-blue-400 transition flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all">→</span>
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400 transition flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all">→</span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-blue-400 transition flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all">→</span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">For Partners</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/post-listing" className="text-gray-400 hover:text-blue-400 transition flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all">→</span>
                  Post a Listing
                </Link>
              </li>
              <li>
                <Link to="/become-partner" className="text-gray-400 hover:text-blue-400 transition flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all">→</span>
                  Become a Partner
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all">→</span>
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all">→</span>
                  Partner Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">📧</span>
                <a href="mailto:support@brighthome.in" className="hover:text-blue-400 transition">
                  support@brighthome.in
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">📞</span>
                <a href="tel:+911234567890" className="hover:text-blue-400 transition">
                  +91 1234 567 890
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">📍</span>
                <span>Patna, Bihar, India</span>
              </li>
            </ul>
            <div className="mt-6 space-y-2">
              <a href="#" className="block text-gray-400 hover:text-blue-400 text-sm transition">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 text-sm transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} BrightHome. All rights reserved.
            </p>
            <p className="mt-2 md:mt-0">
              Made with <span className="text-red-500">❤️</span> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;