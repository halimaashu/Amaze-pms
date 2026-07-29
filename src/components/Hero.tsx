"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Activity, Award, UserCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center py-20 md:py-28 overflow-hidden bg-grid-pattern">
      {/* Dynamic Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sky-500/20 to-blue-600/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/10 to-teal-600/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "-3s" }}></div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content - Column Left */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-500 dark:text-sky-400 text-xs font-semibold tracking-wider uppercase animate-float">
              <Award className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
              <span>Dacitos Technologies Approved Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Redefining Facility Management with{" "}
              <span className="text-gradient-cyan-blue">Naval Precision</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Amaze PMS integrates Soft services, technical MEP operations, security, and smart asset maintenance into one seamless, compliance-assured, tech-driven platform.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#services"
                className="w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base text-white overflow-hidden group transition-all duration-300 shadow-lg shadow-sky-500/10 hover:shadow-sky-500/25"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-300 group-hover:opacity-90"></span>
                <span className="relative flex items-center space-x-2">
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#estimator"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-white font-bold hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 text-center"
              >
                Estimate Footprint
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200 dark:border-white/5 max-w-3xl mx-auto lg:mx-0">
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">15K+</h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                  Professionals
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">5+</h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                  Indian States
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">25 yrs</h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-4?0 uppercase tracking-wider mt-1">
                  Est. Since 2001
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">99.9%</h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-4?0 uppercase tracking-wider mt-1">
                  SLA Compliance
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Floating Interface Preview - Column Right */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-sky-500/20 blur-3xl opacity-60 rounded-full scale-75 animate-pulse-slow"></div>

            {/* Main Interactive Panel */}
            <div className="relative w-full max-w-md rounded-2xl glass-panel p-6 border border-slate-200 dark:border-white/10 shadow-2xl animate-float">
              {/* Top window dots */}
              <div className="flex items-center space-x-1.5 pb-4 border-b border-slate-200 dark:border-white/5 mb-6">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 ml-4 font-mono">amaze-operations-map.sh</span>
              </div>

              {/* Status Header */}
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-slate-100/50 dark:bg-white/5 p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">System Active</h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">All properties status updated</p>
                    </div>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>

                {/* Operations List */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs p-3 border border-slate-200 dark:border-white/5 rounded-xl bg-slate-100 dark:bg-slate-900/40">
                    <span className="text-slate-600 dark:text-slate-400 font-mono">HYD-TECH-04</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold text-[10px]">
                      MEP Checked
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs p-3 border border-slate-200 dark:border-white/5 rounded-xl bg-slate-100 dark:bg-slate-900/40">
                    <span className="text-slate-600 dark:text-slate-400 font-mono">BLR-SEC-12</span>
                    <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 font-semibold text-[10px]">
                      Patrol Sync
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs p-3 border border-slate-200 dark:border-white/5 rounded-xl bg-slate-100 dark:bg-slate-900/40">
                    <span className="text-slate-600 dark:text-slate-400 font-mono">BBS-SOFT-09</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-semibold text-[10px]">
                      STP Clean
                    </span>
                  </div>
                </div>

                {/* Mini Stat display */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-100 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-200 dark:border-white/5">
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                      Workforce
                    </p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">15,000+</p>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-200 dark:border-white/5">
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                      Active Sites
                    </p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">320+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating elements */}
            <div className="absolute -top-6 -right-6 glass-panel px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 shadow-lg flex items-center space-x-2 animate-float" style={{ animationDelay: "2s" }}>
              <UserCheck className="w-5 h-5 text-sky-400" />
              <div>
                <p className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Audit Rating</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">ISO 9001:2015</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-panel px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 shadow-lg flex items-center space-x-2 animate-float" style={{ animationDelay: "4s" }}>
              <Activity className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Response time</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">&lt; 15 mins SLA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
