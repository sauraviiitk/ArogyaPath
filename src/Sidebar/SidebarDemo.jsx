import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./Sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function SidebarDemo() {
  const links = [
    { label: "Dashboard", href: "#", icon: <IconBrandTabler className="h-5 w-5 text-gray-700 dark:text-white" /> },
    { label: "Profile", href: "#", icon: <IconUserBolt className="h-5 w-5 text-gray-700 dark:text-white" /> },
    { label: "Settings", href: "#", icon: <IconSettings className="h-5 w-5 text-gray-700 dark:text-white" /> },
    { label: "Logout", href: "#", icon: <IconArrowLeft className="h-5 w-5 text-gray-700 dark:text-white" /> },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full max-w-7xl mx-auto border border-gray-300 dark:border-gray-700 h-screen">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody>
          <div className="flex flex-col flex-1 overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <SidebarLink
            link={{
              label: "Manu Arora",
              href: "#",
              icon: (
                <img src="/manu.png" alt="Avatar" className="h-7 w-7 rounded-full" />
              ),
            }}
          />
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => (
  <Link to="#" className="flex items-center text-sm text-black dark:text-white">
    <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="ml-2">
      Acet Labs
    </motion.span>
  </Link>
);

export const LogoIcon = () => (
  <Link to="#" className="flex items-center">
    <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
  </Link>
);

const Dashboard = () => (
  <div className="flex flex-1 p-4 md:p-10 bg-white dark:bg-neutral-900 border border-gray-300 dark:border-gray-700 rounded-tl-2xl">
    <div className="grid grid-cols-2 gap-4 w-full">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-20 bg-gray-200 dark:bg-neutral-800 rounded-lg animate-pulse"></div>
      ))}
    </div>
  </div>
);
