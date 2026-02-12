import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Header from "../components/common/Header";
import PropertyCard from "../components/property/PropertyCard";
import ServiceCard from "../components/services/ServiceCard";
import Footer from "../components/common/Footer";

// Animated Counter Component
const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count.toLocaleString()}</>;
};

const Home = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* Content wrapper */}
      <div className="relative z-10">
        <Header />

      {/* HERO SECTION */}
      <section className="relative text-white overflow-hidden h-[50vh]">
        {/* Image Carousel Background */}
        <div className="absolute inset-0 w-full h-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop" 
                alt="Modern Properties"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=600&fit=crop" 
                alt="Professional Services"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=600&fit=crop" 
                alt="Luxury Properties"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img 
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=600&fit=crop" 
                alt="Home Services"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=600&fit=crop" 
                alt="Real Estate"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* TEXT CONTENT SECTION - Below Carousel */}
      <section className="py-16 px-6 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold leading-tight animate-headingFadeIn bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Your Complete Marketplace for Real Estate, Services & Opportunities
          </h1>
          <p className="text-2xl text-slate-700 font-bold mb-8">
            Discover, Connect, and Transact — Everything You Need in One Trusted Platform
          </p>
          
          {/* Tagline Section */}
          <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg p-6 w-fit mx-auto mb-12 shadow-lg">
            <p className="text-3xl font-bold text-white">
              5000+ Verified Properties & Services | Trusted by Thousands
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 text-red-600"><AnimatedCounter target={1000} /> +</div>
              <div className="text-gray-700 text-sm font-semibold">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 text-green-600"><AnimatedCounter target={100} /> +</div>
              <div className="text-gray-700 text-sm font-semibold">Service Providers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 text-yellow-600"><AnimatedCounter target={50} /> +</div>
              <div className="text-gray-700 text-sm font-semibold">Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 text-red-500"><AnimatedCounter target={5000} /> +</div>
              <div className="text-gray-700 text-sm font-semibold">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 backdrop-blur-sm border border-blue-400/20 rounded-3xl mx-4 my-8 animate-fadeInUp">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp animation-delay-100">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Featured Picks
            </h2>
            <p className="text-xl text-gray-100">
              Handpicked <span className="font-bold text-blue-200">Premium Properties</span>, <span className="font-bold text-emerald-200">Professional Services</span>, and <span className="font-bold text-cyan-200">Trusted Partners</span> verified for excellence, reliability, and exceptional customer satisfaction
            </p>
          </div>

          {/* BRIGHTHOME FEATURED - CAROUSEL WITH 4 GRIDS (A, B, C, D) */}
          <div className="mb-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              loop={true}
              className="rounded-2xl px-4"
              spaceBetween={30}
            >
              {/* GRID A - PROPERTIES */}
              <SwiperSlide>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
                  {/* Card A1 - Luxury Villa */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600" 
                      alt="Luxury Villa"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-red-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Featured
                      </span>
                      <h4 className="text-xl font-bold mb-3">Luxury Villa with Pool</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Boring Road, Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-red-400">₹2.5 Crore</p>
                          <p className="text-xs text-gray-300">4 BHK • 3,500 sq ft</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card A2 - Modern Apartment */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600" 
                      alt="Modern Apartment"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-blue-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Popular
                      </span>
                      <h4 className="text-xl font-bold mb-3">Modern Sky-Rise Apartment</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Kankarbagh, Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-blue-400">₹85 Lakhs</p>
                          <p className="text-xs text-gray-300">3 BHK • 1,650 sq ft</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card A3 - Penthouse */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600" 
                      alt="Penthouse"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-purple-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Premium
                      </span>
                      <h4 className="text-xl font-bold mb-3">Luxury Penthouse</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        New Market, Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-purple-400">₹3.8 Crore</p>
                          <p className="text-xs text-gray-300">4 BHK • 4,200 sq ft</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card A4 - Studio */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=600" 
                      alt="Studio Apartment"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-green-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Best Deal
                      </span>
                      <h4 className="text-xl font-bold mb-3">Cozy Studio Flat</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Rajendra Nagar, Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-green-400">₹30 Lakhs</p>
                          <p className="text-xs text-gray-300">1 BHK • 850 sq ft</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card A5 - Townhouse */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600" 
                      alt="Townhouse"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-orange-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        New
                      </span>
                      <h4 className="text-xl font-bold mb-3">Modern Townhouse</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Govind Mitra Road, Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-orange-400">₹55 Lakhs</p>
                          <p className="text-xs text-gray-300">2 BHK • 1,200 sq ft</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card A6 - Office */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1512917774080-9991f1c93c7f?w=600" 
                      alt="Office Space"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Commercial
                      </span>
                      <h4 className="text-xl font-bold mb-3">Premium Office Space</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        CK Road, Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-indigo-400">₹50 Lakhs</p>
                          <p className="text-xs text-gray-300">Commercial • 1,000 sq ft</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* GRID B - SERVICES */}
              <SwiperSlide>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
                  {/* Card B1 - Home Cleaning */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600" 
                      alt="Home Cleaning"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-cyan-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Popular
                      </span>
                      <h4 className="text-xl font-bold mb-3">Professional Home Cleaning</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-cyan-400">₹5,000/mo</p>
                          <p className="text-xs text-gray-300">Weekly Service</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card B2 - Electrician */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600" 
                      alt="Electrician"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-yellow-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Trusted
                      </span>
                      <h4 className="text-xl font-bold mb-3">Expert Electrician Services</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Patna
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-bold text-yellow-400">₹500/hour</p>
                          <p className="text-xs text-gray-300">24/7 Available</p>
                        </div>
                        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card B3 - Plumbing */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600" 
                      alt="Plumbing"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-blue-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Certified
                      </span>
                      <h4 className="text-xl font-bold mb-3">Professional Plumbing</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-blue-400">₹1,000+</p>
                          <p className="text-xs text-gray-300">Emergency Service</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card B4 - Painting */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1581092918092-412a2471b5f0?w=600" 
                      alt="Painting Services"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-pink-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Featured
                      </span>
                      <h4 className="text-xl font-bold mb-3">Expert Painting Services</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-pink-400">₹20/sqft</p>
                          <p className="text-xs text-gray-300">Interior & Exterior</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card B5 - Carpenter */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1572365992253-3cb3e56dd362?w=600" 
                      alt="Carpentry"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-amber-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Premium
                      </span>
                      <h4 className="text-xl font-bold mb-3">Professional Carpentry</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-amber-400">₹300/hour</p>
                          <p className="text-xs text-gray-300">Custom Designs</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card B6 - AC Repair */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600" 
                      alt="AC Repair"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-sky-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Best Price
                      </span>
                      <h4 className="text-xl font-bold mb-3">AC Repair & Maintenance</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-sky-400">₹800+</p>
                          <p className="text-xs text-gray-300">Same Day Service</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* GRID C - PARTNERS */}
              <SwiperSlide>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
                  {/* Card C1 - Partner 1 */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
                      alt="Prime Realty"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-red-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Top Partner
                      </span>
                      <h4 className="text-xl font-bold mb-3">Prime Realty Group</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-red-400">⭐ 4.9/5</p>
                          <p className="text-xs text-gray-300">500+ Sales</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          Visit
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card C2 - Partner 2 */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
                      alt="BuildCorp"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-blue-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Verified
                      </span>
                      <h4 className="text-xl font-bold mb-3">BuildCorp Developments</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-blue-400">⭐ 4.8/5</p>
                          <p className="text-xs text-gray-300">650+ Projects</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          Visit
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card C3 - Partner 3 */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
                      alt="DesignStudio"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-purple-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Exclusive
                      </span>
                      <h4 className="text-xl font-bold mb-3">Design Studio Plus</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-purple-400">⭐ 4.9/5</p>
                          <p className="text-xs text-gray-300">300+ Designs</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          Visit
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card C4 - Partner 4 */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
                      alt="TechSolutions"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-green-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Certified
                      </span>
                      <h4 className="text-xl font-bold mb-3">Tech Solutions India</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-green-400">⭐ 4.7/5</p>
                          <p className="text-xs text-gray-300">200+ Clients</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          Visit
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card C5 - Partner 5 */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
                      alt="ConsultPro"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-orange-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Partner
                      </span>
                      <h4 className="text-xl font-bold mb-3">ConsultPro Marketing</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-orange-400">⭐ 4.8/5</p>
                          <p className="text-xs text-gray-300">100+ Campaigns</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          Visit
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card C6 - Partner 6 */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
                      alt="InnovateLabs"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Premium
                      </span>
                      <h4 className="text-xl font-bold mb-3">InnovateLabs Tech</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-indigo-400">⭐ 4.9/5</p>
                          <p className="text-xs text-gray-300">150+ Projects</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          Visit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* GRID D - TRENDING THIS WEEK */}
              <SwiperSlide>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
                  {/* Card D1 - Independent House */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600" 
                      alt="Independent House"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-green-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        For Sale
                      </span>
                      <h4 className="text-xl font-bold mb-3">Independent House with Garden</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Boring Road, Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-green-400">₹1.2 Crore</p>
                          <p className="text-xs text-gray-300">4 BHK • 2,200 sq ft</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card D2 - 2 BHK Apartment */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600" 
                      alt="Modern Apartment"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-blue-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        For Rent
                      </span>
                      <h4 className="text-xl font-bold mb-3">2 BHK Apartment</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Kankarbagh, Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-blue-400">₹15K/mo</p>
                          <p className="text-xs text-gray-300">2 BHK • 950 sq ft</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card D3 - Studio Apartment */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600" 
                      alt="Studio Apartment"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-orange-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        New
                      </span>
                      <h4 className="text-xl font-bold mb-3">Studio Apartment</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Rajendra Nagar, Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-orange-400">₹45 Lakhs</p>
                          <p className="text-xs text-gray-300">Studio • 500 sq ft</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card D4 - Duplex */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600" 
                      alt="Duplex"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-purple-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Premium
                      </span>
                      <h4 className="text-xl font-bold mb-3">3 BHK Duplex</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Govind Mitra Road, Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-purple-400">₹95 Lakhs</p>
                          <p className="text-xs text-gray-300">3 BHK • 1,400 sq ft</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card D5 - Villa */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600" 
                      alt="Villa"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-red-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Luxury
                      </span>
                      <h4 className="text-xl font-bold mb-3">Luxury Villa</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        New Market, Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-red-400">₹1.8 Crore</p>
                          <p className="text-xs text-gray-300">4 BHK • 3,000 sq ft</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card D6 - Commercial */}
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600" 
                      alt="Commercial Space"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="bg-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                        Commercial
                      </span>
                      <h4 className="text-xl font-bold mb-3">Commercial Complex</h4>
                      <p className="text-gray-200 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        CK Road, Patna
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-bold text-indigo-400">₹2 Crore+</p>
                          <p className="text-xs text-gray-300">Commercial • 2,500 sq ft</p>
                        </div>
                        <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* POPULAR SERVICES & OUR PARTNERS */}
      {/* PROPERTIES CAROUSEL SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 backdrop-blur-sm border border-emerald-400/20 rounded-3xl mx-4 my-8 animate-fadeInUp">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp animation-delay-100">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Smart Property Search
            </h2>
            <p className="text-xl text-gray-100">
              Discover verified real estate listings with detailed insights, virtual tours, and instant seller connections — all tailored to your location and preferences
            </p>
          </div>

          {/* PROPERTIES CAROUSEL */}
          <div className="mb-16 relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              spaceBetween={24}
              className="!pb-12"
            >
              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=600" 
                    alt="Modern Apartment"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🏢</div>
                    <h3 className="text-2xl font-bold mb-2">Modern Apartment</h3>
                    <p className="text-gray-200 mb-3">2 BHK, Prime Location</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.8
                        </span>
                        <span className="flex items-center gap-1">
                          <span>💰</span> $45K/month
                        </span>
                      </div>
                      <Link 
                        to="/properties"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c93c7f?w=600" 
                    alt="Luxury Villa"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🏡</div>
                    <h3 className="text-2xl font-bold mb-2">Luxury Villa</h3>
                    <p className="text-gray-200 mb-3">3 BHK with Garden</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.9
                        </span>
                        <span className="flex items-center gap-1">
                          <span>💰</span> $90K/month
                        </span>
                      </div>
                      <Link 
                        to="/properties"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600" 
                    alt="Urban Penthouse"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🏙️</div>
                    <h3 className="text-2xl font-bold mb-2">Penthouse</h3>
                    <p className="text-gray-200 mb-3">4 BHK, City View</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.9
                        </span>
                        <span className="flex items-center gap-1">
                          <span>💰</span> $75K/month
                        </span>
                      </div>
                      <Link 
                        to="/properties"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600" 
                    alt="Plumber"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🏘️</div>
                    <h3 className="text-2xl font-bold mb-2">Townhouse</h3>
                    <p className="text-gray-200 mb-3">2.5 BHK Community</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.6
                        </span>
                        <span className="flex items-center gap-1">
                          <span>💰</span> $55K/month
                        </span>
                      </div>
                      <Link 
                        to="/properties"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600" 
                    alt="Studio Apartment"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🏠</div>
                    <h3 className="text-2xl font-bold mb-2">Studio Flat</h3>
                    <p className="text-gray-200 mb-3">1 BHK Compact</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.8
                        </span>
                        <span className="flex items-center gap-1">
                          <span>💰</span> $30K/month
                        </span>
                      </div>
                      <Link 
                        to="/properties"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1576514634519-c7f7fcf73aea?w=600" 
                    alt="Commercial Space"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🏢</div>
                    <h3 className="text-2xl font-bold mb-2">Office Space</h3>
                    <p className="text-gray-200 mb-3">1000 sqft Commercial</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.9
                        </span>
                        <span className="flex items-center gap-1">
                          <span>💰</span> $50K/month
                        </span>
                      </div>
                      <Link 
                        to="/properties"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* WHITE BORDER DIVIDER */}
      <div className="my-8 mx-4 border-t-2 border-white/30"></div>

      {/* PARTNERS CAROUSEL SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-800/40 via-purple-900/30 to-slate-800/40 backdrop-blur-sm border border-white/10 rounded-3xl mx-4 my-8 animate-fadeInUp">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp animation-delay-100">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
              BrightHome Partners
            </h2>
            <p className="text-xl text-gray-200">
              Trusted partner agencies and businesses collaborating with us
            </p>
          </div>

          {/* PARTNERS CAROUSEL */}
          <div className="mb-16 relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              spaceBetween={24}
              className="!pb-12"
            >
              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
                    alt="Real Estate Agency"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🏬</div>
                    <h3 className="text-2xl font-bold mb-2">Prime Realty</h3>
                    <p className="text-gray-200 mb-3">Leading real estate partner</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.9
                        </span>
                        <span className="flex items-center gap-1">
                          <span>🏆</span> Premium
                        </span>
                      </div>
                      <Link 
                        to="/properties"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
                    alt="Construction Partner"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🏗️</div>
                    <h3 className="text-2xl font-bold mb-2">BuildCorp</h3>
                    <p className="text-gray-200 mb-3">Professional construction services</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.8
                        </span>
                        <span className="flex items-center gap-1">
                          <span>🏆</span> Certified
                        </span>
                      </div>
                      <Link 
                        to="/become-partner"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
                    alt="Interior Partner"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🎨</div>
                    <h3 className="text-2xl font-bold mb-2">DesignStudio</h3>
                    <p className="text-gray-200 mb-3">Premium interior design partner</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.9
                        </span>
                        <span className="flex items-center gap-1">
                          <span>🏆</span> Award Winner
                        </span>
                      </div>
                      <Link 
                        to="/become-partner"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
                    alt="Moving Services Partner"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🚚</div>
                    <h3 className="text-2xl font-bold mb-2">QuickMove</h3>
                    <p className="text-gray-200 mb-3">Fast & reliable moving partner</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.7
                        </span>
                        <span className="flex items-center gap-1">
                          <span>🏆</span> Trusted
                        </span>
                      </div>
                      <Link 
                        to="/become-partner"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
                    alt="Logistics Partner"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">📦</div>
                    <h3 className="text-2xl font-bold mb-2">LogisticHub</h3>
                    <p className="text-gray-200 mb-3">Delivery & logistics partner</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.8
                        </span>
                        <span className="flex items-center gap-1">
                          <span>🏆</span> Reliable
                        </span>
                      </div>
                      <Link 
                        to="/become-partner"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
                    alt="Cleaning Partner"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🧹</div>
                    <h3 className="text-2xl font-bold mb-2">CleanPro</h3>
                    <p className="text-gray-200 mb-3">Professional cleaning partner</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.8
                        </span>
                        <span className="flex items-center gap-1">
                          <span>🏆</span> Verified
                        </span>
                      </div>
                      <Link 
                        to="/become-partner"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* WHITE BORDER DIVIDER */}
      <div className="my-8 mx-4 border-t-2 border-white/30"></div>

      {/* SERVICES CAROUSEL SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-800/40 via-purple-900/30 to-slate-800/40 backdrop-blur-sm border border-white/10 rounded-3xl mx-4 my-8 animate-fadeInUp">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp animation-delay-100">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
              BrightHome Services
            </h2>
            <p className="text-xl text-gray-200">
              Professional services and trusted experts for all your needs
            </p>
          </div>

          {/* SERVICES CAROUSEL */}
          <div className="mb-16 relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              spaceBetween={24}
              className="!pb-12"
            >
              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600" 
                    alt="Packers & Movers"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">📦</div>
                    <h3 className="text-2xl font-bold mb-2">Packers & Movers</h3>
                    <p className="text-gray-200 mb-3">Professional moving and packing services</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.8
                        </span>
                        <span className="flex items-center gap-1">
                          <span>👥</span> 150+ pros
                        </span>
                      </div>
                      <Link 
                        to="/services/packers-movers"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600" 
                    alt="Painting Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🎨</div>
                    <h3 className="text-2xl font-bold mb-2">Painting Services</h3>
                    <p className="text-gray-200 mb-3">Expert interior and exterior painting</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.7
                        </span>
                        <span className="flex items-center gap-1">
                          <span>👥</span> 120+ pros
                        </span>
                      </div>
                      <Link 
                        to="/services/painting"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600" 
                    alt="Electrician"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">⚡</div>
                    <h3 className="text-2xl font-bold mb-2">Electrician</h3>
                    <p className="text-gray-200 mb-3">Licensed electricians for all needs</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.9
                        </span>
                        <span className="flex items-center gap-1">
                          <span>👥</span> 200+ pros
                        </span>
                      </div>
                      <Link 
                        to="/services/electrician"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600" 
                    alt="Plumber"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🔧</div>
                    <h3 className="text-2xl font-bold mb-2">Plumbing Services</h3>
                    <p className="text-gray-200 mb-3">24/7 plumbing repair services</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.6
                        </span>
                        <span className="flex items-center gap-1">
                          <span>👥</span> 180+ pros
                        </span>
                      </div>
                      <Link 
                        to="/services/plumber"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1556910637-b57fbf28e725?w=600" 
                    alt="Cleaning"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🧹</div>
                    <h3 className="text-2xl font-bold mb-2">House Cleaning</h3>
                    <p className="text-gray-200 mb-3">Professional home cleaning services</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.8
                        </span>
                        <span className="flex items-center gap-1">
                          <span>👥</span> 220+ pros
                        </span>
                      </div>
                      <Link 
                        to="/services/house-cleaning"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600" 
                    alt="Interior Design"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-5xl mb-3">🏠</div>
                    <h3 className="text-2xl font-bold mb-2">Interior Designer</h3>
                    <p className="text-gray-200 mb-3">Transform your living space</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span> 4.9
                        </span>
                        <span className="flex items-center gap-1">
                          <span>👥</span> 60+ pros
                        </span>
                      </div>
                      <Link 
                        to="/services/interior-designer"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* WHITE BORDER DIVIDER */}
      <div className="my-8 mx-4 border-t-2 border-white/30"></div>

      {/* ALL SERVICES SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Expert Services at Your Fingertips
            </h2>
            <p className="text-xl text-slate-700">
              Connect with verified professionals for home maintenance, repairs, and improvements — vetted for quality and reliability
            </p>
          </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {/* Service Category Cards */}
              <div className="flex flex-col">
                <Link 
                  to="/services/carpenter"
                  className="relative h-60 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all mb-4"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400" 
                    alt="Carpenter"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                <h4 className="text-center font-bold text-gray-900 text-sm">Carpenter</h4>
              </div>

              <div className="flex flex-col">
                <Link 
                  to="/services/pest-control"
                  className="relative h-60 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all mb-4"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400" 
                    alt="Pest Control"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                <h4 className="text-center font-bold text-gray-900 text-sm">Pest Control</h4>
              </div>

              <div className="flex flex-col">
                <Link 
                  to="/services/ac-repair"
                  className="relative h-60 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all mb-4"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400" 
                    alt="AC Repair"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                <h4 className="text-center font-bold text-gray-900 text-sm">AC Repair</h4>
              </div>

              <div className="flex flex-col">
                <Link 
                  to="/services/home-automation"
                  className="relative h-60 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all mb-4"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1558002038-1055907df827?w=400" 
                    alt="Smart Home"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                <h4 className="text-center font-bold text-gray-900 text-sm">Smart Home</h4>
              </div>

              <div className="flex flex-col">
                <Link 
                  to="/services/garden-maintenance"
                  className="relative h-60 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all mb-4"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400" 
                    alt="Gardening"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                <h4 className="text-center font-bold text-gray-900 text-sm">Gardening</h4>
              </div>

              <div className="flex flex-col">
                <Link 
                  to="/services/security-systems"
                  className="relative h-60 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all mb-4"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400" 
                    alt="Security"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                <h4 className="text-center font-bold text-gray-900 text-sm">Security</h4>
              </div>
            </div>
        </div>
      </section>

      {/* WHY BRIGHTHOME */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 backdrop-blur-sm border border-purple-400/20 rounded-3xl mx-4 my-8 animate-fadeInUp">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent animate-fadeInUp animation-delay-100">
            Why Choose BrightHome
          </h2>
          <p className="text-center text-gray-100 mb-20 text-lg animate-fadeInUp animation-delay-200">
            Discover the platform trusted by thousands for real estate, services, and opportunities
          </p>

          {/* Card 1 - Image Left */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2">
              <img 
                src="https://via.placeholder.com/500x400?text=Platform+Security" 
                alt="Trusted Platform" 
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
              />
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-10 rounded-2xl shadow-xl border border-yellow-200">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <div className="text-4xl">🏆</div>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Platform You Can Trust</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  At BrightHome, trust is our foundation. Every listing undergoes rigorous verification to ensure 100% authenticity and transparency. We've built advanced screening mechanisms to identify and filter fraudulent listings, protecting both buyers and sellers from scams. Our dedicated trust team monitors thousands of transactions daily, ensuring community safety.

                  We believe that successful real estate transactions and service connections begin with verified information. Each property listing includes comprehensive documentation, ownership verification, and multi-point validation. Service professionals are vetted through background checks, credential verification, and customer reviews. Whether you're buying, selling, renting, or hiring services, you can proceed confidently knowing every party has been thoroughly vetted.

                  Our commitment to transparency means you'll always know exactly what you're getting. We display seller credibility scores, verified reviews from past transactions, and complete listing histories. With over 10,000 verified properties and professionals, BrightHome maintains the highest standards of integrity. Your peace of mind is our priority.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Image Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2">
              <img 
                src="https://via.placeholder.com/500x400?text=Local+Community" 
                alt="Local Community" 
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
              />
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-2xl shadow-xl border border-green-200">
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <div className="text-4xl">📍</div>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Local Community First</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  We champion the power of locality. BrightHome connects you with people and services in your neighborhood, creating vibrant local marketplaces. Whether you're searching for a property in a specific area or finding skilled professionals nearby, our location-based algorithms ensure you discover exactly what matters to you.

                  Our platform understands that real estate and services are inherently local. When you're buying a home, you want to know about the neighborhood—local schools, transportation, community vibe. When you need repairs or services, proximity matters for convenience and cost-effectiveness. BrightHome delivers hyper-local results with real-time availability, showing you what's available right now in your area.

                  We've built community features that foster connections between neighbors. Browse profiles of local professionals with ratings from your area, connect with sellers who understand your neighborhood's market, and tap into community insights. Our platform creates networks where locals help locals. By prioritizing community over corporation, we've built something that actually serves neighborhoods—not just transactions.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Image Left */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://via.placeholder.com/500x400?text=Simple+Rewarding" 
                alt="Simple & Rewarding" 
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
              />
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-2xl shadow-xl border border-blue-200">
                <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <div className="text-4xl">💡</div>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Simple & Rewarding</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  Why should earning be complicated? BrightHome eliminates friction from listing to transaction. Post a property or service in seconds—no confusing forms, no hidden fees, no unnecessary complexity. Our streamlined interface guides you through the process intuitively, whether you're a first-time seller or a seasoned professional.

                  Once your listing is live, reach thousands of qualified buyers and clients instantly. Our intelligent matching system connects you with genuinely interested parties, reducing browsing time and speeding up negotiations. The result? Higher conversion rates and faster transactions. Our clients report closing deals 40% faster on BrightHome compared to traditional platforms.

                  Earning on BrightHome is transparent and rewarding. Clear commission structures, instant payments upon transaction completion, and no surprise fees. Build your reputation through verified reviews and increase your earning potential. Thousands of our partners have turned BrightHome into significant income streams—some earning ₹50,000+ monthly. The more you grow, the more benefits you unlock, including priority listings and dedicated support. Your growth is our success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border border-slate-600/30 rounded-3xl mx-4 my-8">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-slate-100 to-blue-200 bg-clip-text text-transparent animate-fadeInUp">
            Get Started in 3 Easy Steps
          </h2>
          <p className="text-center text-gray-300 mb-16 text-lg animate-fadeInUp animation-delay-100">
            From discovery to completion — we make the entire process simple and transparent
          </p>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center relative group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              {/* Connecting line */}
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 -z-0"></div>
              
              <h3 className="text-2xl font-bold mb-4 text-white animate-typing typing-delay-1" style={{ animationIterationCount: '1' }}>
                Create Your Profile
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Sign up in seconds and create a detailed listing with photos, descriptions, pricing, and availability
              </p>
            </div>

            <div className="text-center relative group">
              <div className="bg-gradient-to-br from-green-500 to-green-700 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              {/* Connecting line */}
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-500 to-green-300 -z-0"></div>
              
              <h3 className="text-2xl font-bold mb-4 text-white animate-typing typing-delay-2" style={{ animationIterationCount: '1' }}>
                Connect Instantly
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Receive inquiries from interested buyers and negotiate directly through our secure messaging system
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white animate-typing typing-delay-3" style={{ animationIterationCount: '1' }}>
                Close & Build Reputation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Complete transactions securely and build your profile with verified reviews and ratings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden rounded-3xl mx-4 my-8">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Journey?
          </h2>
          <p className="text-2xl mb-12 text-emerald-50">
            Join thousands of successful sellers, renters, and service professionals earning daily on BrightHome
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              to="/post-listing"
              className="px-10 py-5 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              📝 Post a Listing
            </Link>
            <Link
              to="/become-partner"
              className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all font-bold text-lg shadow-2xl transform hover:scale-105"
            >
              🤝 Become a Partner
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      </div>
    </div>
  );
};

export default Home;
