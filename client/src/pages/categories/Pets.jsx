import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const Pets = () => {
  const services = [
    {
      title: "🐕 Pets for Sale",
      description: "Dogs, cats, birds & exotic pets",
      count: "3,450+ listings",
      image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400&h=250&fit=crop",
    },
    {
      title: "🏠 Pet Adoption",
      description: "Rescue & adoption opportunities",
      count: "1,890+ listings",
      image: "https://images.unsplash.com/photo-1560807707-e6b4fa3a94b8?w=400&h=250&fit=crop",
    },
    {
      title: "✂️ Pet Grooming",
      description: "Professional pet grooming services",
      count: "2,670+ listings",
      image: "https://images.unsplash.com/photo-1576201865391-63d674b6e44c?w=400&h=250&fit=crop",
    },
    {
      title: "🎾 Pet Accessories",
      description: "Food, toys, collars & supplies",
      count: "4,120+ listings",
      image: "https://images.unsplash.com/photo-1552053831-71594a27c62d?w=400&h=250&fit=crop",
    },
    {
      title: "🏥 Veterinary Services",
      description: "Vet clinics, pet healthcare",
      count: "2,340+ listings",
      image: "https://images.unsplash.com/photo-1638348815675-f83bb920f09a?w=400&h=250&fit=crop",
    },
    {
      title: "🚗 Pet Transportation",
      description: "Pet cab & relocation services",
      count: "890+ listings",
      image: "https://images.unsplash.com/photo-1576201865391-63d674b6e44c?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-orange-600 to-amber-600 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=1200&h=400&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">🐾 Pets & Animals</h1>
          <p className="text-2xl text-orange-100 mb-8">
            Everything your pet needs in one place
          </p>
          <Link
            to="/post-listing"
            className="inline-block px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition w-fit"
          >
            Post Your Pet
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Pets Listed", value: "15,370+" },
            { label: "Pet Services", value: "9,910+" },
            { label: "Happy Pet Owners", value: "120,000+" },
            { label: "Avg Rating", value: "4.9/5⭐" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="text-3xl font-bold text-orange-600">{stat.value}</div>
              <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Pet Services</h2>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              25,280 listings
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to="/post-listing"
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.count}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition text-sm">
                    Browse
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose BrightHome Pets?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "✓", title: "Verified Sellers", desc: "Responsible pet breeders" },
              { icon: "🏥", title: "Pet Health", desc: "Vaccination & health verified" },
              { icon: "💝", title: "Pet Adoption", desc: "Give shelter pets a home" },
              { icon: "🛡️", title: "Pet Safety", desc: "Secure buyer protection" },
              { icon: "📞", title: "Support", desc: "Expert advice & support" },
              { icon: "❤️", title: "Love Pets", desc: "We care about animal welfare" },
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
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Love Pets? Join Us Today!</h3>
          <p className="text-orange-100 mb-8 text-lg">
            Find your perfect pet or offer pet services to 120,000+ pet lovers
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/post-listing"
              className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Post Your Pet/Service
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition">
              Browse Pets
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pets;
