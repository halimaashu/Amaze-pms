"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";

interface ChatMessage {
  role: "user" | "bot";
  text: string;
}

const FAQ_RESPONSES: Record<string, string> = {
  services:
    "We offer 4 core verticals: Soft Services (housekeeping, pantry), Technical MEP (electrical, plumbing, HVAC, STP), Security & Guarding (armed/unarmed, CCTV ops), and Asset Management (lifecycle tracking, AMC).",
  pricing:
    "Our pricing is customized per property. Use our Workforce Estimator on this page, or contact us for a detailed proposal tailored to your built-up area and service scope.",
  security:
    "Our security personnel undergo rigorous police verification, background checks, and naval-grade training protocols. We deploy armed and unarmed guards with real-time GPS-tracked patrol systems.",
  mep:
    "Our MEP team handles Sewage Treatment Plants (STP), Water Treatment Plants (WTP), HVAC maintenance, DG sets, electrical panels, plumbing, and fire safety systems — all managed under strict ISO SOPs.",
  contact:
    "You can reach us at info@amazepms.com or call +91 98850 14883. Our HQ is at High Mark Chambers, Khajaguda X Road, Cyberabad, Hyderabad.",
  heritage:
    "Amaze PMS was founded by Indian Navy veteran Mr. Subhani Abdul in 2001. Our military roots drive a culture of absolute discipline, integrity, and crisis leadership across all 15,000+ staff.",
  compliance:
    "We maintain 100% statutory compliance including ESI, PF, minimum wages, and labor welfare. We are ISO 9001:2015 and ISO 14001:2015 certified.",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("service") || lower.includes("what do you do") || lower.includes("offer"))
    return FAQ_RESPONSES.services;
  if (lower.includes("price") || lower.includes("cost") || lower.includes("quote") || lower.includes("estimate"))
    return FAQ_RESPONSES.pricing;
  if (lower.includes("security") || lower.includes("guard") || lower.includes("cctv"))
    return FAQ_RESPONSES.security;
  if (lower.includes("mep") || lower.includes("plumbing") || lower.includes("electrical") || lower.includes("hvac"))
    return FAQ_RESPONSES.mep;
  if (lower.includes("contact") || lower.includes("phone") || lower.includes("email") || lower.includes("address"))
    return FAQ_RESPONSES.contact;
  if (lower.includes("navy") || lower.includes("heritage") || lower.includes("founder") || lower.includes("military"))
    return FAQ_RESPONSES.heritage;
  if (lower.includes("compliance") || lower.includes("iso") || lower.includes("certified"))
    return FAQ_RESPONSES.compliance;
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey"))
    return "Hello! 👋 I'm the Amaze PMS assistant. Ask me about our services, pricing, security, MEP operations, or compliance standards!";
  return "I appreciate your question! For detailed inquiries, please use our contact form or call us at +91 98850 14883. You can also ask me about: services, pricing, security, MEP, compliance, or our Navy heritage.";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Welcome to Amaze PMS! 👋 I'm your AI assistant. Ask me anything about our facility management services, pricing, or security protocols.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(userMsg.text);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Chat"
        className={`fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group ${
          isOpen
            ? "bg-slate-700 dark:bg-slate-700 rotate-0"
            : "bg-gradient-to-tr from-sky-500 to-emerald-500 hover:scale-110 hover:shadow-sky-500/40"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></span>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-[60] w-[380px] max-w-[calc(100vw-2rem)] transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl border border-white/10 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col h-[500px] bg-white dark:bg-[#0a0f1e]">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-sky-500 to-emerald-500 flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Amaze AI Assistant</h4>
              <p className="text-[10px] text-white/80 font-medium">Powered by Gemini • Always Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed ${
                    msg.role === "user"
                      ? "bg-sky-500 text-white rounded-br-sm"
                      : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 rounded-bl-sm border border-slate-200 dark:border-white/5"
                  }`}
                >
                  {msg.role === "bot" && (
                    <Bot className="w-3.5 h-3.5 text-sky-400 inline mr-1.5 -mt-0.5" />
                  )}
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/5 px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex space-x-1.5">
                    <span className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#060913]">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about services, pricing..."
                className="flex-1 px-4 py-2.5 rounded-xl text-xs bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 text-white hover:opacity-90 transition-opacity disabled:opacity-40"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
