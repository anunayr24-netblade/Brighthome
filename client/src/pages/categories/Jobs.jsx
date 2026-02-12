import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const Jobs = () => {
  const jobCategories = [
    {
      title: "💼 Full-Time Jobs",
      description: "Permanent employment opportunities",
      count: "5,230+ listings",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    },
    {
      title: "⏰ Part-Time Jobs",
      description: "Flexible working hours",
      count: "2,890+ listings",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    },
    {
      title: "🚀 Freelance Work",
      description: "Project-based opportunities",
      count: "3,450+ listings",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    },
    {
      title: "🚴 Delivery Executive",
      description: "Food & parcel delivery",
      count: "1,670+ listings",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    },
    {
      title: "👨‍💼 Drivers",
      description: "Cab, commercial drivers",
      count: "2,340+ listings",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    },
    {
      title: "👨‍🎓 Internships",
      description: "Career development programs",
      count: "890+ listings",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-green-600 to-emerald-700 overflow-hidden">
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
          <h1 className="text-5xl font-bold text-white mb-4">💼 Jobs & Careers</h1>
          <p className="text-2xl text-emerald-100 mb-8">
            Find your next opportunity or hire top talent
          </p>
          <Link
            to="/post-listing"
            className="inline-block px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition w-fit"
          >
            Post a Job
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Active Jobs", value: "16,080+" },
            { label: "Placements", value: "45,000+" },
            { label: "Job Seekers", value: "250,000+" },
            { label: "Companies", value: "2,500+" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="text-3xl font-bold text-green-600">{stat.value}</div>
              <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Job Categories</h2>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              16,080 listings
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((category, idx) => (
              <Link
                key={idx}
                to="/post-listing"
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {category.count}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{category.description}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition text-sm">
                    Browse Jobs
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Join BrightHome Jobs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "✓", title: "Verified Jobs", desc: "Only legitimate listings" },
              { icon: "🎯", title: "Smart Matching", desc: "Get matched with best jobs" },
              { icon: "💼", title: "Career Growth", desc: "Guidance & mentorship" },
              { icon: "📱", title: "Mobile Ready", desc: "Apply on the go" },
              { icon: "📞", title: "24/7 Support", desc: "Always here to help" },
              { icon: "🔒", title: "Secure", desc: "Your data is protected" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h3>
          <p className="text-emerald-100 mb-8 text-lg">
            Browse 16,000+ jobs or post your opening today
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/post-listing"
              className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Post a Job
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition">
              Browse Jobs
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Jobs;
