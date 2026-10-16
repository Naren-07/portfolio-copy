import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Award, Compass, Sparkles, Tv, Radio, Clapperboard } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 relative z-10">
      {/* 1. Hero Header */}
      <section className="px-5 sm:px-8 max-w-7xl mx-auto mb-20">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5A410A] font-bold block mb-3">
            ✦ Studio Origins & Leadership
          </span>
          <h1 className="font-display text-5xl sm:text-7xl text-[#0D0D0E] font-normal leading-[1.1] mb-6">
            Meet the Founder: <br />
            <span className="italic font-serif text-[#242428]">Sarika Sharma</span>
          </h1>
          <p className="text-[#242428] text-base sm:text-lg leading-relaxed font-sans font-medium">
            With decades of hands-on leadership at India&apos;s foremost media broadcast networks, Sarika Sharma founded EchoBridge Studio with a singular focus: transforming regional voices into global emotional powerhouses.
          </p>
        </div>
      </section>

      {/* 2. Founder Story Card (Rich Golden Obsidian Theme) */}
      <section className="px-5 sm:px-8 py-20 mb-24 glass-card border-y border-[rgba(168,126,26,0.35)] rounded-3xl relative overflow-hidden shadow-[0_20px_50px_rgba(90,65,10,0.18)] max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#0D0D0E] shadow-[0_20px_50px_rgba(90,65,10,0.25)]">
              <Image
                src="/assets/founder.jpg"
                alt="Sarika Sharma, Founder & Creative Director"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E]/60 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5A410A] font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#0D0D0E]" />
              <span>Founder&apos;s Note & Mission</span>
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#0D0D0E] font-medium leading-tight">
              &ldquo;Stories were never meant to stay in one language.&rdquo;
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#242428] leading-relaxed font-sans font-medium">
              <p>
                Throughout my broadcast career managing high-stakes media operations across <strong className="text-[#0D0D0E] font-bold">Zee Entertainment Enterprises Ltd.</strong>, <strong className="text-[#0D0D0E] font-bold">Star Network (Star India Pvt. Ltd.)</strong>, and <strong className="text-[#0D0D0E] font-bold">PlanetCast</strong>, one truth stood out: great storytelling knows no geographic boundaries, but poor localization kills cultural connection.
              </p>
              <p>
                EchoBridge Studio was built as a creative bridge — uniting veteran voice artists, linguistic transcreators, and next-generation AI workflows so that creators and streamers can deliver broadcast-grade content that feels authentically local everywhere.
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(168,126,26,0.3)] flex items-center justify-between">
              <div>
                <span className="font-display text-2xl text-[#0D0D0E] block font-bold">
                  Sarika Sharma
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#5A410A] font-bold">
                  Founder & Creative Director
                </span>
              </div>
              <a
                href="https://linkedin.com/in/sarikasharma06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#0D0D0E] hover:text-[#38383E] border-b-2 border-[#0D0D0E] pb-0.5 font-bold transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Broadcast Leadership Timeline */}
      <section className="px-5 sm:px-8 max-w-5xl mx-auto mb-24">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5A410A] font-bold block mb-2">
            ✦ Executive Media Background
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-[#0D0D0E] font-normal">
            The Journey to EchoBridge
          </h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-[rgba(168,126,26,0.35)] hidden md:block">
          {/* Timeline Item 1 */}
          <div className="relative flex items-center justify-between">
            <div className="w-[45%] text-right pr-8">
              <span className="font-mono text-xs text-[#5A410A] uppercase tracking-wider block mb-1 font-bold">
                Broadcasting Operations
              </span>
              <h3 className="font-display text-2xl text-[#0D0D0E] font-bold mb-1">
                Zee Entertainment Enterprises Ltd.
              </h3>
              <p className="text-xs text-[#242428] leading-relaxed font-medium">
                Supervising national channel operations, content transmission workflows, and multilingual broadcast delivery.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#111113] text-[#F7E49A] flex items-center justify-center shrink-0 z-10 shadow-md border border-[#DFB742]">
              <Tv className="w-4 h-4" />
            </div>
            <div className="w-[45%] pl-8" />
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex items-center justify-between">
            <div className="w-[45%] pr-8" />
            <div className="w-10 h-10 rounded-full bg-[#111113] text-[#F7E49A] flex items-center justify-center shrink-0 z-10 shadow-md border border-[#DFB742]">
              <Radio className="w-4 h-4" />
            </div>
            <div className="w-[45%] text-left pl-8">
              <span className="font-mono text-xs text-[#5A410A] uppercase tracking-wider block mb-1 font-bold">
                Network Leadership
              </span>
              <h3 className="font-display text-2xl text-[#0D0D0E] font-bold mb-1">
                Star Network (Star India Pvt. Ltd.)
              </h3>
              <p className="text-xs text-[#242428] leading-relaxed font-medium">
                Driving media operations across regional entertainment bouquets with strict broadcast quality control.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative flex items-center justify-between">
            <div className="w-[45%] text-right pr-8">
              <span className="font-mono text-xs text-[#5A410A] uppercase tracking-wider block mb-1 font-bold">
                Digital Distribution
              </span>
              <h3 className="font-display text-2xl text-[#0D0D0E] font-bold mb-1">
                PlanetCast Media Services
              </h3>
              <p className="text-xs text-[#242428] leading-relaxed font-medium">
                Spearheading high-volume cloud media ingest, playout pipelines, and multi-format distribution infrastructure.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#111113] text-[#F7E49A] flex items-center justify-center shrink-0 z-10 shadow-md border border-[#DFB742]">
              <Clapperboard className="w-4 h-4" />
            </div>
            <div className="w-[45%] pl-8" />
          </div>

          {/* Timeline Item 4 */}
          <div className="relative flex items-center justify-between">
            <div className="w-[45%] pr-8" />
            <div className="w-10 h-10 rounded-full bg-[#111113] text-[#F7E49A] flex items-center justify-center shrink-0 z-10 shadow-md border border-[#DFB742]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="w-[45%] text-left pl-8">
              <span className="font-mono text-xs text-[#5A410A] uppercase tracking-wider block mb-1 font-bold">
                Present · Studio Founding
              </span>
              <h3 className="font-display text-2xl text-[#0D0D0E] font-bold mb-1">
                EchoBridge Studio
              </h3>
              <p className="text-xs text-[#242428] leading-relaxed font-medium">
                Building a multi-format creative powerhouse serving OTT platforms, creators, and brands globally.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Timeline View */}
        <div className="space-y-6 md:hidden">
          {[
            {
              role: "Broadcasting Operations",
              company: "Zee Entertainment Enterprises Ltd.",
              desc: "Channel broadcast operations and multilingual network delivery.",
            },
            {
              role: "Network Operations",
              company: "Star Network (Star India Pvt. Ltd.)",
              desc: "Regional entertainment bouquets and broadcast quality assurance.",
            },
            {
              role: "Digital Distribution",
              company: "PlanetCast Media Services",
              desc: "Cloud media ingest, playout pipelines, and multi-format infrastructure.",
            },
            {
              role: "Present · Studio Leadership",
              company: "EchoBridge Studio",
              desc: "End-to-end voice, localization, and AI content production.",
            },
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl">
              <span className="font-mono text-[10px] uppercase text-[#5A410A] tracking-widest block mb-1 font-bold">
                {item.role}
              </span>
              <h3 className="font-display text-xl text-[#0D0D0E] font-bold mb-2">
                {item.company}
              </h3>
              <p className="text-xs text-[#242428] leading-relaxed font-sans font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Values Strip */}
      <section className="px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card glass-card-hover p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#111113] flex items-center justify-center mb-6 text-[#F7E49A] shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl text-[#0D0D0E] font-bold mb-3">
              Creativity
            </h3>
            <p className="text-xs text-[#242428] leading-relaxed font-sans font-medium">
              Storytelling always comes first. Technology and AI exist to amplify human emotion, not replace it.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#111113] flex items-center justify-center mb-6 text-[#F7E49A] shadow-sm">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl text-[#0D0D0E] font-bold mb-3">
              Cultural Insight
            </h3>
            <p className="text-xs text-[#242428] leading-relaxed font-sans font-medium">
              True localization requires deep respect for local dialects, regional humor, and colloquial rhythms.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#111113] flex items-center justify-center mb-6 text-[#F7E49A] shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl text-[#0D0D0E] font-bold mb-3">
              Voice Excellence
            </h3>
            <p className="text-xs text-[#242428] leading-relaxed font-sans font-medium">
              Uncompromising acoustic isolation, Neumann microphone lineups, and pristine 5.1 surround mastering.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
