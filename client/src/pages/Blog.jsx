import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Tips for First-Time Home Buyers",
      excerpt: "Buying your first home? Here are essential tips to make the process smooth and successful...",
      date: "Feb 5, 2026",
      category: "Real Estate",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 2,
      title: "How to Choose the Right Moving Company",
      excerpt: "Moving to a new home can be stressful. Learn how to select reliable packers and movers...",
      date: "Feb 3, 2026",
      category: "Services",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 3,
      title: "Home Interior Design Trends in 2026",
      excerpt: "Discover the latest interior design trends that are transforming homes this year...",
      date: "Jan 30, 2026",
      category: "Design",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 4,
      title: "Property Investment Guide for Beginners",
      excerpt: "Start your real estate investment journey with these expert tips and strategies...",
      date: "Jan 28, 2026",
      category: "Investment",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 5,
      title: "Home Maintenance Checklist for Every Season",
      excerpt: "Keep your home in top condition with this comprehensive seasonal maintenance guide...",
      date: "Jan 25, 2026",
      category: "Maintenance",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 6,
      title: "Smart Home Technology: What's Worth the Investment?",
      excerpt: "Explore smart home devices that add value and convenience to your living space...",
      date: "Jan 22, 2026",
      category: "Technology",
      image: "https://via.placeholder.com/400x250",
    },
  ];

  return (
    <>
      <Header />

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">BrightHome Blog</h1>
          <p className="text-xl">
            Expert tips, guides, and insights on real estate and home services
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Featured"
                className="w-full h-full object-cover"
              />
              <div className="p-8">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured
                </span>
                <h2 className="text-3xl font-bold mb-4">
                  The Ultimate Guide to Selling Your Property Fast
                </h2>
                <p className="text-gray-600 mb-4">
                  Discover proven strategies to sell your property quickly and at the best price. From staging tips to marketing techniques...
                </p>
                <p className="text-gray-500 text-sm mb-4">Feb 8, 2026</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG POSTS GRID */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center mt-12 gap-2">
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
              2
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
              3
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SUBSCRIPTION */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-700 mb-8">
            Get the latest tips, news, and updates delivered to your inbox
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
