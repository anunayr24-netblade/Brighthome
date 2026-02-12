import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const Education = () => {
  const courses = [
    {
      title: "👨‍🏫 Home Tutors",
      description: "Personalized tutoring sessions",
      count: "3,450+ listings",
      image: "https://images.unsplash.com/photo-1427504494785-cacb3e4b0f96?w=400&h=250&fit=crop",
    },
    {
      title: "📚 Coaching Classes",
      description: "Group classes for exams & skills",
      count: "2,890+ listings",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=250&fit=crop",
    },
    {
      title: "💻 Computer Training",
      description: "Programming, IT skills courses",
      count: "4,120+ listings",
      image: "https://images.unsplash.com/photo-1517694710202-14dd9538aa97?w=400&h=250&fit=crop",
    },
    {
      title: "🎯 Competitive Exams",
      description: "JEE, NEET, CAT, UPSC prep",
      count: "1,890+ listings",
      image: "https://images.unsplash.com/photo-1427504494785-cacb3e4b0f96?w=400&h=250&fit=crop",
    },
    {
      title: "🏆 Skill Courses",
      description: "Photography, design, writing",
      count: "2,340+ listings",
      image: "https://images.unsplash.com/photo-1516575080604-28e1fb716f23?w=400&h=250&fit=crop",
    },
    {
      title: "🗣️ Language Classes",
      description: "English, speaking, foreign languages",
      count: "1,670+ listings",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b0b7f?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-indigo-600 to-blue-700 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1427504494785-cacb3e4b0f96?w=1200&h=400&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">🎓 Education & Learning</h1>
          <p className="text-2xl text-indigo-100 mb-8">
            Learn new skills and get expert guidance
          </p>
          <Link
            to="/post-listing"
            className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition w-fit"
          >
            Start Teaching
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Active Tutors", value: "12,360+" },
            { label: "Students Taught", value: "250,000+" },
            { label: "Courses Available", value: "15,000+" },
            { label: "Satisfaction Rate", value: "99.1%" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
              <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Learning Options</h2>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
              12,360+ tutors
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <Link
                key={idx}
                to="/post-listing"
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.count}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{course.description}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition text-sm">
                    Explore
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Learn on BrightHome?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "✓", title: "Verified Tutors", desc: "Qualified & experienced teachers" },
              { icon: "💰", title: "Flexible Pricing", desc: "Affordable rates for everyone" },
              { icon: "🎯", title: "Personalized", desc: "One-on-one or group sessions" },
              { icon: "📚", title: "Curriculum", desc: "Customized learning plans" },
              { icon: "📱", title: "Easy Scheduling", desc: "Book classes online" },
              { icon: "🏆", title: "Results", desc: "Proven learning outcomes" },
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
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Learn or Teach?</h3>
          <p className="text-indigo-100 mb-8 text-lg">
            Join 250,000+ students & tutors on BrightHome Academy
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/post-listing"
              className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Teaching
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
              Find a Tutor
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Education;
