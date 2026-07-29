"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import {
  BedDouble,
  Users,
  Maximize,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Eye,
  X,
  Clock,
  Building,
  Check,
  Star,
  Bookmark,
  Share2
} from "lucide-react";

export interface RoomItem {
  id: string;
  name: string;
  category: "penthouse" | "suite" | "deluxe" | "executive";
  roomNumber: string;
  pricePerNight: string;
  sqft: number;
  capacity: number;
  status: "available" | "booked" | "maintenance";
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  mepStatus: string;
  housekeepingStatus: string;
  rating: number;
}

export const ROOMS_DATA: RoomItem[] = [
  {
    id: "suite-1402",
    name: "Royal Presidential Sky Villa",
    category: "penthouse",
    roomNumber: "#1402 - Tower A",
    pricePerNight: "₹45,000",
    sqft: 1850,
    capacity: 4,
    status: "available",
    rating: 4.98,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Panoramic skyline views with private terrace, smart ambient climate control, master jacuzzi, 24/7 dedicated butler dispatch, and biometric access control.",
    amenities: ["Private Jacuzzi", "24/7 Butler Service", "Smart Touch Panels", "High-speed Wi-Fi 6", "Mini Bar", "4K OLED Theater"],
    mepStatus: "AC & HVAC Telemetry Normal (100% SLA)",
    housekeepingStatus: "Sterile Sanitized & Inspected ✓",
  },
  {
    id: "suite-0910",
    name: "Executive Ocean View Suite",
    category: "suite",
    roomNumber: "#0910 - Tower B",
    pricePerNight: "₹28,000",
    sqft: 1100,
    capacity: 3,
    status: "booked",
    rating: 4.92,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Spacious business suite with floor-to-ceiling glass, dedicated ergonomic workstation, integrated AV conference bar, and complimentary VIP lounge access.",
    amenities: ["Ergonomic Workstation", "Lounge Access", "Espresso Bar", "Wi-Fi 6 Ultra", "Walk-in Wardrobe"],
    mepStatus: "HVAC Sensor Grid Online",
    housekeepingStatus: "Occupied • Reserved All",
  },
  {
    id: "suite-0604",
    name: "Grand Deluxe Horizon Penthouse",
    category: "deluxe",
    roomNumber: "#0604 - Tower A",
    pricePerNight: "₹22,500",
    sqft: 850,
    capacity: 2,
    status: "available",
    rating: 4.88,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Elegant contemporary suite designed for premium comfort. Features soundproof glass acoustics, plush king bedding, and automated lighting presets.",
    amenities: ["King Plush Bedding", "Acoustic Soundproofing", "Rain Shower", "Automated Blinds", "Smart TV"],
    mepStatus: "Electrical Audit Passed (0 Faults)",
    housekeepingStatus: "Ready for Check-in ✓",
  },
  {
    id: "suite-1108",
    name: "Imperial Dining & Business Residence",
    category: "executive",
    roomNumber: "#1108 - Tower C",
    pricePerNight: "₹34,000",
    sqft: 1400,
    capacity: 5,
    status: "booked",
    rating: 4.95,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Designed for high-profile executives and families. Includes full dining setup, kitchenette, private meeting lounge, and priority valet service.",
    amenities: ["Private Dining Room", "Kitchenette", "Valet Parking", "Meeting Lounge", "Security Escort"],
    mepStatus: "Water Purity & STP Verified",
    housekeepingStatus: "Occupied • Next Audit 09:00 AM",
  },
  {
    id: "suite-0302",
    name: "Ambassador Luxury Residence",
    category: "suite",
    roomNumber: "#0302 - Tower B",
    pricePerNight: "₹19,000",
    sqft: 750,
    capacity: 2,
    status: "available",
    rating: 4.85,
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Sleek modern suite with direct private parking elevator access, smart climate controls, and high-efficiency MEP energy monitoring.",
    amenities: ["Direct Elevator Access", "Smart Thermostat", "King Bed", "Minibar", "High Speed Wi-Fi"],
    mepStatus: "Energy Optimization Mode Active",
    housekeepingStatus: "Ready for Guest Check-in ✓",
  },
  {
    id: "suite-1501",
    name: "Sky Sanctuary Penthouse Villa",
    category: "penthouse",
    roomNumber: "#1501 - Tower A",
    pricePerNight: "₹52,000",
    sqft: 2200,
    capacity: 6,
    status: "booked",
    rating: 4.99,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The peak of luxury hotel management. Features private rooftop plunge pool, panic room security protocol, helipad transfer coordination, and 24/7 security detail.",
    amenities: ["Rooftop Plunge Pool", "Armed Security Escort", "Helipad Access", "Private Chef Kitchen", "Master Jacuzzi"],
    mepStatus: "Priority Military-Grade MEP Audit",
    housekeepingStatus: "VIP Reserved • Full Clearance",
  },
];

export default function FeaturedRooms() {
  const [filter, setFilter] = useState<"all" | "available" | "booked">("all");
  const [selectedRoom, setSelectedRoom] = useState<RoomItem | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isBookingLoading, setIsBookingLoading] = useState(false);

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (filter === "available") return room.status === "available";
    if (filter === "booked") return room.status === "booked";
    return true;
  });

  const handleFilterChange = (newFilter: "all" | "available" | "booked") => {
    setFilter(newFilter);
    if (newFilter === "all") toast.success("Displaying all featured suites");
    if (newFilter === "available") toast.success("Filtered to Available Suites");
    if (newFilter === "booked") toast.success("Filtered to Occupied / Booked All Suites");
  };

  const openDetailModal = (room: RoomItem) => {
    setSelectedRoom(room);
    setBookingSuccess(false);
    toast.success(`Viewing details for ${room.name}`);
  };

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingLoading(true);
    toast.loading("Processing suite reservation...", { id: "booking-toast" });

    setTimeout(() => {
      setIsBookingLoading(false);
      setBookingSuccess(true);
      toast.success(`Suite Reserved! Confirmation code dispatched to your email.`, { id: "booking-toast" });
    }, 1300);
  };

  const copyShareLink = (room: RoomItem) => {
    navigator.clipboard?.writeText(window.location.origin + `/rooms/${room.id}`);
    toast.success(`Link copied for ${room.name}`);
  };

  return (
    <section id="rooms" className="relative py-24 bg-[#040711] overflow-hidden border-t border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>High-Level Hotel Management & Suite Ops</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured Rooms & Luxury Suites
          </h2>
          <p className="text-slate-400 text-sm font-medium leading-relaxed">
            Explore our military-grade managed hotel suites. Track live occupancy, MEP sensor audits, and reserve premium accommodations.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          <div className="flex items-center space-x-2 bg-slate-900/60 p-1.5 rounded-xl border border-white/5">
            <button
              onClick={() => handleFilterChange("all")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-sky-500/20 text-sky-400 border border-sky-500/30 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Suites ({ROOMS_DATA.length})
            </button>
            <button
              onClick={() => handleFilterChange("available")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filter === "available"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Available Now ({ROOMS_DATA.filter((r) => r.status === "available").length})
            </button>
            <button
              onClick={() => handleFilterChange("booked")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filter === "booked"
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Occupied / Booked All ({ROOMS_DATA.filter((r) => r.status === "booked").length})
            </button>
          </div>

          <div className="flex items-center space-x-3 text-xs font-semibold text-slate-400">
            <span className="flex items-center space-x-1.5 bg-slate-900/40 px-3 py-1.5 rounded-lg border border-white/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-emerald-400 font-bold">PMS Telemetry Live</span>
            </span>
          </div>
        </div>

        {/* Room Cards Grid with Framer Motion */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredRooms.map((room) => (
              <motion.div
                key={room.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.4 }}
                className="group rounded-3xl glass-panel border border-white/10 bg-slate-900/35 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/10"
              >
                {/* Image Setup */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Status Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    {room.status === "available" ? (
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 backdrop-blur-md flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Available</span>
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/20 border border-amber-500/40 text-amber-400 backdrop-blur-md flex items-center space-x-1.5">
                        <Clock className="w-3 h-3" />
                        <span>Booked / Occupied</span>
                      </span>
                    )}
                  </div>

                  {/* Rating & Room Number */}
                  <div className="absolute top-3.5 right-3.5 z-10 flex items-center space-x-2">
                    <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-bold text-amber-400 flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{room.rating}</span>
                    </span>
                    <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-mono font-bold text-slate-300">
                      {room.roomNumber}
                    </span>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 left-4 z-10">
                    <span className="text-2xl font-extrabold text-white tracking-tight">
                      {room.pricePerNight}
                    </span>
                    <span className="text-slate-400 text-xs font-medium ml-1">/ night</span>
                  </div>

                  {/* Share Quick Button */}
                  <button
                    onClick={() => copyShareLink(room)}
                    aria-label="Share room"
                    className="absolute bottom-3 right-4 z-10 p-2 rounded-xl bg-black/60 backdrop-blur-md text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors line-clamp-1">
                      {room.name}
                    </h3>
                    <p className="text-slate-400 text-xs line-clamp-2 mt-1.5 leading-relaxed font-medium">
                      {room.description}
                    </p>
                  </div>

                  {/* Room Specs */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/5 text-[11px] font-semibold text-slate-300">
                    <div className="flex items-center space-x-1.5">
                      <Maximize className="w-3.5 h-3.5 text-sky-400" />
                      <span>{room.sqft} sq ft</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Users className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{room.capacity} Guests</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <BedDouble className="w-3.5 h-3.5 text-amber-400" />
                      <span>King Bed</span>
                    </div>
                  </div>

                  {/* Hotel Telemetry Audit */}
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-white/5 space-y-1 text-[10px]">
                    <div className="flex items-center justify-between text-slate-400 font-medium">
                      <span>MEP Status:</span>
                      <span className="text-sky-400 font-semibold">{room.mepStatus}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400 font-medium">
                      <span>Housekeeping:</span>
                      <span className="text-emerald-400 font-semibold">{room.housekeepingStatus}</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <button
                      onClick={() => openDetailModal(room)}
                      className="flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-bold border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-sky-400" />
                      <span>View Details</span>
                    </button>

                    <Link
                      href={`/rooms/${room.id}`}
                      className="flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-md hover:shadow-sky-500/20 transition-all cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Detail Page</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ================= HIGH-LEVEL ROOM DETAIL MODAL WITH FRAMER MOTION ================= */}
      <AnimatePresence>
        {selectedRoom && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedRoom(null)}
            ></motion.div>

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-3xl rounded-3xl glass-panel border border-white/15 bg-[#070b1a] p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto pr-1 space-y-6">
                {/* Banner Image */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b1a] via-transparent to-black/40"></div>

                  <div className="absolute bottom-4 left-4 sm:left-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-500/20 border border-sky-500/30 text-sky-400">
                      {selectedRoom.roomNumber}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {selectedRoom.name}
                    </h3>
                  </div>
                </div>

                {/* Price & Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/50 border border-white/5">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Nightly Tariff</p>
                    <p className="text-2xl font-extrabold text-white">
                      {selectedRoom.pricePerNight} <span className="text-xs font-normal text-slate-400">/ night</span>
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Room Telemetry</p>
                    <p className={`text-xs font-extrabold capitalize ${selectedRoom.status === "available" ? "text-emerald-400" : "text-amber-400"}`}>
                      {selectedRoom.status === "available" ? "Ready for Check-In ✓" : "Occupied / Booked All"}
                    </p>
                  </div>
                </div>

                {/* Overview */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Suite Overview & Features
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    {selectedRoom.description}
                  </p>
                </div>

                {/* Spec Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5 text-center">
                    <Maximize className="w-5 h-5 text-sky-400 mx-auto mb-1" />
                    <p className="text-[10px] text-slate-400 font-bold">AREA</p>
                    <p className="text-xs font-extrabold text-white mt-0.5">{selectedRoom.sqft} Sq Ft</p>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5 text-center">
                    <Users className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                    <p className="text-[10px] text-slate-400 font-bold">CAPACITY</p>
                    <p className="text-xs font-extrabold text-white mt-0.5">{selectedRoom.capacity} Guests</p>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5 text-center">
                    <BedDouble className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                    <p className="text-[10px] text-slate-400 font-bold">BEDDING</p>
                    <p className="text-xs font-extrabold text-white mt-0.5">King Luxury</p>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5 text-center">
                    <ShieldCheck className="w-5 h-5 text-rose-400 mx-auto mb-1" />
                    <p className="text-[10px] text-slate-400 font-bold">ISO SCORE</p>
                    <p className="text-xs font-extrabold text-white mt-0.5">100% Audit</p>
                  </div>
                </div>

                {/* Amenities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Included Amenities & Amenities
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {selectedRoom.amenities.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-900/40 border border-white/5"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reservation Form */}
                <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-4">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span>Instant Reserve / Book Suite</span>
                  </h4>

                  {bookingSuccess ? (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center space-x-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-sm">Reservation Logged & Dispatched!</p>
                        <p className="text-[11px] text-emerald-300 mt-0.5">
                          Concierge room key token generated for {selectedRoom.name}.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleBookNow} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        className="px-3.5 py-2.5 rounded-xl border border-white/10 bg-slate-900 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Work / Guest Email"
                        className="px-3.5 py-2.5 rounded-xl border border-white/10 bg-slate-900 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                      />
                      <div className="sm:col-span-2 flex justify-end gap-3 pt-2">
                        <Link
                          href={`/rooms/${selectedRoom.id}`}
                          className="px-4 py-2.5 rounded-xl text-xs font-bold border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
                        >
                          Full Detail Page
                        </Link>
                        <button
                          type="submit"
                          disabled={isBookingLoading}
                          className="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg hover:shadow-sky-500/25 transition-all cursor-pointer"
                        >
                          {isBookingLoading ? "Processing Booking..." : "Confirm & Reserve Suite"}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
