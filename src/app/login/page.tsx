"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Lock,
  Mail,
  User,
  Phone,
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle2,
  KeyRound,
  ArrowLeft,
  Sparkles
} from "lucide-react";

export default function AuthPage() {
  // Default to signup as requested
  const [mode, setMode] = useState<"signup" | "login" | "forgot">("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // Signup Form State
  const [fullName, setFullName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Login Form State
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  // Forgot Password State
  const [resetEmail, setResetEmail] = useState("");

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupEmail || !signupPassword || !fullName) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg(`Welcome aboard, ${fullName}! Your account has been created successfully.`);
    }, 1200);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg("Welcome back! Authenticated successfully.");
    }, 1000);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg(`Password reset instructions have been sent to ${resetEmail}.`);
    }, 1000);
  };

  const autofillDemoUser = () => {
    setMode("login");
    setLoginEmail("user@amazepms.com");
    setLoginPassword("AmazeUser2026!");
  };

  return (
    <div className="min-h-screen bg-[#040711] text-white flex flex-col justify-between relative overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-500/15 via-emerald-500/10 to-transparent rounded-full blur-[140px] pointer-events-none"></div>

      {/* Navigation Header */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="flex items-center justify-center w-full h-full rounded-xl bg-[#040711]">
              <Shield className="w-5 h-5 text-sky-400 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-sky-500 to-emerald-500 rounded-xl blur-sm opacity-30 group-hover:opacity-60 transition-opacity"></div>
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
              AMAZE <span className="text-sky-400 font-medium">PMS</span>
            </span>
            <p className="text-[9px] tracking-[0.2em] uppercase text-slate-400 font-bold -mt-1">
              Property Solutions
            </p>
          </div>
        </Link>

        <Link
          href="/"
          className="flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-white/5 border border-white/10 px-4 py-2 rounded-xl"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Main Container */}
      <main className="relative z-20 flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          {/* Card Wrapper */}
          <div className="rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 bg-slate-900/35 shadow-2xl backdrop-blur-2xl">
            {/* Header Title */}
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-2xl font-extrabold text-white">
                {mode === "signup"
                  ? "Create Account"
                  : mode === "login"
                  ? "Welcome Back"
                  : "Reset Password"}
              </h2>
              <p className="text-xs text-slate-400 font-medium">
                {mode === "signup"
                  ? "Join Amaze PMS to manage properties & requests"
                  : mode === "login"
                  ? "Sign in to access your dashboard"
                  : "Enter your email to receive password instructions"}
              </p>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex rounded-xl bg-slate-950/80 p-1 border border-white/5 mb-6">
              <button
                type="button"
                onClick={() => {
                  setMode("signup");
                  setSuccessMsg("");
                }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  mode === "signup"
                    ? "bg-gradient-to-r from-sky-500/20 to-emerald-500/20 text-white border border-sky-500/30 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Create Account
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setSuccessMsg("");
                }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  mode === "login"
                    ? "bg-gradient-to-r from-sky-500/20 to-emerald-500/20 text-white border border-sky-500/30 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Sign In
              </button>
            </div>

            {/* Success Feedback Alert */}
            {successMsg && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{successMsg}</span>
              </div>
            )}

            {/* 1. SIGN UP FORM (DEFAULT) */}
            {mode === "signup" && (
              <form onSubmit={handleSignupSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Alex Morgan"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-slate-950/80 text-xs text-white focus:outline-none focus:border-sky-500/50 transition-colors placeholder-slate-600"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-slate-950/80 text-xs text-white focus:outline-none focus:border-sky-500/50 transition-colors placeholder-slate-600"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      value={signupPhone}
                      onChange={(e) => setSignupPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-slate-950/80 text-xs text-white focus:outline-none focus:border-sky-500/50 transition-colors placeholder-slate-600"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Password *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      placeholder="Minimum 8 characters"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-white/10 bg-slate-950/80 text-xs text-white focus:outline-none focus:border-sky-500/50 transition-colors placeholder-slate-600"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <div className="pt-1">
                  <label className="flex items-start space-x-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded border-slate-700 bg-slate-900 text-sky-400 focus:ring-0 cursor-pointer"
                    />
                    <span className="text-[11px] text-slate-400 leading-relaxed font-medium">
                      I agree to the <span className="text-sky-400 hover:underline">Terms of Service</span> & <span className="text-sky-400 hover:underline">Privacy Policy</span>.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg hover:shadow-sky-500/25 transition-all duration-300 disabled:opacity-50 cursor-pointer text-xs mt-2"
                >
                  {isSubmitting ? (
                    <span>Creating Your Account...</span>
                  ) : (
                    <>
                      <span>Create Account</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="text-center pt-2">
                  <p className="text-xs text-slate-400">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="text-sky-400 font-bold hover:underline cursor-pointer"
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </form>
            )}

            {/* 2. SIGN IN FORM */}
            {mode === "login" && (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-slate-950/80 text-xs text-white focus:outline-none focus:border-sky-500/50 transition-colors placeholder-slate-600"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setMode("forgot")}
                      className="text-[11px] text-sky-400 hover:text-sky-300 font-semibold cursor-pointer"
                    >
                      Forgot?
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-white/10 bg-slate-950/80 text-xs text-white focus:outline-none focus:border-sky-500/50 transition-colors placeholder-slate-600"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center space-x-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-sky-400 focus:ring-0 cursor-pointer"
                    />
                    <span className="text-xs text-slate-400 font-medium">Remember me</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg hover:shadow-sky-500/25 transition-all duration-300 disabled:opacity-50 cursor-pointer text-xs mt-2"
                >
                  {isSubmitting ? (
                    <span>Signing In...</span>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="text-center pt-2">
                  <p className="text-xs text-slate-400">
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("signup")}
                      className="text-sky-400 font-bold hover:underline cursor-pointer"
                    >
                      Create Account
                    </button>
                  </p>
                </div>
              </form>
            )}

            {/* 3. FORGOT PASSWORD FORM */}
            {mode === "forgot" && (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mx-auto">
                    <KeyRound className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Registered Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-slate-950/80 text-xs text-white focus:outline-none focus:border-sky-500/50 transition-colors placeholder-slate-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg hover:shadow-sky-500/25 transition-all duration-300 disabled:opacity-50 cursor-pointer text-xs"
                >
                  {isSubmitting ? <span>Sending...</span> : <span>Send Reset Instructions</span>}
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="text-xs text-slate-400 hover:text-white font-semibold cursor-pointer"
                  >
                    ← Back to Sign In
                  </button>
                </div>
              </form>
            )}

            {/* Quick Fill Button */}
            <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-500 text-[11px]">Testing demo form?</span>
              <button
                type="button"
                onClick={autofillDemoUser}
                className="flex items-center space-x-1 text-[11px] font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer bg-sky-500/10 px-2.5 py-1 rounded-lg border border-sky-500/20"
              >
                <Sparkles className="w-3 h-3" />
                <span>Autofill Sample User</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 w-full max-w-7xl mx-auto px-4 py-6 text-center text-xs text-slate-500 font-medium">
        <p>© 2026 Amaze Property Management Solutions Pvt. Ltd.</p>
      </footer>
    </div>
  );
}
