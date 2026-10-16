"use client";

import { useState } from "react";
import { Language } from "@/lib/types";
import { Globe } from "lucide-react";

interface LanguageMapProps {
  languages: Language[];
}

export default function LanguageMap({ languages }: LanguageMapProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "indian" | "international">("all");
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  const filtered = languages.filter((l) => {
    if (activeFilter === "all") return true;
    return l.group === activeFilter;
  });

  return (
    <div className="flex flex-col gap-10">
      {/* Interactive Map Canvas Container */}
      <div className="relative w-full aspect-[21/9] min-h-[300px] sm:min-h-[420px] rounded-3xl overflow-hidden glass-card border border-[rgba(168,126,26,0.35)] shadow-[0_16px_40px_rgba(90,65,10,0.18)] flex items-center justify-center p-6">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#A87E1A_1px,transparent_1px),linear-gradient(to_bottom,#A87E1A_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

        {/* Global Connection SVG */}
        <svg
          viewBox="0 0 1000 450"
          className="w-full h-full relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle World Map Silhouette Points */}
          <g opacity="0.35" fill="#0D0D0E">
            {/* North America */}
            <circle cx="220" cy="140" r="14" />
            <circle cx="250" cy="160" r="10" />
            <circle cx="190" cy="180" r="12" />
            {/* South America */}
            <circle cx="310" cy="300" r="16" />
            <circle cx="330" cy="340" r="12" />
            {/* Europe */}
            <circle cx="510" cy="130" r="14" />
            <circle cx="530" cy="150" r="12" />
            {/* Middle East */}
            <circle cx="580" cy="200" r="12" />
            {/* Africa */}
            <circle cx="530" cy="260" r="16" />
            <circle cx="560" cy="320" r="14" />
            {/* Southeast Asia */}
            <circle cx="760" cy="250" r="14" />
            <circle cx="790" cy="270" r="12" />
            {/* East Asia */}
            <circle cx="780" cy="160" r="14" />
            {/* Australia */}
            <circle cx="830" cy="350" r="16" />
          </g>

          {/* India Hub (Core Pulsing Node) */}
          <g>
            <circle cx="670" cy="225" r="28" fill="#111113" fillOpacity="0.2" className="animate-ping" />
            <circle cx="670" cy="225" r="16" fill="#DFB742" fillOpacity="0.4" />
            <circle cx="670" cy="225" r="8" fill="#0D0D0E" />
            <text x="670" y="260" textAnchor="middle" fill="#0D0D0E" fontSize="11" fontFamily="sans-serif" letterSpacing="2" fontWeight="700">
              INDIA HUB
            </text>
          </g>

          {/* Radiating Arcs from India to Global Hubs */}
          <path
            d="M 670 225 Q 450 60 220 140"
            stroke="#0D0D0E"
            strokeWidth="1.8"
            strokeDasharray="6 4"
            opacity="0.6"
          />
          <path
            d="M 670 225 Q 570 120 510 130"
            stroke="#0D0D0E"
            strokeWidth="1.8"
            strokeDasharray="6 4"
            opacity="0.6"
          />
          <path
            d="M 670 225 Q 620 180 580 200"
            stroke="#0D0D0E"
            strokeWidth="1.8"
            strokeDasharray="6 4"
            opacity="0.6"
          />
          <path
            d="M 670 225 Q 720 220 760 250"
            stroke="#0D0D0E"
            strokeWidth="1.8"
            strokeDasharray="6 4"
            opacity="0.6"
          />
          <path
            d="M 670 225 Q 500 240 310 300"
            stroke="#0D0D0E"
            strokeWidth="1.8"
            strokeDasharray="6 4"
            opacity="0.6"
          />
        </svg>

        {/* Selected Language Floating Card */}
        {selectedLanguage && (
          <div className="absolute bottom-6 left-6 z-20 glass-card px-5 py-3.5 rounded-2xl border-2 border-[#0D0D0E] shadow-xl animate-in fade-in duration-150">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#5A410A] font-bold block">
              {selectedLanguage.group === "indian" ? "Indian Regional" : "International Territory"}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xl font-display font-bold text-[#0D0D0E]">
                {selectedLanguage.name}
              </span>
              <span className="text-base text-[#5A410A] font-serif font-semibold">
                ({selectedLanguage.native})
              </span>
            </div>
            {selectedLanguage.description && (
              <p className="text-xs text-[#242428] mt-1 max-w-xs font-sans font-medium">
                {selectedLanguage.description}
              </p>
            )}
          </div>
        )}

        <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-[rgba(255,255,255,0.85)] px-4 py-2 rounded-full border border-[rgba(168,126,26,0.35)] shadow-sm">
          <Globe className="w-3.5 h-3.5 text-[#0D0D0E]" />
          <span className="font-mono text-[11px] text-[#0D0D0E] tracking-wider uppercase font-bold">
            20+ Simultaneous Dialects
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all border ${
            activeFilter === "all"
              ? "bg-[#111113] text-[#F7E49A] border-[#111113] shadow-md"
              : "bg-[rgba(255,255,255,0.65)] text-[#0D0D0E] border-[rgba(168,126,26,0.35)] hover:border-[#0D0D0E]"
          }`}
        >
          All Languages ({languages.length})
        </button>
        <button
          onClick={() => setActiveFilter("indian")}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all border ${
            activeFilter === "indian"
              ? "bg-[#111113] text-[#F7E49A] border-[#111113] shadow-md"
              : "bg-[rgba(255,255,255,0.65)] text-[#0D0D0E] border-[rgba(168,126,26,0.35)] hover:border-[#0D0D0E]"
          }`}
        >
          Indian Dialects (9)
        </button>
        <button
          onClick={() => setActiveFilter("international")}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all border ${
            activeFilter === "international"
              ? "bg-[#111113] text-[#F7E49A] border-[#111113] shadow-md"
              : "bg-[rgba(255,255,255,0.65)] text-[#0D0D0E] border-[rgba(168,126,26,0.35)] hover:border-[#0D0D0E]"
          }`}
        >
          International (12)
        </button>
      </div>

      {/* Language Chips Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
        {filtered.map((lang) => {
          const isSelected = selectedLanguage?.name === lang.name;
          return (
            <button
              key={lang.name}
              onClick={() => setSelectedLanguage(lang)}
              className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                isSelected
                  ? "bg-[rgba(255,255,255,0.9)] border-2 border-[#0D0D0E] shadow-md scale-[1.02]"
                  : "glass-card hover:border-[#0D0D0E]"
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#5A410A] font-bold">
                  {lang.code.toUpperCase()}
                </span>
                <span className="font-serif text-sm text-[#5A410A] font-bold">
                  {lang.native}
                </span>
              </div>
              <span className="font-display text-base font-bold text-[#0D0D0E]">
                {lang.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
