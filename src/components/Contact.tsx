"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    area: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.phone) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        area: "",
        message: "",
      });
    }, 1500);
  };

  const offices = [
    {
      city: "Cyberabad, Hyderabad (HQ)",
      addr: "4th Floor, High Mark Chambers, Khajaguda X Road, Cyberabad, Hyderabad, Telangana - 500032.",
      phone: "+91 40 4821 5493",
    },
    {
      city: "Bangalore Branch",
      addr: "6th Block, Koramangala, Bengaluru, Karnataka - 560095.",
      phone: "+91 80 2570 1204",
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#070b19] overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-sky-400 uppercase">
            Consultation Portal
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Connect with Our Command Center
          </h3>
          <p className="text-slate-400 text-sm font-medium">
            Let us know your property requirements. Our expert MEP and soft services audit team will coordinate a walkthrough.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form - Column Left */}
          <div className="lg:col-span-7 rounded-2xl glass-panel p-6 md:p-8 border border-white/10 bg-slate-900/20">
            {status === "success" ? (
              <div className="text-center py-12 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">Thank You for Connecting</h4>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto font-medium">
                    Your request has been logged. An operations officer will reach out within 15 minutes.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-xs font-bold hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-950/80 text-sm text-white focus:outline-none focus:border-sky-500/40 transition-colors placeholder-slate-600"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Business Email *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-950/80 text-sm text-white focus:outline-none focus:border-sky-500/40 transition-colors placeholder-slate-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-950/80 text-sm text-white focus:outline-none focus:border-sky-500/40 transition-colors placeholder-slate-600"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Company Name</label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="Dacitos Technologies"
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-950/80 text-sm text-white focus:outline-none focus:border-sky-500/40 transition-colors placeholder-slate-600"
                    />
                  </div>
                </div>

                {/* Built-up area indicator */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Estimated Area (Sq Ft)</label>
                  <input
                    type="text"
                    value={formState.area}
                    onChange={(e) => setFormState({ ...formState, area: e.target.value })}
                    placeholder="e.g. 150,000"
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-950/80 text-sm text-white focus:outline-none focus:border-sky-500/40 transition-colors placeholder-slate-600"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Scope Requirements</label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Mention specific soft/technical MEP needs..."
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-950/80 text-sm text-white focus:outline-none focus:border-sky-500/40 transition-colors placeholder-slate-600 resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg hover:shadow-sky-500/25 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4 animate-pulse" />
                  <span>{status === "sending" ? "Submitting Inquiry..." : "Submit Inquiry"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Directory Details - Column Right */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Handles */}
            <div className="rounded-2xl glass-panel p-6 border border-white/10 bg-slate-900/25 space-y-4">
              <h4 className="text-base font-bold text-white border-b border-white/5 pb-3">
                Operational Outreach
              </h4>

              <div className="space-y-4">
                <a
                  href="mailto:info@amazepms.com"
                  className="flex items-center space-x-3.5 text-xs text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:bg-sky-500/10 group-hover:border-sky-500/20 transition-all">
                    <Mail className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email Us</p>
                    <p className="font-semibold">info@amazepms.com</p>
                  </div>
                </a>

                <div className="flex items-center space-x-3.5 text-xs text-slate-300">
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Call Hotline</p>
                    <p className="font-semibold">+91 98850 14883</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices list */}
            <div className="space-y-4">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl glass-panel p-6 border border-white/5 bg-slate-900/10 space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <h5 className="text-xs font-bold uppercase tracking-wider text-white">
                      {office.city}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{office.addr}</p>
                  <p className="text-[10px] text-slate-500 font-mono">Tel: {office.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
