"use client";

import React, { useState, useEffect } from "react";

export default function Calculator() {
  const [propertyType, setPropertyType] = useState<"commercial" | "itpark" | "residential" | "warehouse">("commercial");
  const [area, setArea] = useState<number>(100000); // 100k sq ft default
  const [services, setServices] = useState({
    security: true,
    housekeeping: true,
    mep: true,
    gardening: false,
  });

  const [estimate, setEstimate] = useState({
    staffCount: 0,
    supervisors: 0,
    slaMins: 30,
    complianceScore: "100%",
  });

  const handleServiceChange = (serviceName: "security" | "housekeeping" | "mep" | "gardening") => {
    setServices((prev) => ({
      ...prev,
      [serviceName]: !prev[serviceName],
    }));
  };

  useEffect(() => {
    // Basic footprint calculation logic
    let factor = 0;
    if (propertyType === "commercial") factor = 0.00015; // 15 staff per 100k sq ft
    else if (propertyType === "itpark") factor = 0.00022; // 22 staff per 100k sq ft
    else if (propertyType === "residential") factor = 0.00012; // 12 staff per 100k sq ft
    else factor = 0.00006; // 6 staff per 100k sq ft

    let baseStaff = Math.max(2, Math.round(area * factor));

    // Service multipliers
    let serviceCount = 0;
    if (services.security) serviceCount += 1;
    if (services.housekeeping) serviceCount += 1.2;
    if (services.mep) serviceCount += 0.8;
    if (services.gardening) serviceCount += 0.4;

    let finalStaff = Math.round(baseStaff * (serviceCount / 3));

    // Supervisors: 1 for every 15 staff, minimum 1
    let finalSupervisors = Math.max(1, Math.ceil(finalStaff / 15));

    // SLA: larger area or IT Parks get faster SLA due to dedicated on-site teams
    let finalSla = 30;
    if (area > 200000 || propertyType === "itpark") {
      finalSla = 15;
    }

    setEstimate({
      staffCount: finalStaff || 2,
      supervisors: finalSupervisors,
      slaMins: finalSla,
      complianceScore: "100% Guaranteed",
    });
  }, [propertyType, area, services]);

  return (
    <section id="estimator" className="relative py-24 bg-slate-50 dark:bg-[#060913] overflow-hidden transition-colors duration-300">
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            Workforce Estimator
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Estimate Your Service Footprint
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
            Input your property specifications below to receive an instant recommended workforce allocation based on our historical operations metrics.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Inputs - Left Column */}
          <div className="lg:col-span-7 rounded-2xl glass-panel p-6 md:p-8 border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-slate-900/10 space-y-6">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">1. Property Specifications</h4>

            {/* Property Type Radio Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Property Category</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { key: "commercial", label: "Commercial Office" },
                  { key: "itpark", label: "IT Park / Mall" },
                  { key: "residential", label: "Residential" },
                  { key: "warehouse", label: "Warehouse" },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setPropertyType(item.key as any)}
                    className={`px-3 py-2.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                      propertyType === item.key
                        ? "bg-sky-500/20 border-sky-500/40 text-sky-700 dark:text-white"
                        : "border-slate-200 dark:border-white/5 bg-slate-200/40 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-slate-955 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                <span>Built-up Area (Sq Ft)</span>
                <span className="text-sky-600 dark:text-sky-400 text-sm font-mono">{area.toLocaleString()} Sq Ft</span>
              </div>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="10000"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-slate-300 dark:bg-slate-900 rounded-lg appearance-none cursor-pointer accent-sky-500 border border-slate-200 dark:border-white/5"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>10,000</span>
                <span>500,000</span>
                <span>1,000,000</span>
              </div>
            </div>

            {/* Service Checkboxes */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide block">Select Required Modules</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { key: "security", label: "Security & Guarding", desc: "Trained perimeter defence staff" },
                  { key: "housekeeping", label: "Soft Services (Housekeeping)", desc: "Sanitization & office pantry support" },
                  { key: "mep", label: "Technical MEP Operations", desc: "STP operation & engineering maintenance" },
                  { key: "gardening", label: "Landscaping & Gardening", desc: "Green cover care and lawn upkeep" },
                ].map((item) => (
                  <div
                    key={item.key}
                    onClick={() => handleServiceChange(item.key as any)}
                    className={`p-4 rounded-xl border cursor-pointer select-none transition-all duration-300 ${
                      (services as any)[item.key]
                        ? "bg-slate-200/75 dark:bg-[#0c1225] border-sky-500/40 dark:border-sky-500/30 shadow-md"
                        : "border-slate-200 dark:border-white/5 bg-slate-200/40 dark:bg-slate-900/40 opacity-70 hover:opacity-100 hover:border-slate-300 dark:hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={(services as any)[item.key]}
                        readOnly
                        className="w-4 h-4 rounded border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-sky-500 focus:ring-0 focus:ring-offset-0 pointer-events-none"
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">{item.label}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Outputs - Right Column */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl glass-panel p-6 md:p-8 border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-slate-900/25">
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/5 pb-4">
                2. Workforce Recommendation
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-200/70 dark:bg-slate-950/80 p-4 rounded-xl border border-slate-300/50 dark:border-white/5">
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                    Recommended Onsite Staff
                  </p>
                  <p className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1.5">{estimate.staffCount}</p>
                  <p className="text-[9px] text-slate-500 mt-1">Operational personnel</p>
                </div>

                <div className="bg-slate-200/70 dark:bg-slate-950/80 p-4 rounded-xl border border-slate-300/50 dark:border-white/5">
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                    Supervisors Assigned
                  </p>
                  <p className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1.5">{estimate.supervisors}</p>
                  <p className="text-[9px] text-slate-500 mt-1">Quality audits managers</p>
                </div>
              </div>

              <div className="space-y-3.5 pt-2">
                <div className="flex justify-between items-center text-xs p-3 rounded-lg bg-slate-200/40 dark:bg-slate-950/40 border border-slate-300/50 dark:border-white/5">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Response SLA Guarantee</span>
                  <span className="font-bold text-sky-600 dark:text-sky-400">&lt; {estimate.slaMins} Mins</span>
                </div>

                <div className="flex justify-between items-center text-xs p-3 rounded-lg bg-slate-200/40 dark:bg-slate-950/40 border border-slate-300/50 dark:border-white/5">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Statutory Compliance</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{estimate.complianceScore}</span>
                </div>

                <div className="flex justify-between items-center text-xs p-3 rounded-lg bg-slate-200/40 dark:bg-slate-950/40 border border-slate-300/50 dark:border-white/5">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Management Auditing</span>
                  <span className="font-bold text-slate-900 dark:text-white">Bi-Weekly ISO Standard</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="w-full text-center block px-6 py-4 rounded-xl font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg hover:shadow-sky-500/20 transition-all duration-300"
              >
                Request Custom Proposal
              </a>
              <p className="text-center text-[10px] text-slate-500 mt-3 font-semibold">
                *Estimates are baseline recommendations. Actual requirements will vary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
