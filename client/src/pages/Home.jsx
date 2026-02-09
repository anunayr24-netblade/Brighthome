import { useState } from "react";
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
import PropertyVideo from "../assets/videos/Property.mp4";
import ServicesVideo from "../assets/videos/Services.mp4";

const Home = () => {
  const [searchType, setSearchType] = useState("property");
  const [searchLocation, setSearchLocation] = useState("");

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative text-white py-24 px-6 overflow-hidden min-h-[600px]">
        {/* Video Background */}
        <video
          key={searchType}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={searchType === "property" ? PropertyVideo : ServicesVideo} type="video/mp4" />
        </video>
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-red-900/30 to-black/40"></div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">
            <span className="text-red-500">Find Property</span>
            <span className="text-white"> & Home Services</span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-red-400 to-red-600 bg-clip-text text-transparent">
              Near You
            </span>
          </h1>
          <p className="text-2xl mb-10 text-gray-100 font-light drop-shadow-lg">
            Buy • Rent • Sell • Services — All in one place
          </p>

          {/* SEARCH BOX - Narrower */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl mx-auto">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="px-6 py-4 border-2 border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-medium"
              >
                <option value="property">🏠 Property</option>
                <option value="service">🔧 Service</option>
              </select>

              <input
                type="text"
                placeholder="Enter city or area..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="px-6 py-4 border-2 border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent flex-1 min-w-[200px] font-medium"
              />

              <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all font-bold shadow-lg hover:shadow-xl transform hover:scale-105">
                🔍 Search
              </button>
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 text-red-500">10,000+</div>
              <div className="text-gray-200 text-sm drop-shadow">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 text-white">500+</div>
              <div className="text-gray-200 text-sm drop-shadow">Service Providers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 text-red-400">50,000+</div>
              <div className="text-gray-200 text-sm drop-shadow">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      {searchType === "property" && (
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600">
              Discover handpicked premium properties in prime locations
            </p>
          </div>

          {/* MAIN CAROUSEL - Large Featured Properties */}
          <div className="mb-16 relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              effect="fade"
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="rounded-3xl shadow-2xl overflow-hidden"
            >
              <SwiperSlide>
                <div className="relative h-[500px] bg-gradient-to-br from-gray-900 to-gray-700 group">
                  <img 
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200" 
                    alt="Luxury Villa"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-gradient-to-r from-red-600 to-red-700 px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                        🔥 Hot Deal
                      </span>
                      <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold">
                        4 BHK Villa
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold mb-3">Luxury Villa with Private Pool</h3>
                    <p className="text-xl text-gray-200 mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Boring Road, Patna
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-bold text-red-400">₹2.5 Crore</p>
                        <p className="text-gray-300">3,500 sq ft</p>
                      </div>
                      <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-[500px] bg-gradient-to-br from-gray-900 to-gray-700 group">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200" 
                    alt="Modern Apartment"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ Featured
                      </span>
                      <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold">
                        3 BHK Apartment
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold mb-3">Premium Sky-Rise Apartment</h3>
                    <p className="text-xl text-gray-200 mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Kankarbagh, Patna
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-bold text-blue-400">₹85 Lakhs</p>
                        <p className="text-gray-300">1,650 sq ft</p>
                      </div>
                      <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-[500px] bg-gradient-to-br from-gray-900 to-gray-700 group">
                  <img 
                    src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200" 
                    alt="Penthouse"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-gradient-to-r from-purple-600 to-purple-700 px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                        💎 Premium
                      </span>
                      <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold">
                        5 BHK Penthouse
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold mb-3">Exclusive Rooftop Penthouse</h3>
                    <p className="text-xl text-gray-200 mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Raja Bazar, Patna
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-bold text-purple-400">₹3.8 Crore</p>
                        <p className="text-gray-300">4,200 sq ft</p>
                      </div>
                      <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* PROPERTY GRID - Mixed Layout */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-gray-800">Trending This Week</h3>
            
            {/* Mixed Layout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Large Featured - Spans 2 columns */}
              <div className="md:col-span-2 md:row-span-2 relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" 
                  alt="Independent House"
                  className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="bg-green-600 px-4 py-1.5 rounded-full text-sm font-bold mb-3 inline-block">
                    For Sale
                  </span>
                  <h4 className="text-2xl font-bold mb-2">Independent House with Garden</h4>
                  <p className="text-gray-200 mb-3 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Boring Road, Patna
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold">₹1.2 Crore</p>
                      <p className="text-sm text-gray-300">4 BHK • 2,200 sq ft</p>
                    </div>
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                      View
                    </button>
                  </div>
                </div>
              </div>

              {/* Small Grid Items */}
              <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400" 
                  alt="Modern Apartment"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                    For Rent
                  </span>
                  <h4 className="text-lg font-bold mb-1">2 BHK Apartment</h4>
                  <p className="text-xl font-bold text-blue-300">₹15K/mo</p>
                </div>
              </div>

              <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400" 
                  alt="Studio Apartment"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="bg-orange-600 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                    New
                  </span>
                  <h4 className="text-lg font-bold mb-1">Studio Apartment</h4>
                  <p className="text-xl font-bold text-orange-300">₹45 Lakhs</p>
                </div>
              </div>

              <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400" 
                  alt="Duplex"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                    Premium
                  </span>
                  <h4 className="text-lg font-bold mb-1">3 BHK Duplex</h4>
                  <p className="text-xl font-bold text-purple-300">₹95 Lakhs</p>
                </div>
              </div>

              <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400" 
                  alt="Villa"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                    Luxury
                  </span>
                  <h4 className="text-lg font-bold mb-1">Luxury Villa</h4>
                  <p className="text-xl font-bold text-red-300">₹1.8 Cr</p>
                </div>
              </div>
            </div>
          </div>

          {/* TRADITIONAL PROPERTY CARDS */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-gray-800">More Properties</h3>
            <div className="flex gap-6 justify-center flex-wrap">
              <PropertyCard
                title="3 BHK Luxury Apartment"
                location="Boring Road, Patna"
                price="65 Lakhs"
                image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400"
                type="For Sale"
                bhk="3"
                area="1,450"
              />
              <PropertyCard
                title="2 BHK Flat"
                location="Kankarbagh, Patna"
                price="15,000/mo"
                image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400"
                type="For Rent"
                bhk="2"
                area="950"
              />
              <PropertyCard
                title="Independent House"
                location="Raja Bazar, Patna"
                price="1.2 Crore"
                image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
                type="For Sale"
                bhk="4"
                area="2,200"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              View All Properties
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      )}

      {/* POPULAR HOME SERVICES */}
      {searchType === "service" && (
      <section className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Popular Home Services
            </h2>
            <p className="text-xl text-gray-600">
              Connect with verified professionals for all your home needs
            </p>
          </div>

          {/* FEATURED SERVICES CAROUSEL */}
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

          {/* SERVICES GRID - Mixed Layout */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-gray-800">All Services</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Service Category Cards */}
              <Link 
                to="/services/carpenter"
                className="relative h-40 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all"
              >
                <img 
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400" 
                  alt="Carpenter"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-3">
                  <div className="text-4xl mb-2">🪚</div>
                  <h4 className="text-sm font-bold text-center">Carpenter</h4>
                  <p className="text-xs text-gray-200">95+ pros</p>
                </div>
              </Link>

              <Link 
                to="/services/pest-control"
                className="relative h-40 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400" 
                  alt="Pest Control"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-3">
                  <div className="text-4xl mb-2">🐛</div>
                  <h4 className="text-sm font-bold text-center">Pest Control</h4>
                  <p className="text-xs text-gray-200">85+ pros</p>
                </div>
              </Link>

              <Link 
                to="/services/ac-repair"
                className="relative h-40 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400" 
                  alt="AC Repair"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-3">
                  <div className="text-4xl mb-2">❄️</div>
                  <h4 className="text-sm font-bold text-center">AC Repair</h4>
                  <p className="text-xs text-gray-200">140+ pros</p>
                </div>
              </Link>

              <Link 
                to="/services/home-automation"
                className="relative h-40 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all"
              >
                <img 
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?w=400" 
                  alt="Smart Home"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-3">
                  <div className="text-4xl mb-2">🤖</div>
                  <h4 className="text-sm font-bold text-center">Smart Home</h4>
                  <p className="text-xs text-gray-200">45+ pros</p>
                </div>
              </Link>

              <Link 
                to="/services/garden-maintenance"
                className="relative h-40 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all"
              >
                <img 
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400" 
                  alt="Gardening"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-3">
                  <div className="text-4xl mb-2">🌳</div>
                  <h4 className="text-sm font-bold text-center">Gardening</h4>
                  <p className="text-xs text-gray-200">70+ pros</p>
                </div>
              </Link>

              <Link 
                to="/services/security-systems"
                className="relative h-40 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all"
              >
                <img 
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400" 
                  alt="Security"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-3">
                  <div className="text-4xl mb-2">🔒</div>
                  <h4 className="text-sm font-bold text-center">Security</h4>
                  <p className="text-xs text-gray-200">110+ pros</p>
                </div>
              </Link>
            </div>
          </div>

          {/* WHY CHOOSE US FOR SERVICES */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-white mb-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl mb-3">✓</div>
                <h4 className="text-xl font-bold mb-2">Verified Pros</h4>
                <p className="text-blue-100 text-sm">Background-checked professionals</p>
              </div>
              <div>
                <div className="text-5xl mb-3">⭐</div>
                <h4 className="text-xl font-bold mb-2">Quality Work</h4>
                <p className="text-blue-100 text-sm">Rated by real customers</p>
              </div>
              <div>
                <div className="text-5xl mb-3">💰</div>
                <h4 className="text-xl font-bold mb-2">Best Rates</h4>
                <p className="text-blue-100 text-sm">Compare multiple quotes</p>
              </div>
              <div>
                <div className="text-5xl mb-3">🛡️</div>
                <h4 className="text-xl font-bold mb-2">Secure</h4>
                <p className="text-blue-100 text-sm">Safe & protected bookings</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      )}

      {/* WHY BRIGHTHOME */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gray-800">
            Why Choose BrightHome?
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Join thousands of satisfied customers who trust us
          </p>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="text-center bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="text-5xl">🏆</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Trusted Platform</h3>
              <p className="text-gray-600 leading-relaxed">
                Verified listings and service providers you can trust with
                complete transparency
              </p>
            </div>

            <div className="text-center bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="text-5xl">🌍</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Local Reach</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with local buyers, sellers, and service experts in your
                area instantly
              </p>
            </div>

            <div className="text-center bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="text-5xl">💰</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Easy to Monetize</h3>
              <p className="text-gray-600 leading-relaxed">
                List your property or services and start earning with minimum
                effort
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gray-800">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Get started in just 3 simple steps
          </p>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl relative z-10">
                1
              </div>
              {/* Connecting line */}
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 -z-0"></div>
              
              <h3 className="text-2xl font-bold mb-4">Post Your Listing</h3>
              <p className="text-gray-600 leading-relaxed">
                Create a free account and post your property or service with
                detailed information
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-gradient-to-br from-green-500 to-green-700 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl relative z-10">
                2
              </div>
              {/* Connecting line */}
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-500 to-green-300 -z-0"></div>
              
              <h3 className="text-2xl font-bold mb-4">Connect with Users</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive inquiries from interested buyers or clients directly on
                the platform
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Earn & Grow</h3>
              <p className="text-gray-600 leading-relaxed">
                Close deals and build your reputation on the platform with
                reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-2xl mb-12 text-blue-100">
            Post your property or service today and reach thousands of customers
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
    </>
  );
};

export default Home;