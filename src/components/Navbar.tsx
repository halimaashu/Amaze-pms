"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Shield, LogIn, UserPlus } from "lucide-react";
import TopMarqueeBar from "./TopMarqueeBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Rooms & Suites", href: "/#rooms" },
    { name: "Sectors", href: "/#sectors" },
    { name: "Heritage", href: "/#heritage" },
    { name: "Tech", href: "/#tech" },
    { name: "Estimator", href: "/#estimator" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full">
      {/* Top Announcement Marquee */}
      <div
        className={`w-full transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <TopMarqueeBar />
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? "py-2.5 bg-[#040711]/90 border-b border-white/10 shadow-lg"
            : "py-4 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 p-[1.5px] transition-transform duration-300 group-hover:scale-110">
                <div className="flex items-center justify-center w-full h-full rounded-xl bg-[#040711]">
                  <Shield className="w-4 h-4 text-sky-400 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-sky-500 to-emerald-500 rounded-xl blur-sm opacity-30 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
                  AMAZE <span className="text-sky-400 font-medium">PMS</span>
                </span>
                <p className="text-[8px] tracking-[0.2em] uppercase text-slate-400 font-bold -mt-1">
                  Property Solutions
                </p>
              </div>
            </Link>

            {/* Desktop Nav links */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold text-slate-300 hover:text-white transition-colors relative py-2 group uppercase tracking-wider"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

              {/* Login / Sign Up */}
              <Link
                href="/login"
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border border-white/10 bg-slate-900/60 text-slate-300 hover:text-white hover:border-sky-500/40 transition-all duration-300 hover-scale"
              >
                <LogIn className="w-3.5 h-3.5 text-sky-400" />
                <span>Sign In</span>
              </Link>

              <Link
                href="/signup"
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300 hover-scale"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Create Account</span>
              </Link>

              {/* CTA */}
              <a
                href="/#contact"
                className="relative inline-flex items-center justify-center px-5 py-2 rounded-xl font-semibold text-xs text-white overflow-hidden group transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-300 group-hover:opacity-90"></span>
                <span className="absolute -inset-px rounded-xl bg-gradient-to-r from-sky-400 to-emerald-400 blur-sm opacity-50 group-hover:opacity-85 transition-opacity"></span>
                <span className="relative">Get a Quote</span>
              </a>
            </div>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-[#070b19] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="text-lg font-bold text-white">Navigation</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="mt-6 space-y-2">
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-md"
              >
                <UserPlus className="w-4 h-4" />
                <span>Create Account</span>
              </Link>
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-sm font-bold border border-white/10 bg-slate-900 text-slate-300 hover:text-white"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
            </div>
          </div>

          <div>
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center block px-6 py-3.5 rounded-xl font-bold border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
