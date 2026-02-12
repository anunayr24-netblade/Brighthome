import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Services from "./pages/Services";
import PostListing from "./pages/PostListing";
import BecomePartner from "./pages/BecomePartner";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Category Pages
import RealEstate from "./pages/categories/RealEstate";
import Vehicles from "./pages/categories/Vehicles";
import HomeServices from "./pages/categories/HomeServices";
import Jobs from "./pages/categories/Jobs";
import BuySell from "./pages/categories/BuySell";
import Education from "./pages/categories/Education";
import Health from "./pages/categories/Health";
import Events from "./pages/categories/Events";
import Pets from "./pages/categories/Pets";
import BusinessServices from "./pages/categories/BusinessServices";

// Service Detail Pages
import PackersMovers from "./pages/services/PackersMovers";
import PaintingServices from "./pages/services/PaintingServices";
import Electrician from "./pages/services/Electrician";
import Plumber from "./pages/services/Plumber";
import Carpenter from "./pages/services/Carpenter";
import HouseCleaning from "./pages/services/HouseCleaning";
import PestControl from "./pages/services/PestControl";
import InteriorDesigner from "./pages/services/InteriorDesigner";
import ACRepair from "./pages/services/ACRepair";
import HomeAutomation from "./pages/services/HomeAutomation";
import GardenMaintenance from "./pages/services/GardenMaintenance";
import SecuritySystems from "./pages/services/SecuritySystems";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/services" element={<Services />} />
        <Route path="/post-listing" element={<PostListing />} />
        <Route path="/become-partner" element={<BecomePartner />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Category Routes */}
        <Route path="/category/real-estate" element={<RealEstate />} />
        <Route path="/category/vehicles" element={<Vehicles />} />
        <Route path="/category/home-services" element={<HomeServices />} />
        <Route path="/category/jobs" element={<Jobs />} />
        <Route path="/category/buy-sell" element={<BuySell />} />
        <Route path="/category/education" element={<Education />} />
        <Route path="/category/health" element={<Health />} />
        <Route path="/category/events" element={<Events />} />
        <Route path="/category/pets" element={<Pets />} />
        <Route path="/category/business-services" element={<BusinessServices />} />
        
        {/* Service Detail Routes */}
        <Route path="/services/packers-movers" element={<PackersMovers />} />
        <Route path="/services/painting" element={<PaintingServices />} />
        <Route path="/services/electrician" element={<Electrician />} />
        <Route path="/services/plumber" element={<Plumber />} />
        <Route path="/services/carpenter" element={<Carpenter />} />
        <Route path="/services/house-cleaning" element={<HouseCleaning />} />
        <Route path="/services/pest-control" element={<PestControl />} />
        <Route path="/services/interior-designer" element={<InteriorDesigner />} />
        <Route path="/services/ac-repair" element={<ACRepair />} />
        <Route path="/services/home-automation" element={<HomeAutomation />} />
        <Route path="/services/garden-maintenance" element={<GardenMaintenance />} />
        <Route path="/services/security-systems" element={<SecuritySystems />} />
      </Routes>
    </Router>
  );
}

export default App;