"use client";

import React, { useState, useEffect } from "react";
import { Cpu, QrCode, ClipboardList, Thermometer, Radio, Send, Play } from "lucide-react";

export default function TechSpotlight() {
  const [activeSystem, setActiveSystem] = useState<"patrol" | "mep" | "iot">("patrol");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  // System specifics
  const systems = {
    patrol: {
      title: "Real-time Guard Patrol Sync",
      badge: "RFID / QR Checkpoints",
      desc: "Security guards scan NFC tags or QR codes at checkpoints. Location, timestamps, and photos sync instantly to the cloud command center, preventing gap coverages.",
      techs: ["GPS Geofencing", "QR Checkpoint Scanning", "Incident Photo Uploads"],
      logs: [
        "[09:40:02] Guard #04 patrolled Tower A, Sector-3.",
        "[09:40:05] QR tag 'T1-L3-GATE' verified successfully.",
        "[09:41:20] Guard #02 checked boundary fencing East. Normal.",
        "[09:43:10] Sync: 12 Checkpoints active. Coverage: 100%.",
      ],
    },
    mep: {
      title: "Smart MEP Ticketing Engine",
      badge: "Mobile Dispatch & SLA Tracker",
      desc: "Tenants or supervisors report plumbing/electrical faults. System automatically dispatches the nearest qualified engineer's mobile app, tracking response times.",
      techs: ["Automated Dispatch Logic", "Mobile Engineer Apps", "Real-time SLA Countdown"],
      logs: [
        "[10:12:30] Alert: Chiller-3 water pressure drop logged.",
        "[10:13:00] Ticket #MEP-884 generated. Priority: HIGH.",
        "[10:13:12] Auto-Assigned: Engineer Mahesh (MEP Specialist).",
        "[10:15:45] Engineer checked in at chiller plant. SLA: Met.",
      ],
    },
    iot: {
      title: "IoT Utility & Sewage Sensors",
      badge: "Real-Time Telemetry",
      desc: "Sensors continuously monitor sewage treatment plants (STP), water levels, and energy meters. Alerts trigger automatically if water pH or motor temperatures exceed safe margins.",
      techs: ["STP/WTP pH & Flow Sensors", "Water Tank Level Alerting", "HVAC Motor Temperature Monitors"],
      logs: [
        "[11:00:15] Telemetry: STP pH levels: 7.2 (Stable).",
        "[11:02:40] Water tank level: 82%. Pump #01 in standby.",
        "[11:05:00] Energy Meter #A3 read: 420 kWh. Power Factor: 0.98.",
        "[11:08:12] Sync: All 14 sensors communicating on protocol MQTT.",
      ],
    },
  };

  useEffect(() => {
    // Set initial logs
    setConsoleLogs(systems[activeSystem].logs);
  }, [activeSystem]);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);

    const simulationLogs = {
      patrol: [
        "[SIMULATING] Patrol scan request received.",
        "[SIMULATING] Verifying device location geofence... Success.",
        "[SIMULATING] Scan recorded: Guard #03 scanned checkpoint 'ROOF-ACCESS-02'.",
        "[SIMULATING] Checkpoint database updated. Command Center notified.",
      ],
      mep: [
        "[SIMULATING] Initiating test ticket dispatch.",
        "[SIMULATING] Searching for nearest active technician... Found.",
        "[SIMULATING] Notification sent: 'Breakdown in Generator-A'.",
        "[SIMULATING] Technician acknowledged. Transit status: ACTIVE.",
      ],
      iot: [
        "[SIMULATING] Fetching real-time telemetry frame...",
        "[SIMULATING] Sensor #STP-FLOW: 120 L/min. Status: normal.",
        "[SIMULATING] Sensor #WTP-pH: 7.4. Status: normal.",
        "[SIMULATING] Telemetry sweep complete. Database synchronized.",
      ],
    };

    let logIdx = 0;
    const interval = setInterval(() => {
      if (logIdx < simulationLogs[activeSystem].length) {
        setConsoleLogs((prev) => [...prev, simulationLogs[activeSystem][logIdx]]);
        logIdx++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1000);
  };

  return (
    <section id="tech" className="relative py-24 bg-slate-100 dark:bg-[#070b19] overflow-hidden border-t border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      {/* Background glow circle */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
            Operations Technology
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Tech-Driven Smart PMS
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
            We replace manual checksheets with smart digital flows. Experience real-time transparency and instant alerts across your estate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls - Column Left */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <button
                onClick={() => setActiveSystem("patrol")}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left cursor-pointer ${
                  activeSystem === "patrol"
                    ? "bg-slate-200 dark:bg-slate-900 border-sky-500/40 text-slate-900 dark:text-white shadow-lg"
                    : "border-slate-200 dark:border-white/5 bg-slate-200/40 dark:bg-slate-900/20 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/10"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <QrCode className="w-5 h-5 text-sky-500 dark:text-sky-400" />
                  <div>
                    <h4 className="text-sm font-bold">Guard Patrols</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">QR & NFC Logs</p>
                  </div>
                </div>
                <Radio className={`w-3.5 h-3.5 ${activeSystem === "patrol" ? "text-sky-500 dark:text-sky-400 animate-pulse" : "text-slate-400 dark:text-slate-600"}`} />
              </button>

              <button
                onClick={() => setActiveSystem("mep")}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left cursor-pointer ${
                  activeSystem === "mep"
                    ? "bg-slate-200 dark:bg-slate-900 border-sky-500/40 text-slate-900 dark:text-white shadow-lg"
                    : "border-slate-200 dark:border-white/5 bg-slate-200/40 dark:bg-slate-900/20 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/10"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <ClipboardList className="w-5 h-5 text-sky-500 dark:text-sky-400" />
                  <div>
                    <h4 className="text-sm font-bold">MEP Dispatch</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">Mobile Tickets</p>
                  </div>
                </div>
                <Radio className={`w-3.5 h-3.5 ${activeSystem === "mep" ? "text-sky-500 dark:text-sky-400 animate-pulse" : "text-slate-400 dark:text-slate-600"}`} />
              </button>

              <button
                onClick={() => setActiveSystem("iot")}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left cursor-pointer ${
                  activeSystem === "iot"
                    ? "bg-slate-200 dark:bg-slate-900 border-sky-500/40 text-slate-900 dark:text-white shadow-lg"
                    : "border-slate-200 dark:border-white/5 bg-slate-200/40 dark:bg-slate-900/20 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/10"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Thermometer className="w-5 h-5 text-sky-500 dark:text-sky-400" />
                  <div>
                    <h4 className="text-sm font-bold">IoT Utility Monitoring</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">STP Telemetry</p>
                  </div>
                </div>
                <Radio className={`w-3.5 h-3.5 ${activeSystem === "iot" ? "text-sky-500 dark:text-sky-400 animate-pulse" : "text-slate-400 dark:text-slate-600"}`} />
              </button>
            </div>

            {/* Quick Tech Specs list */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-200/40 dark:bg-slate-950/40 space-y-3">
              <h5 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">
                Features Active
              </h5>
              <ul className="space-y-2">
                {systems[activeSystem].techs.map((tech, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400"></span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Screen Preview - Column Right */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl glass-panel p-6 border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/20 min-h-[400px]">
            {/* Terminal Window Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/5 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-sky-500/10 rounded-lg text-sky-500 dark:text-sky-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {systems[activeSystem].title}
                    </h4>
                    <span className="text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded font-mono border border-slate-300 dark:border-white/5">
                      {systems[activeSystem].badge}
                    </span>
                  </div>
                </div>

                {/* Simulate Button */}
                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-300 cursor-pointer ${
                    isSimulating
                      ? "bg-slate-300 dark:bg-slate-800 border-slate-400 dark:border-slate-700 text-slate-500 cursor-not-allowed"
                      : "bg-sky-500/10 border-sky-500/20 text-sky-600 dark:text-sky-400 hover:bg-sky-500/20 dark:hover:bg-sky-500/25"
                  }`}
                >
                  <Play className="w-3 h-3 fill-current animate-pulse" />
                  <span>{isSimulating ? "Simulating..." : "Trigger Event"}</span>
                </button>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-6 font-medium">
                {systems[activeSystem].desc}
              </p>
            </div>

            {/* Live Console Output Log */}
            <div className="bg-slate-950/95 dark:bg-black/80 rounded-xl border border-slate-300 dark:border-white/5 p-4 font-mono text-[11px] text-sky-400 space-y-1.5 max-h-48 overflow-y-auto shadow-inner relative">
              <div className="absolute top-2 right-2 text-[9px] text-slate-500 uppercase tracking-widest select-none font-bold">
                live feed
              </div>
              {consoleLogs.map((log, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-slate-600 mr-2 flex-shrink-0">&gt;</span>
                  <span className={log.startsWith("[SIMULATING]") ? "text-emerald-400 font-bold" : "text-sky-300"}>
                    {log}
                  </span>
                </div>
              ))}
              <div className="w-2.5 h-3.5 bg-sky-400 inline-block animate-pulse mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
