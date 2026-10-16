import { Suspense } from "react";
import ProjectBriefForm from "@/components/ProjectBriefForm";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-5 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5A410A] font-bold block mb-3">
          ✦ Start a Project
        </span>
        <h1 className="font-display text-5xl sm:text-7xl text-[#0D0D0E] font-normal leading-[1.1] mb-6">
          Let’s Build Stories That Travel.
        </h1>
        <p className="text-[#242428] text-base sm:text-lg leading-relaxed font-sans font-medium">
          Whether you need a multi-language OTT dubbing season, a high-impact vertical micro-drama, or ongoing YouTube creator localization, complete the brief below for a detailed proposal within 24 hours.
        </p>
      </div>

      {/* Direct Contact Fast-Track Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
        <a
          href="tel:+918377086807"
          className="glass-card glass-card-hover p-6 rounded-2xl flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-[#111113] text-[#F7E49A] flex items-center justify-center shrink-0 shadow-sm border border-[#DFB742]">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase text-[#5A410A] tracking-wider block font-bold">
              Call Direct
            </span>
            <span className="font-display text-lg text-[#0D0D0E] font-bold block">
              +91 8377086807
            </span>
          </div>
        </a>

        <a
          href="mailto:echobridge.studio6@gmail.com"
          className="glass-card glass-card-hover p-6 rounded-2xl flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-[#111113] text-[#F7E49A] flex items-center justify-center shrink-0 shadow-sm border border-[#DFB742]">
            <Mail className="w-5 h-5" />
          </div>
          <div className="truncate">
            <span className="font-mono text-[10px] uppercase text-[#5A410A] tracking-wider block font-bold">
              Email Queries
            </span>
            <span className="font-display text-base text-[#0D0D0E] font-bold block truncate">
              echobridge.studio6@gmail.com
            </span>
          </div>
        </a>

        <a
          href="https://wa.me/918377086807"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card glass-card-hover p-6 rounded-2xl flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-[#111113] text-[#F7E49A] flex items-center justify-center shrink-0 shadow-sm border border-[#DFB742]">
            <MessageCircle className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase text-[#5A410A] tracking-wider block font-bold">
              WhatsApp Direct
            </span>
            <span className="font-display text-lg text-[#0D0D0E] font-bold block">
              Chat With Founder
            </span>
          </div>
        </a>
      </div>

      {/* Main Interactive Brief Form */}
      <Suspense fallback={<div className="text-center py-12 font-mono text-xs text-[#0D0D0E]">Loading Brief Form...</div>}>
        <ProjectBriefForm />
      </Suspense>
    </div>
  );
}
