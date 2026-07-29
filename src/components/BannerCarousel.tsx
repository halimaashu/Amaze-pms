"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Shield, Wrench, ParkingSquare, Compass, Utensils } from "lucide-react";

interface SlideItem {
  src: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  const slides: SlideItem[] = [
    {
      src: "/images/Burj-Khalifa-in-Dubai.webp",
      title: "Iconic Tower Maintenance",
      subtitle: "High-rise facade cleaning & deep soft services.",
      icon: <Sparkles className="w-3.5 h-3.5 text-sky-400" />,
    },
    {
      src: "/images/bruz khalifa room quality.webp",
      title: "Premium Hospitality",
      subtitle: "Sterile cleaning & room operations auditing.",
      icon: <Compass className="w-3.5 h-3.5 text-emerald-400" />,
    },
    {
      src: "/images/burz khalifa food system.jpg",
      title: "Elite Dining Systems",
      subtitle: "Corporate pantries & food court management.",
      icon: <Utensils className="w-3.5 h-3.5 text-amber-400" />,
    },
    {
      src: "/images/burz khalifa night vue.avif",
      title: "24/7 Facility Ops",
      subtitle: "Backup generators & climate systems management.",
      icon: <Wrench className="w-3.5 h-3.5 text-rose-400" />,
    },
    {
      src: "/images/burzkhalifa parking slot.webp",
      title: "Parking Logistics",
      subtitle: "Digital parking software & guard checkpoints.",
      icon: <ParkingSquare className="w-3.5 h-3.5 text-sky-400" />,
    },
    {
      src: "/images/burzkhlifa security.jpg",
      title: "Security Control",
      subtitle: "Perimeter patrols, audits, and access checks.",
      icon: <Shield className="w-3.5 h-3.5 text-emerald-400" />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-slate-950 border-b border-[var(--border-color)] group mt-[88px] md:mt-[92px]">
      {/* Slides */}
      <div className="w-full h-full relative">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              current === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image with Ken Burns */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-out ${
                current === idx ? "scale-110" : "scale-100"
              }`}
              style={{ backgroundImage: `url('${slide.src}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50"></div>
            </div>

            {/* Small Card — Bottom Right */}
            <div className="absolute bottom-8 right-4 md:right-10 z-20 max-w-[260px]">
              <div
                className="glass-panel px-4 py-3 rounded-xl border border-white/10 shadow-xl backdrop-blur-md transition-all duration-500"
                style={{
                  opacity: current === idx ? 1 : 0,
                  transform: current === idx ? "translateY(0)" : "translateY(12px)",
                }}
              >
                <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-[9px] font-bold uppercase tracking-wider mb-2">
                  {slide.icon}
                  <span>Showcase</span>
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">
                  {slide.title}
                </h3>
                <p className="text-slate-300 text-[10px] mt-1 leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-[8px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    SLA ✓
                  </span>
                  <span className="text-[8px] uppercase font-bold text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">
                    ISO
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white/70 hover:text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 hover-scale"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white/70 hover:text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 hover-scale"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === idx ? "w-6 bg-sky-400" : "w-1.5 bg-white/30 hover:bg-white/60"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
