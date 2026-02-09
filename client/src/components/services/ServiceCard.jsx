import { Link } from "react-router-dom";

const ServiceCard = ({ title, icon, description, rating, providers, link }) => {
  return (
    <Link to={link || "/services"} className="block">
      <div className="bg-white rounded-xl shadow-lg p-6 w-64 text-center hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 transform border-2 border-transparent hover:border-blue-200 group">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
          <div className="text-5xl group-hover:scale-110 transition-transform">{icon || "🔧"}</div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {description || "Verified professionals near you"}
        </p>
        
        <div className="flex items-center justify-center space-x-4 mb-4 text-sm text-gray-500">
          {rating && (
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">⭐</span>
              <span className="font-semibold">{rating}</span>
            </div>
          )}
          {providers && (
            <div className="flex items-center">
              <span className="mr-1">👥</span>
              <span>{providers}+ pros</span>
            </div>
          )}
        </div>

        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-md hover:shadow-lg">
          Explore →
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;