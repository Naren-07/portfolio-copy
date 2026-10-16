import { getLanguages } from "@/lib/data";
import LanguageMap from "@/components/LanguageMap";
import GoldenIndiaMap from "@/components/GoldenIndiaMap";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function LanguagesPage() {
  const languages = getLanguages();

  return (
    <div className="pt-32 pb-24 px-5 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5A410A] font-bold block mb-3 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#0D0D0E]" />
          <span>Pan-India & Global Acoustic Coverage</span>
        </span>
        <h1 className="font-display text-5xl sm:text-7xl text-[#0D0D0E] font-normal leading-[1.1] mb-6">
          20+ Languages. <br />
          <span className="italic font-serif text-[#242428]">Infinite Cultural Resonance.</span>
        </h1>
        <p className="text-[#242428] text-base sm:text-lg leading-relaxed font-sans font-medium">
          A great story deserves to be understood everywhere. From the heart of India&apos;s linguistic tapestry to Europe, the Americas, and Southeast Asia, we ensure your characters sound authentic in every market.
        </p>
      </div>

      {/* Featured: Golden Map of India Regional Hubs */}
      <div className="mb-24">
        <div className="mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#5A410A] font-bold block mb-1">
            ✦ National Dialect Corridors
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#0D0D0E] font-bold">
            India Recording Bays & Regional Centers
          </h2>
        </div>
        <GoldenIndiaMap />
      </div>

      {/* Interactive Global Dialect Map Component */}
      <div className="mb-20">
        <div className="mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#5A410A] font-bold block mb-1">
            ✦ Global Dialect Matrix
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#0D0D0E] font-bold">
            International Language Casting & Script Transcreation
          </h2>
        </div>
        <LanguageMap languages={languages} />
      </div>

      {/* Cultural Nuance Quality Standards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 rounded-3xl glass-card mb-20">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#5A410A] font-bold block mb-2">
            01 · Colloquial Transcreation
          </span>
          <p className="text-xs text-[#242428] leading-relaxed font-medium">
            We adapt idiomatic expressions, humor, and cultural references so dialogues sound natural, not machine-translated.
          </p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#5A410A] font-bold block mb-2">
            02 · Precision Lip-Sync Matching
          </span>
          <p className="text-xs text-[#242428] leading-relaxed font-medium">
            Our dialogue adapters match mouth movements, labial consonants, and phrase duration with frame-perfect precision.
          </p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#5A410A] font-bold block mb-2">
            03 · 100+ Native Voice Artists
          </span>
          <p className="text-xs text-[#242428] leading-relaxed font-medium">
            Every dialect is performed by vetted native voice talent directed by experienced regional language supervisors.
          </p>
        </div>
      </div>

      {/* CTA Band */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
        <h3 className="font-display text-3xl sm:text-4xl text-[#0D0D0E] font-normal mb-3">
          Need a dialect not listed here?
        </h3>
        <p className="text-sm text-[#242428] mb-6 font-sans font-medium">
          Our international casting network auditions and sources bespoke native talent within 48 to 72 hours.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider text-[#F7E49A] bg-[#111113] hover:bg-[#242428] shadow-md transition-all"
        >
          <span>Request Custom Language Cast</span>
          <ArrowUpRight className="w-4 h-4 text-[#F7E49A]" />
        </Link>
      </div>
    </div>
  );
}
