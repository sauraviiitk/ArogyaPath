import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "react-bootstrap";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close sidebar when clicking outside
  const handleCloseSidebar = (e) => {
    if (isOpen && e.target.id === "sidebar-overlay") {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Overlay Effect */}
      {isOpen && (
        <div
          id="sidebar-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleCloseSidebar}
        />
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-blue-600 text-white rounded-md fixed top-4 left-4 z-50 shadow-md hover:bg-blue-700 transition"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b bg-blue-500 text-white">
          <h2 className="text-2xl font-bold">Arogya Path</h2>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Buttons Section */}
        <div className="p-4 flex flex-col space-y-2">
          <Button variant="outline-primary" className="w-full">Sign Up</Button>
          <Button variant="primary" className="w-full">Login</Button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-3">
          <Link to="/" className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 transition">
            🏠 Dashboard
          </Link>
          <Link to="/mantras" className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 transition">
            🎵 Mantras
          </Link>
          <Link to="/bhajans" className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 transition">
            🎶 Bhajans
          </Link>
          <Link to="/settings" className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 transition">
            ⚙️ Settings
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
