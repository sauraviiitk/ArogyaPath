import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NavigationMenuDemo} from "./components/NavigationMenuDemo";
import Bhajans from "./Tabs/Bhajans";
import Mantras from "./components/Mantras/Mantras";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import ExpandableCardDemo from "./components/ExpandableCardDemo/ExpandableCardDemo";
import Sidebar from "./components/Sidebar/sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Show Landing Page and Footer on the Home Page */}
        <Route path="/" element={<>
          <NavigationMenuDemo />
          <Sidebar/>
          <LandingPage />
          <Footer />
        </>} />

        {/* Show Navbar + Mantras Page */}
        <Route path="/Mantras" element={<>
          <NavigationMenuDemo />
         <ExpandableCardDemo/>
        </>} />

        {/* Show Navbar + Bhajans Page */}
        <Route path="/Bhajans" element={<>
          <NavigationMenuDemo />
          <Bhajans />
        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
