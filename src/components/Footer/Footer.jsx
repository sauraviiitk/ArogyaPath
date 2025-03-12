import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-96 bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">Your Company</h2>
          <p className="text-gray-400">Providing quality services since 2024</p>
        </div>
        
        <nav className="mb-6 md:mb-0">
          <ul className="flex flex-wrap justify-center gap-6 text-lg">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
        
        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <p className="text-gray-400">Follow us on social media</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
