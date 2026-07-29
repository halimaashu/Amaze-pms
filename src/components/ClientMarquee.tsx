"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { Building } from "lucide-react";

export default function ClientMarquee() {
  const clients = [
    "Dacitos Technologies",
    "L&T Metro Hyderabad",
    "Phoenix Group IT Parks",
    "My Home Townships",
    "GMR Airports",
    "Ramky Estates",
    "Aurobindo Realty",
    "Inorbit Malls",
    "Mindspace IT Park",
  ];

  return (
    <div className="w-full bg-[#030611] py-8 border-t border-b border-white/5 select-none relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          Trusted by India&apos;s Leading Infrastructure Giants
        </p>
      </div>

      <Marquee speed={30} gradient={true} gradientColor="black" pauseOnHover={true}>
        {clients.map((client, idx) => (
          <div key={idx} className="flex items-center space-x-2 mx-12 text-slate-400 hover:text-white transition-colors duration-300">
            <Building className="w-4 h-4 text-sky-500/80" />
            <span className="text-sm font-bold tracking-wide uppercase font-mono">
              {client}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
