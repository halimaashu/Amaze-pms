"use client";

import React, { useState } from "react";
import { Sparkles, Wrench, Shield, Key, ArrowRight, Check } from "lucide-react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-sky-400" />,
      title: "Soft Services",
      tagline: "Housekeeping & Janitorial",
      desc: "Complete sanitization and hygiene support ensuring clean, pristine environment for productivity.",
      bullets: [
        "Daily Housekeeping & Janitorial Support",
        "Deep Carpet & Upholstery Cleaning",
        "High-rise Facade & Window Cleaning",
        "Corporate Pantry & Office Support Staff",
      ],
      color: "from-sky-500/20 to-sky-600/5",
      borderColor: "group-hover:border-sky-500/40",
      glowColor: "var(--primary-glow)",
    },
    {
      icon: <Wrench className="w-8 h-8 text-emerald-400" />,
      title: "Technical Services (MEP)",
      tagline: "Engineering & Maintenance",
      desc: "Mechanical, Electrical, and Plumbing engineering services with automated maintenance schedules.",
      bullets: [
        "Preventive MEP Audits & Operations",
        "STP & WTP (Sewage & Water Treatment) Mgmt",
        "HVAC, Chiller & Boiler Maintenance",
        "Energy Management & Sustainability Audits",
      ],
      color: "from-emerald-500/20 to-emerald-600/5",
      borderColor: "group-hover:border-emerald-500/40",
      glowColor: "var(--secondary-glow)",
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-400" />,
      title: "Security & Safety",
      tagline: "Integrated Guarding Systems",
      desc: "Navy-grade security standards with rigorous vetting, threat response drills, and digital patrols.",
      bullets: [
        "Highly Trained Physical Guarding Forces",
        "CCTV Monitoring & Control Room Ops",
        "Fire Safety Audits & Mock Drills",
        "Emergency Crisis Management Protocols",
      ],
      color: "from-amber-500/20 to-amber-600/5",
      borderColor: "group-hover:border-amber-500/40",
      glowColor: "var(--accent-glow)",
    },
    {
      icon: <Key className="w-8 h-8 text-rose-400" />,
      title: "Property & Asset Management",
      tagline: "Life-cycle Optimization",
      desc: "Broad-spectrum property upkeep including landscaping, clubhouses, swimming pools, and AMC tracking.",
      bullets: [
        "Landscaping, Gardening & Horticulture",
        "Swimming Pool & Clubhouse Management",
        "Smart Parking & Gate Management",
        "AMC Negotiation & Compliance Audits",
      ],
      color: "from-rose-500/20 to-rose-600/5",
      borderColor: "group-hover:border-rose-500/40",
      glowColor: "rgba(244, 63, 94, 0.15)",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-[#040711] overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-sky-400 uppercase">
            Services Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Integrated Property Solutions
          </h3>
          <p className="text-slate-400 text-base">
            We provide a complete vertical of facilities management solutions designed to secure, operate, and maintain your corporate real estate assets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl glass-panel p-8 border border-white/5 bg-slate-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b1224]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                boxShadow:
                  hoveredIndex === index
                    ? `0 15px 35px -5px ${service.glowColor}`
                    : "none",
                borderColor: hoveredIndex === index 
                  ? "rgba(255,255,255,0.18)" 
                  : "rgba(255,255,255,0.06)",
              }}
            >
              {/* Backlight on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 blur-xl pointer-events-none`}
              ></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                      {service.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {service.tagline}
                      </p>
                      <h4 className="text-xl font-bold text-white transition-colors">
                        {service.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                    {service.desc}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-8">
                    {service.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                        <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                          <Check className="w-2.5 h-2.5 text-sky-400" />
                        </span>
                        <span className="font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <div className="pt-4 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-sky-400 hover:text-white transition-colors"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
