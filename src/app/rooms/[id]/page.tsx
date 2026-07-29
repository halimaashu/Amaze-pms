"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { ROOMS_DATA } from "@/components/FeaturedRooms";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import {
  ArrowLeft,
  BedDouble,
  Users,
  Maximize,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Check,
  Building,
  CheckCircle
} from "lucide-react";

export default function RoomDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const roomId = resolvedParams.id;
  const room = ROOMS_DATA.find((r) => r.id === roomId) || ROOMS_DATA[0];

  const [activeImage, setActiveImage] = useState(room.image);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [checkInDate, setCheckInDate] = useState("");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingSuccess(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#040711] text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/#rooms"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-white/5 border border-white/10 px-4 py-2 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 text-sky-400" />
            <span>Back to All Featured Rooms</span>
          </Link>

          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-sky-500/10 border border-sky-500/20 text-sky-400">
            {room.roomNumber}
          </span>
        </div>

        {/* Top Header Title */}
        <div className="space-y-3 mb-10">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              {room.category}
            </span>
            {room.status === "available" ? (
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                ● Available for Instant Booking
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">
                ● Booked / Reserved Status
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            {room.name}
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            {room.description}
          </p>
        </div>

        {/* Gallery & Main Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Gallery - Left Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl">
              <img
                src={activeImage}
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-mono text-xs text-slate-300 bg-black/60 px-3 py-1 rounded-lg border border-white/10 backdrop-blur-md">
                Live Suite Preview
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {room.images.map((imgSrc, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgSrc)}
                  className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                    activeImage === imgSrc ? "border-sky-400 scale-105" : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={imgSrc} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Booking Card & Tariff Spec - Right Column */}
          <div className="lg:col-span-5 rounded-3xl glass-panel border border-white/10 bg-slate-900/40 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Nightly Tariff</p>
                <p className="text-3xl font-extrabold text-white">{room.pricePerNight}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Suite Size</p>
                <p className="text-lg font-bold text-sky-400">{room.sqft} Sq Ft</p>
              </div>
            </div>

            {/* Quick Spec Icons */}
            <div className="grid grid-cols-3 gap-3 text-center py-2">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <Maximize className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                <span className="text-[10px] text-slate-400 block font-bold">SPACE</span>
                <span className="text-xs font-bold text-white">{room.sqft} sqft</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <Users className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="text-[10px] text-slate-400 block font-bold">GUESTS</span>
                <span className="text-xs font-bold text-white">Up to {room.capacity}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <BedDouble className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span className="text-[10px] text-slate-400 block font-bold">BEDDING</span>
                <span className="text-xs font-bold text-white">King Suite</span>
              </div>
            </div>

            {/* Booking Form */}
            <div className="pt-2">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>Reserve Suite Online</span>
              </h3>

              {bookingSuccess ? (
                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 space-y-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-extrabold text-sm">Suite Reserved Successfully!</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Thank you, <strong className="text-white">{guestName}</strong>. Your confirmation token for <strong>{room.name} ({room.roomNumber})</strong> has been dispatched to <strong>{guestEmail}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Commander Alex Vance"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-slate-950/80 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      placeholder="alex@guest.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-slate-950/80 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-slate-950/80 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-400"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-slate-950/80 text-xs text-white focus:outline-none focus:border-sky-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg hover:shadow-sky-500/25 transition-all text-xs cursor-pointer mt-2"
                  >
                    {isSubmitting ? "Dispatching Reservation..." : "Confirm & Book Suite Now"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Operations Audit Section */}
        <div className="rounded-3xl glass-panel border border-white/10 bg-slate-900/30 p-8 space-y-8">
          <div className="border-b border-white/5 pb-4">
            <h2 className="text-xl font-extrabold text-white">
              PMS Hotel Management Operations & Audits
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Live engineering, housekeeping, and safety compliance status for this suite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950/60 p-5 rounded-2xl border border-white/5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Technical MEP Operations</span>
              </h3>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Status: <strong className="text-emerald-400">{room.mepStatus}</strong>. Continuous sensor monitoring active for air flow, temperature regulation, and water quality.
              </p>
            </div>

            <div className="bg-slate-950/60 p-5 rounded-2xl border border-white/5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Housekeeping & Sanitization</span>
              </h3>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Status: <strong className="text-emerald-400">{room.housekeepingStatus}</strong>. High-efficiency hospital-grade sanitization applied prior to every guest check-in.
              </p>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="text-sm font-bold text-white">Full Amenities & Features</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {room.amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2.5 text-xs text-slate-300 p-3 rounded-xl bg-slate-900/50 border border-white/5"
                >
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
