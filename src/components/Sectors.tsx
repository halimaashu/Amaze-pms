"use client";

import React, { useState } from "react";
import { Building2, Home, Landmark, ShoppingBag, HeartPulse, GraduationCap, Percent, Zap, Users } from "lucide-react";

export default function Sectors() {
  const [activeTab, setActiveTab] = useState(0);

  const sectors = [
    {
      icon: <Building2 className="w-5 h-5" />,
      label: "IT Parks & Malls",
      title: "Commercial & High-Footprint Arenas",
      desc: "IT parks and premium retail spaces require 24/7 technical uptime, seamless crowd management, and highly professional soft services to sustain brand reputation.",
      metrics: [
        { icon: <Zap className="w-4 h-4 text-emerald-400" />, name: "Energy Optimization", val: "18% Saved" },
        { icon: <Percent className="w-4 h-4 text-sky-400" />, name: "System Uptime SLA", val: "99.98%" },
        { icon: <Users className="w-4 h-4 text-amber-400" />, name: "Facility Staff size", val: "100 - 500+" },
      ],
      deliverables: [
        "Predictive MEP tracking with specialized response teams",
        "Automated STP & WTP maintenance schedules",
        "High-density housekeeping & public space sanitization",
        "Rigorous parking & visitor management automation",
      ],
      glow: "from-sky-500/10 to-transparent",
    },
    {
      icon: <Home className="w-5 h-5" />,
      label: "Residential Communities",
      title: "Premium Townships & Clubhouses",
      desc: "High-end residential projects deserve safety, prompt resolution of resident maintenance tickets, and clean, lush green landscaping.",
      metrics: [
        { icon: <Zap className="w-4 h-4 text-emerald-400" />, name: "Ticket Resolution", val: "<30 Mins" },
        { icon: <Percent className="w-4 h-4 text-sky-400" />, name: "Resident Sat Score", val: "97.4%" },
        { icon: <Users className="w-4 h-4 text-amber-400" />, name: "Landscaping Cover", val: "Up to 50 acres" },
      ],
      deliverables: [
        "Real-time ticket logging for electrical and plumbing fixes",
        "Swimming pool, gymnasium & clubhouse operations",
        "Landscaping, gardening and weed control services",
        "Professional perimeter security & access monitoring",
      ],
      glow: "from-emerald-500/10 to-transparent",
    },
    {
      icon: <HeartPulse className="w-5 h-5" />,
      label: "Healthcare",
      title: "Hospitals & Diagnostics Centers",
      desc: "Healthcare setups require clinical hygiene levels, 100% sterile housekeeping, and uninterruptible power backup management.",
      metrics: [
        { icon: <Zap className="w-4 h-4 text-emerald-400" />, name: "Sterile compliance", val: "100% Certified" },
        { icon: <Percent className="w-4 h-4 text-sky-400" />, name: "Generator Uptime", val: "100%" },
        { icon: <Users className="w-4 h-4 text-amber-400" />, name: "Bio-waste compliance", val: "Zero Infraction" },
      ],
      deliverables: [
        "Infection prevention cleaning and pathogen control",
        "Critically managed backup power & generator auditing",
        "24/7 support desk and oxygen distribution system checks",
        "Eco-friendly waste disposal & strict regulatory compliance",
      ],
      glow: "from-rose-500/10 to-transparent",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      label: "Educational Institutes",
      title: "Universities, Schools & Hostels",
      desc: "Educational campuses need robust security protocols, student-friendly cleaning staffs, and mass dining/canteen maintenance support.",
      metrics: [
        { icon: <Zap className="w-4 h-4 text-emerald-400" />, name: "Audit Cleanliness", val: "A+ Rating" },
        { icon: <Percent className="w-4 h-4 text-sky-400" />, name: "Incident response", val: "<10 Mins" },
        { icon: <Users className="w-4 h-4 text-amber-400" />, name: "Campus Area Serviced", val: "Up to 100 acres" },
      ],
      deliverables: [
        "Routine classroom, hostel and cafeteria deep cleaning",
        "Strict perimeter control and student safety management",
        "Centralized air conditioning and ventilation upkeep",
        "Sports complex and grounds upkeep services",
      ],
      glow: "from-amber-500/10 to-transparent",
    },
  ];

  return (
    <section id="sectors" className="relative py-24 bg-slate-100 dark:bg-[#070b19] overflow-hidden border-t border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-emerald-500/5 to-sky-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            Industry Verticals
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Sectors We Elevate
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            From critical sterile healthcare environments to high-footprint commercial complexes, we customize our facility plans to fit your industry.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {sectors.map((sector, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === index
                  ? "bg-gradient-to-r from-sky-500/20 to-emerald-500/20 border border-sky-500/40 text-slate-900 dark:text-white shadow-lg"
                  : "border border-slate-200 dark:border-white/5 bg-slate-200/40 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/10"
              }`}
            >
              {sector.icon}
              <span>{sector.label}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Panel */}
        <div className="relative rounded-2xl glass-panel p-8 md:p-12 border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/20 overflow-hidden transition-all duration-500">
          {/* Inner ambient light */}
          <div className={`absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-tr ${sectors[activeTab].glow} blur-3xl pointer-events-none`}></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            {/* Left: Info */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {sectors[activeTab].title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                {sectors[activeTab].desc}
              </p>

              {/* Scope deliverables */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Scope Deliverables
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {sectors[activeTab].deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300 p-2.5 rounded-lg bg-slate-200/50 dark:bg-slate-900/40 border border-slate-300/50 dark:border-white/5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Metrics / Performance Indicators */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              <div className="bg-slate-200/70 dark:bg-slate-950/80 rounded-xl border border-slate-300/50 dark:border-white/5 p-6 space-y-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center pb-3 border-b border-slate-300/50 dark:border-white/5">
                  Performance Benchmarks
                </h5>

                <div className="space-y-4">
                  {sectors[activeTab].metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-slate-300/50 dark:bg-white/5 rounded-lg border border-slate-400/30 dark:border-white/10">
                          {metric.icon}
                        </div>
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{metric.name}</span>
                      </div>
                      <span className="text-sm font-bold text-slate-800 dark:text-white bg-slate-300/40 dark:bg-white/5 px-3 py-1 rounded-md border border-slate-300/50 dark:border-white/5">
                        {metric.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Prompt */}
              <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest font-bold mt-2">
                *Audited in real-time according to ISO 9001 compliance standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
