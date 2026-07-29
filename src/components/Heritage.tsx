"use client";

import React from "react";
import { ShieldCheck, Anchor, Award, Crosshair } from "lucide-react";

export default function Heritage() {
  const pillars = [
    {
      icon: <Anchor className="w-6 h-6 text-amber-400" />,
      title: "Strict Discipline",
      desc: "Comprehensive onboarding, rigorous police verification, and structured training programs for all 15,000+ staff.",
    },
    {
      icon: <Crosshair className="w-6 h-6 text-amber-400" />,
      title: "Naval Precision",
      desc: "Standard Operating Procedures (SOPs) based on naval guidelines, with zero room for deviation in MEP or soft services.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
      title: "Absolute Integrity",
      desc: "100% statutory labor compliance (ESI, PF, minimum wages). We treat our workforce with respect, ensuring low attrition.",
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Crisis Leadership",
      desc: "Led by veterans equipped to handle large-scale emergencies, power blackouts, natural disasters, or critical system failures.",
    },
  ];

  return (
    <section id="heritage" className="relative py-24 bg-[#040711] overflow-hidden">
      {/* Background radial lines and decorations */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Column Left: Visual layout */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Glow backing */}
            <div className="absolute w-72 h-72 rounded-full bg-amber-500/10 blur-[80px]"></div>

            {/* Shield and Veteran Insignia Box */}
            <div className="relative rounded-2xl glass-panel p-8 border border-amber-500/30 bg-slate-900/40 text-center max-w-sm w-full">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-amber-600 p-[1px] mx-auto mb-6 shadow-lg shadow-amber-500/25">
                <div className="flex items-center justify-center w-full h-full rounded-full bg-[#040711]">
                  <Anchor className="w-7 h-7 text-amber-400" />
                </div>
              </div>

              <h4 className="text-lg font-extrabold text-white tracking-wide uppercase">
                Founded by Indian Navy Veteran
              </h4>
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mt-1">
                Mr. Subhani Abdul
              </p>

              <p className="text-slate-300 text-xs mt-4 leading-relaxed italic font-medium">
                &ldquo;Our operational principles are derived from the discipline, structure, and integrity of the military force. We deliver facility management as a critical defense protocol for your infrastructure.&rdquo;
              </p>

              {/* Badges */}
              <div className="flex justify-center space-x-3 mt-6 pt-6 border-t border-white/5">
                <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                  Established 2001
                </span>
                <span className="px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-bold uppercase tracking-wider">
                  ISO Compliant
                </span>
              </div>
            </div>
          </div>

          {/* Column Right: Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
                The Veteran Difference
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                Military Precision, Corporate Execution
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Property management is not just about keeping areas clean; it&apos;s about rigorous asset care, physical security, and bulletproof compliance. Our naval background instills these core values in everything we do.
              </p>
            </div>

            {/* Pillars list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 p-5 rounded-xl border border-white/5 bg-slate-900/20 hover:border-amber-500/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-all">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed font-medium">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
