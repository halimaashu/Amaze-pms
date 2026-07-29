"use client";

import React, { useState } from "react";
import { Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  const [subbed, setSubbed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubbed(true);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#040711] border-t border-white/5 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          {/* Logo & Brand description - Column Left */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-emerald-500 p-[1px]">
                <div className="flex items-center justify-center w-full h-full rounded-lg bg-[#040711]">
                  <Shield className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white">
                  AMAZE <span className="text-sky-400 font-medium">PMS</span>
                </span>
              </div>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
              Amaze Property Management Solutions Pvt. Ltd., a proud subsidiary of the Action Group of Companies, delivers end-to-end facilities management with naval discipline.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-sky-500/30 text-slate-400 hover:text-sky-400 transition-all cursor-pointer" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-sky-500/30 text-slate-400 hover:text-sky-400 transition-all cursor-pointer" aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-sky-500/30 text-slate-400 hover:text-sky-400 transition-all cursor-pointer" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links - Column Middle */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Services
              </h5>
              <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
                <li><a href="#services" className="hover:text-white transition-colors">Soft Services</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Technical MEP</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Security Safety</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Asset Management</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Company
              </h5>
              <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
                <li><a href="#heritage" className="hover:text-white transition-colors">Navy Heritage</a></li>
                <li><a href="#sectors" className="hover:text-white transition-colors">Sectors Served</a></li>
                <li><a href="#tech" className="hover:text-white transition-colors">Tech Spotlight</a></li>
                <li><a href="#estimator" className="hover:text-white transition-colors">Workforce Estimator</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter - Column Right */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Subscribe to Insights
            </h5>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Receive quarterly audits and facility optimization blueprints.
            </p>

            {subbed ? (
              <p className="text-xs font-bold text-emerald-400">
                Subscribed successfully. Thank you!
              </p>
            ) : (
              <form onSubmit={handleSub} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="flex-1 px-3.5 py-2.5 rounded-lg border border-white/10 bg-slate-950/80 text-xs text-white focus:outline-none focus:border-sky-500/40 transition-colors placeholder-slate-600"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg text-xs font-bold bg-sky-500 text-white hover:bg-sky-400 transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-[11px] text-slate-500 space-y-4 md:space-y-0 font-medium">
          <div className="space-y-1 text-center md:text-left">
            <p>© 2026 Amaze Property Management Solutions Pvt. Ltd.</p>
            <p className="opacity-80">
              Subsidiary of Action Group of Companies. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <span>ISO 9001:2015 & 14001:2015 Certified</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 p-2 rounded-lg bg-white/5 border border-white/5 hover:border-sky-500/30 text-slate-400 hover:text-white transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
