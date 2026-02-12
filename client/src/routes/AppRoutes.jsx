import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Properties from '../pages/Properties';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Pricing from '../pages/Pricing';
import BecomePartner from '../pages/BecomePartner';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PostListing from '../pages/PostListing';
import PartnerDashboard from '../pages/PartnerDashboard';
import ProviderHub from '../pages/ProviderHub';
import CustomerHub from '../pages/CustomerHub';

// Service Pages
import Plumber from '../pages/services/Plumber';
import PestControl from '../pages/services/PestControl';
import PackersMovers from '../pages/services/PackersMovers';
import InteriorDesigner from '../pages/services/InteriorDesigner';
import HouseCleaning from '../pages/services/HouseCleaning';
import Carpenter from '../pages/services/Carpenter';
import ACRepair from '../pages/services/ACRepair';
import PaintingServices from '../pages/services/PaintingServices';

// Category Pages
import RealEstate from '../pages/categories/RealEstate';
import BuySell from '../pages/categories/BuySell';
import BusinessServices from '../pages/categories/BusinessServices';
import Education from '../pages/categories/Education';
import Events from '../pages/categories/Events';
import Health from '../pages/categories/Health';
import HomeServices from '../pages/categories/HomeServices';
import Jobs from '../pages/categories/Jobs';
import Pets from '../pages/categories/Pets';
import Vehicles from '../pages/categories/Vehicles';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/become-partner" element={<BecomePartner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post-listing" element={<PostListing />} />
        <Route path="/partner-dashboard" element={<PartnerDashboard />} />
        <Route path="/provider-hub" element={<ProviderHub />} />
        <Route path="/customer-hub" element={<CustomerHub />} />

        {/* Service Pages */}
        <Route path="/services/plumber" element={<Plumber />} />
        <Route path="/services/pest-control" element={<PestControl />} />
        <Route path="/services/packers-movers" element={<PackersMovers />} />
        <Route path="/services/interior-designer" element={<InteriorDesigner />} />
        <Route path="/services/house-cleaning" element={<HouseCleaning />} />
        <Route path="/services/carpenter" element={<Carpenter />} />
        <Route path="/services/ac-repair" element={<ACRepair />} />
        <Route path="/services/painting" element={<PaintingServices />} />

        {/* Category Pages */}
        <Route path="/categories/real-estate" element={<RealEstate />} />
        <Route path="/categories/buy-sell" element={<BuySell />} />
        <Route path="/categories/business-services" element={<BusinessServices />} />
        <Route path="/categories/education" element={<Education />} />
        <Route path="/categories/events" element={<Events />} />
        <Route path="/categories/health" element={<Health />} />
        <Route path="/categories/home-services" element={<HomeServices />} />
        <Route path="/categories/jobs" element={<Jobs />} />
        <Route path="/categories/pets" element={<Pets />} />
        <Route path="/categories/vehicles" element={<Vehicles />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
