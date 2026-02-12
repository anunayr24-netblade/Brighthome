import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const About = () => {
  const [stats, setStats] = useState({ users: 0, providers: 0, services: 0, revenue: 0 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    // Animate counters
    const interval = setInterval(() => {
      setStats(prev => ({
        users: Math.min(prev.users + 1200, 50000),
        providers: Math.min(prev.providers + 85, 5000),
        services: Math.min(prev.services + 150, 1200000),
        revenue: Math.min(prev.revenue + 850000, 45000000)
      }));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats_data = [
    { icon: "👥", label: "Active Users", value: stats.users.toLocaleString(), color: "from-blue-500 to-blue-600" },
    { icon: "🏢", label: "Service Providers", value: stats.providers.toLocaleString(), color: "from-purple-500 to-purple-600" },
    { icon: "✨", label: "Services Completed", value: stats.services.toLocaleString(), color: "from-green-500 to-green-600" },
    { icon: "💰", label: "Value Generated", value: `₹${(stats.revenue / 1000000).toFixed(1)}M`, color: "from-orange-500 to-orange-600" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Property Seller",
      text: "BrightHome made selling my apartment incredibly easy. I got genuine buyers within days!",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Rajesh Patel",
      role: "Service Provider",
      text: "As an electrician, BrightHome has transformed my business. I now get quality leads daily!",
      rating: 5,
      image: "👨‍🔧"
    },
    {
      name: "Ananya Desai",
      role: "Buyer",
      text: "The platform is so transparent and secure. I found my dream home with complete peace of mind.",
      rating: 5,
      image: "👩‍💻"
    }
  ];

  const services_overview = [
    { icon: "🏠", title: "Real Estate", desc: "Buy, Sell & Rent Properties", gradient: "from-blue-400 to-blue-600" },
    { icon: "🛠️", title: "Home Services", desc: "Electricians, Plumbers & More", gradient: "from-orange-400 to-orange-600" },
    { icon: "💼", title: "Jobs", desc: "Employment Opportunities", gradient: "from-green-400 to-green-600" },
    { icon: "🎓", title: "Education", desc: "Courses & Training", gradient: "from-purple-400 to-purple-600" },
    { icon: "🏥", title: "Healthcare", desc: "Medical Services", gradient: "from-red-400 to-red-600" },
    { icon: "🚗", title: "Vehicles", desc: "Buy & Sell Cars", gradient: "from-yellow-400 to-yellow-600" },
  ];

  const features = [
    {
      icon: "🔒",
      title: "100% Verified",
      desc: "All providers are background-checked and verified"
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Match with providers in minutes, not days"
    },
    {
      icon: "💳",
      title: "Secure Payments",
      desc: "Protected transactions with buyer & seller safeguards"
    },
    {
      icon: "📈",
      title: "Business Growth",
      desc: "Scalable opportunities for service providers"
    },
    {
      icon: "🌍",
      title: "Pan-India Reach",
      desc: "Connect with users across the entire country"
    },
    {
      icon: "📱",
      title: "24/7 Support",
      desc: "Dedicated support team always ready to help"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">BrightHome</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              The Ultimate Marketplace Connecting India's Buyers, Sellers & Service Providers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/properties" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg">
                Explore Now
              </Link>
              <Link to="/become-partner" className="bg-yellow-400 text-gray-800 hover:bg-yellow-300 px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg">
                Become a Provider
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 mb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {stats_data.map((stat, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${stat.color} rounded-2xl shadow-2xl p-8 text-white transform hover:scale-105 transition-all animate-slideUpIn group`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slideInLeft">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                BrightHome is revolutionizing how Indians buy, sell, rent properties and access services. We're building a transparent, trustworthy ecosystem where everyone can thrive – from first-time homebuyers to seasoned entrepreneurs.
              </p>
              <ul className="space-y-4">
                {[
                  "Eliminate intermediaries and reduce transaction costs",
                  "Build trust through verified profiles and transparent ratings",
                  "Empower service providers with technology and steady income",
                  "Create seamless connections between opportunity seekers and providers"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="text-2xl text-blue-600 group-hover:scale-125 transition-transform">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Visual */}
            <div className="animate-slideInRight relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl p-12 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 text-white text-center">
                  {[
                    { num: "2M+", label: "Monthly Visitors" },
                    { num: "50K+", label: "Active Providers" },
                    { num: "100%", label: "Verified" },
                    { num: "24/7", label: "Support" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all">
                      <div className="text-3xl font-bold">{item.num}</div>
                      <div className="text-sm opacity-90">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-gray-600 text-lg">Comprehensive solutions across multiple categories</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services_overview.map((service, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all animate-scaleIn group`}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why BrightHome?</h2>
            <p className="text-gray-600 text-lg">The platform that truly transforms lives</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-detailBounce border border-gray-100 hover:border-blue-300 group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Opportunities Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Growth Opportunities</h2>
            <p className="text-gray-600 text-lg">Multiple ways to earn and scale your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "For Service Providers",
                points: ["Consistent lead flow", "Weekly payments", "Performance bonuses", "Featured listings"],
                cta: "Start Earning",
                link: "/become-partner",
                gradient: "from-green-500 to-emerald-600"
              },
              {
                icon: "💰",
                title: "For Sellers",
                points: ["Maximum visibility", "Direct buyer access", "Zero hidden fees", "Secure transactions"],
                cta: "List Property",
                link: "/post-listing",
                gradient: "from-orange-500 to-red-600"
              },
              {
                icon: "🏆",
                title: "For Partners",
                points: ["Commission structure", "Marketing support", "Dedicated account manager", "Growth incentives"],
                cta: "Contact Us",
                link: "/contact",
                gradient: "from-purple-500 to-pink-600"
              }
            ].map((opportunity, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${opportunity.gradient} rounded-2xl shadow-xl p-8 text-white transform hover:scale-105 transition-all animate-slideUpIn hover:shadow-2xl`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="text-5xl mb-4">{opportunity.icon}</div>
                <h3 className="text-2xl font-bold mb-6">{opportunity.title}</h3>
                <ul className="space-y-3 mb-8">
                  {opportunity.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-center gap-3">
                      <span className="text-lg">✨</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={opportunity.link}
                  className="block text-center bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-110 shadow-lg"
                >
                  {opportunity.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-300 text-lg">Real people, real transformations</p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-500 ${
                  idx === activeTestimonial
                    ? "opacity-100 transform scale-100"
                    : "opacity-0 transform scale-95 pointer-events-none"
                }`}
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl">{testimonial.image}</div>
                    <div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-white/90">{testimonial.role}</div>
                      <div className="text-yellow-300">{'⭐'.repeat(testimonial.rating)}</div>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}

            {/* Indicators */}
            <div className="flex justify-center gap-3 mt-32">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === activeTestimonial
                      ? "bg-yellow-400 w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trust & Safety First</h2>
            <p className="text-gray-600 text-lg">Enterprise-grade security for your peace of mind</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slideInLeft">
              <div className="space-y-6">
                {[
                  { icon: "🔐", title: "Encrypted Transactions", desc: "End-to-end encryption on all payments" },
                  { icon: "✅", title: "Verified Profiles", desc: "Background checks for all service providers" },
                  { icon: "🛡️", title: "Buyer Protection", desc: "Money-back guarantee if unsatisfied" },
                  { icon: "⚖️", title: "Dispute Resolution", desc: "Fair arbitration system" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
                    <div className="text-4xl flex-shrink-0 group-hover:scale-125 transition-transform">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slideInRight">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-12 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-8">By The Numbers</h3>
                <div className="space-y-6 text-lg">
                  <div className="flex justify-between items-center pb-4 border-b border-white/30">
                    <span>Verified Transactions</span>
                    <span className="text-2xl font-bold">100%</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/30">
                    <span>Customer Satisfaction</span>
                    <span className="text-2xl font-bold">4.8/5</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/30">
                    <span>Resolution Time</span>
                    <span className="text-2xl font-bold">24hrs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fraud Rate</span>
                    <span className="text-2xl font-bold">&lt;0.01%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">From concept to market leader</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { year: "2020", title: "Founded", desc: "BrightHome started with a vision to simplify property transactions in India" },
              { year: "2021", title: "Rapid Growth", desc: "Expanded to 5 major cities across India with 10,000+ active users" },
              { year: "2022", title: "Service Integration", desc: "Launched home services marketplace covering 50+ service categories" },
              { year: "2023", title: "Market Leader", desc: "Became the go-to platform with 100,000+ monthly active users" },
              { year: "2024", title: "Pan-India", desc: "Expanded nationwide reach with presence in 25+ states and UTs" },
              { year: "2025", title: "Hyper-Growth", desc: "Targeting 5M users and 500K+ service providers" }
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-8 mb-12 animate-slideUpIn" style={{animationDelay: `${idx * 100}ms`}}>
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center text-white font-bold text-xl shadow-lg hover:scale-110 transition-transform">
                    {milestone.year}
                  </div>
                  {idx < 5 && <div className="w-1 h-20 bg-blue-300 mt-4"></div>}
                </div>
                <div className="flex-1 pt-2 animate-slideInRight" style={{animationDelay: `${idx * 100 + 50}ms`}}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-lg">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-gray-600 text-lg">Industry-leading excellence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🏆", title: "Best Marketplace", subtitle: "2024" },
              { icon: "⭐", title: "Top Rated Platform", subtitle: "4.8/5 Stars" },
              { icon: "🚀", title: "Fastest Growing", subtitle: "2024" },
              { icon: "👑", title: "Most Trusted", subtitle: "User Choice" }
            ].map((award, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transform hover:scale-105 transition-all animate-bounceIn"
                style={{animationDelay: `${idx * 150}ms`}}
              >
                <div className="text-6xl mb-4">{award.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-blue-600 font-semibold">{award.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-gray-600 text-lg">Partnerships that power growth</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            {['🏢', '💼', '🏭', '🏛️', '🌟'].map((brand, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-2xl p-8 text-6xl text-center hover:bg-blue-50 transition-all transform hover:scale-110 animate-scaleIn"
                style={{animationDelay: `${idx * 80}ms`}}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 text-lg">Passionate innovators building the future</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { emoji: "👨‍💼", name: "Amit Kumar", role: "Founder & CEO", speciality: "Vision & Strategy" },
              { emoji: "👩‍💻", name: "Priya Sharma", role: "CTO", speciality: "Technology" },
              { emoji: "👨‍📊", name: "Rajesh Gupta", role: "COO", speciality: "Operations" },
              { emoji: "👩‍🔬", name: "Anita Desai", role: "Head of Growth", speciality: "Business Growth" }
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all animate-slideUpIn border border-gray-100 hover:border-blue-300 group"
                style={{animationDelay: `${idx * 100}ms`}}
              >
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">{member.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.speciality}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Join Our Growing Team</h3>
            <p className="text-white/90 text-lg mb-6">We're looking for passionate individuals to help us transform India's marketplace</p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
            >
              View Careers →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How do I get started?",
                a: "Simply download the BrightHome app, create an account, and browse listings or post your service/property."
              },
              {
                q: "Is BrightHome really free?",
                a: "Yes! Browsing and listing is free. We only charge commission on successful transactions."
              },
              {
                q: "How can I verify my identity?",
                a: "Our verification process takes 24-48 hours and requires basic KYC documents for security."
              },
              {
                q: "What if I face any issues?",
                a: "Our 24/7 support team is here to help. Contact us via app chat, email, or phone anytime."
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-xl shadow-md animate-slideUpIn"
                style={{animationDelay: `${idx * 100}ms`}}
              >
                <summary className="cursor-pointer p-6 font-bold text-gray-900 hover:text-blue-600 transition flex justify-between items-center">
                  {faq.q}
                  <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 border-t">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl animate-pulse top-0 left-1/4"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl animate-pulse bottom-0 right-1/4" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fadeInUp">Ready to Transform Your Future?</h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto animate-fadeInUp" style={{animationDelay: "100ms"}}>
            Join millions of Indians who are already part of the BrightHome revolution. Whether buying, selling, or providing services - your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{animationDelay: "200ms"}}>
            <Link to="/properties" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-110 shadow-2xl">
              Explore Now
            </Link>
            <Link to="/services" className="bg-yellow-400 text-gray-800 hover:bg-yellow-300 px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-110 shadow-2xl">
              Browse Services
            </Link>
            <Link to="/become-partner" className="border-3 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-110">
              Become a Provider
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-white/30">
            <p className="text-white/80 mb-4">Have questions? We're here to help!</p>
            <Link to="/contact" className="text-yellow-300 hover:text-yellow-100 font-bold transition-colors">
              Contact our support team →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
