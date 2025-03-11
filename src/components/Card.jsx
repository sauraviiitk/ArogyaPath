// src/components/Card.js
import React from "react";

// Card Component
export const Card = ({ className, children }) => {
  return (
    <div
      className={`rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ${className}`}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// CardTitle Component
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={`text-zinc-100 font-bold tracking-wide mt-4 ${className}`}>
      {children}
    </h4>
  );
};

// CardDescription Component
export const CardDescription = ({ className, children }) => {
  return (
    <p className={`mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm ${className}`}>
      {children}
    </p>
  );
};
