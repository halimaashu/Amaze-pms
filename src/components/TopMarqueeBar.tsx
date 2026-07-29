"use client";

import React from "react";
import Marquee from "react-fast-marquee";

export default function TopMarqueeBar() {
  const items = [
    { text: "📍 Now serving in Cyberabad, Hyderabad", type: "loc" },
    { text: "🔥 Special 15% discount on comprehensive Facility Safety Audits this month! Book today!", type: "ad" },
    { text: "📍 Bangalore, Karnataka Operations Active", type: "loc" },
    { text: "⚓ Founded & Managed by Indian Navy Veterans for ultimate precision", type: "ad" },
    { text: "📍 Bhubaneswar, Odisha Corporate Hub Serviced", type: "loc" },
    { text: "🏆 ISO 9001:2015 & 14001:2015 Certified Facilities Management", type: "ad" },
    { text: "📍 Chennai, Tamil Nadu Operations Active", type: "loc" },
  ];

  return (
    <div className="w-full bg-[#030611] border-b border-white/5 py-2 select-none relative z-50">
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {items.map((item, idx) => (
          <span
            key={idx}
            className={`inline-flex items-center mx-8 text-[11px] font-semibold tracking-wide uppercase ${
              item.type === "ad"
                ? "text-sky-400 font-bold"
                : "text-slate-300"
            }`}
          >
            {item.text}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
