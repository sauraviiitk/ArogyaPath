import React, { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt, IconMenu2, IconX } from "@tabler/icons-react";

// Create a Context for Sidebar State
const SidebarContext = createContext();

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within a SidebarProvider");
  return context;
};

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = () => {
  return (
    <SidebarProvider>
      <DesktopSidebar />
      <MobileSidebar />
    </SidebarProvider>
  );
};

const DesktopSidebar = () => {
  const { open, setOpen } = useSidebar();
  return (
    <motion.div
      className="h-screen bg-white top-16 w-96 p-4 shadow-md fixed "
      animate={{ width: open ? "250px" : "180px" }}
    >
      <button onClick={() => setOpen(!open)} className="mb-4">
        {open ? <IconArrowLeft size={24} /> : <IconMenu2 size={24} />}
      </button>
      <SidebarLinks />
    </motion.div>
  );
};

const MobileSidebar = () => {
  const { open, setOpen } = useSidebar();
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(true)} className="m-4">
        <IconMenu2 size={24} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-75 flex flex-col w-64 p-4 shadow-lg"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
          >
            <button onClick={() => setOpen(false)}>
              <IconX size={24} />
            </button>
            <SidebarLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SidebarLinks = () => {
  const links = [
    { label: "Dashboard", icon: <IconBrandTabler size={24} /> },
    { label: "Profile", icon: <IconUserBolt size={24} /> },
    { label: "Settings", icon: <IconSettings size={24} /> }
  ];

  return (
    <ul className="mt-4">
      {links.map((link, index) => (
        <li key={index} className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer">
          {link.icon} {link.label}
        </li>
      ))}
    </ul>
  );
};
