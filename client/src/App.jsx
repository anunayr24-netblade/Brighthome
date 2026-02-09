import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Services from "./pages/Services";
import PostListing from "./pages/PostListing";
import BecomePartner from "./pages/BecomePartner";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/services" element={<Services />} />
        <Route path="/post-listing" element={<PostListing />} />
        <Route path="/become-partner" element={<BecomePartner />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
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