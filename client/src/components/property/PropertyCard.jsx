const PropertyCard = ({ title, location, price, image, type, bhk, area }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 w-80 group cursor-pointer transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={image || "https://via.placeholder.com/320x200"}
          alt={title}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
          {type || "For Sale"}
        </span>
        {bhk && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-sm font-semibold shadow-md">
            {bhk} BHK
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-blue-600 transition">
          {title || "2 BHK Apartment"}
        </h3>
        <p className="text-gray-600 mb-1 flex items-center text-sm">
          <svg className="w-4 h-4 mr-1 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {location || "Patna"}
        </p>
        {area && (
          <p className="text-gray-500 text-sm mb-3">
            📐 {area} sq ft
          </p>
        )}
        <div className="flex items-center justify-between mb-4">
          <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            ₹{price || "45 Lakhs"}
          </p>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-md hover:shadow-lg">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;