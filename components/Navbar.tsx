"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/languages", label: "Languages" },
    { href: "/studio", label: "Studio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(231,183,169,0.88)] backdrop-blur-md border-b border-[rgba(17,17,19,0.18)] py-3 shadow-[0_4px_25px_rgba(110,48,38,0.12)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo & Brand Emblem - explicitly sized width=40 height=40 */}
          <Link href="/" className="flex items-center gap-3.5 group select-none shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0D0D0E] shadow-sm shrink-0 flex items-center justify-center">
              <Image
                src="/assets/echobridge-emblem.jpg"
                alt="EchoBridge Studio Emblem"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover shrink-0"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg tracking-[0.2em] font-bold text-[#0D0D0E] group-hover:text-[#6B372E] transition-colors uppercase leading-tight">
                EchoBridge
              </span>
              <span className="text-[9px] tracking-[0.32em] font-mono text-[#241E1F] uppercase leading-tight font-semibold">
                Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Equal Spacing */}
          <nav className="hidden lg:flex items-center gap-[var(--nav-gap)]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] transition-all relative py-1.5 select-none font-semibold ${
                    isActive
                      ? "text-[#0D0D0E]"
                      : "text-[#241E1F] hover:text-[#0D0D0E]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0D0D0E]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons with Equal Height & Precise Spacing */}
          <div className="hidden md:flex items-center gap-[var(--cta-gap)]">
            {/* Outline Button: Join Roster */}
            <Link
              href="/join-roster"
              className="h-[var(--btn-h)] px-[var(--btn-px)] rounded-full text-xs font-semibold tracking-wider text-[#0D0D0E] border-2 border-[#0D0D0E] bg-transparent hover:bg-[#111113] hover:text-[#FCE7E1] transition-all duration-300 flex items-center justify-center whitespace-nowrap active:scale-[0.98]"
            >
              <span>Join Roster</span>
            </Link>

            {/* Filled Button: Start a Project */}
            <Link
              href="/contact"
              className="h-[var(--btn-h)] px-[var(--btn-px)] rounded-full text-xs font-semibold tracking-wider text-[#FCE7E1] bg-[#111113] hover:bg-[#241E1F] shadow-[0_4px_16px_rgba(17,17,19,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FCE7E1]" />
              <span>Start a Project</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0D0D0E] hover:text-[#38383E] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[rgba(231,183,169,0.98)] backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-display tracking-widest uppercase transition-colors flex items-center justify-between font-semibold ${
                    isActive ? "text-[#0D0D0E]" : "text-[#241E1F] hover:text-[#0D0D0E]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#0D0D0E]" />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-[rgba(17,17,19,0.2)]">
            <Link
              href="/join-roster"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center h-12 rounded-full text-xs font-semibold tracking-wider text-[#0D0D0E] border-2 border-[#0D0D0E] flex items-center justify-center"
            >
              Join Talent Roster
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center h-12 rounded-full text-xs font-semibold tracking-wider text-[#FCE7E1] bg-[#111113] shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#FCE7E1]" />
              <span>Start a Project</span>
            </Link>
            <p className="text-center font-mono text-[11px] text-[#241E1F] mt-2 font-medium">
              echobridge.studio6@gmail.com · +91 8377086807
            </p>
          </div>
        </div>
      )}
    </>
  );
}
