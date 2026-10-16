import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, Sparkles, Globe, CheckCircle2, MessageCircle } from "lucide-react";
import { getFeaturedProjects, getServices, getStudioData, getFaqs, getLanguages } from "@/lib/data";
import FaqAccordion from "@/components/FaqAccordion";
import GoldenIndiaMap from "@/components/GoldenIndiaMap";
import PartnersSection from "@/components/PartnersSection";
import StudioHeroBackground from "@/components/StudioHeroBackground";
import { getOrganizationJsonLd, getFaqJsonLd } from "@/lib/seo";

export default function HomePage() {
  const featuredWork = getFeaturedProjects();
  const services = getServices();
  const studio = getStudioData();
  const faqs = getFaqs();
  const languages = getLanguages();

  const orgJsonLd = getOrganizationJsonLd();
  const faqJsonLd = getFaqJsonLd(faqs);

  return (
    <div className="flex flex-col gap-0 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. HERO SECTION WITH STUDIO ANIMATIONS */}
      <section className="relative min-h-[105vh] flex items-center justify-center pt-32 pb-44 px-5 sm:px-8 overflow-hidden">
        {/* Studio Hero Animated Background (Speakers, Waves, Storyboard, Timeline, EQ) */}
        <StudioHeroBackground />

        <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">
          {/* Top mono indicator */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[rgba(255,245,242,0.75)] backdrop-blur-md border border-[rgba(183,114,100,0.35)] mb-8 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0D0D0E] font-bold">
              REC · GLOBAL VOICE & AI PRODUCTION
            </span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#0D0D0E] font-normal leading-[1.05] tracking-tight max-w-5xl mb-6">
            Bridging Stories <br className="hidden sm:inline" />
            <span className="italic font-serif text-[#241E1F]">Across Worlds.</span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-base sm:text-xl text-[#241E1F] max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            AI-powered content, localization, and broadcast-certified voice production — so your story resonates with native impact everywhere.
          </p>

          {/* Dual Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-[#FCE7E1] bg-[#111113] hover:bg-[#241E1F] shadow-[0_4px_20px_rgba(17,17,19,0.25)] hover:scale-105 active:scale-[0.98] transition-all duration-300"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#FCE7E1]" />
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-[#0D0D0E] border-2 border-[#0D0D0E] bg-[rgba(255,255,255,0.4)] backdrop-blur-sm hover:bg-[#111113] hover:text-[#FCE7E1] transition-all duration-300"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Explore Selected Work</span>
            </Link>
          </div>

          {/* Key Metric Snapshot */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 pt-10 border-t border-[rgba(183,114,100,0.35)] w-full max-w-4xl">
            {studio.stats.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#0D0D0E]">
                  {s.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#6B372E] mt-1 text-center font-bold">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. GENRE MARQUEE SECTION */}
      <section className="py-10 bg-[rgba(255,245,242,0.45)] border-y border-[rgba(183,114,100,0.25)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 mb-5 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#6B372E] font-bold">
            GENRES · STORYTELLING · AUDIO & VISUAL ADAPTATION
          </span>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-6">
            {[
              "ROMANCE & DRAMA",
              "THRILLER & CRIME",
              "MYTHOLOGY & FANTASY",
              "VOICE DUBBING",
              "AI MICRO-DRAMAS",
              "CULTURAL LOCALIZATION",
              "YOUTUBE SERIALS",
              "SPATIAL AUDIO",
              "ROMANCE & DRAMA",
              "THRILLER & CRIME",
              "MYTHOLOGY & FANTASY",
              "VOICE DUBBING",
              "AI MICRO-DRAMAS",
              "CULTURAL LOCALIZATION",
            ].map((genre, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-full bg-[rgba(255,255,255,0.75)] border border-[rgba(183,114,100,0.35)] whitespace-nowrap text-xs font-mono tracking-widest text-[#0D0D0E] flex items-center gap-3 shrink-0 shadow-sm font-semibold"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0D0D0E]" />
                <span>{genre}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUNDER & STUDIO PHILOSOPHY */}
      <section className="py-24 px-5 sm:px-8 bg-[rgba(255,245,242,0.5)] border-y border-[rgba(183,114,100,0.25)] relative overflow-hidden backdrop-blur-sm">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6B372E] font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#0D0D0E]" />
                <span>Founder & Executive Leadership</span>
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#0D0D0E] font-normal leading-tight">
                One Vision. <br />
                <span className="italic font-serif text-[#241E1F]">Infinite Stories.</span>
              </h2>
              <blockquote className="text-xl sm:text-2xl text-[#0D0D0E] font-display italic leading-relaxed border-l-4 border-[#0D0D0E] pl-6 my-2 bg-[rgba(255,255,255,0.55)] py-4 rounded-r-xl shadow-sm">
                &ldquo;We don’t just translate words — we translate emotions, timing, and cultural soul so every narrative feels born in that tongue.&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-[#241E1F] leading-relaxed font-sans font-medium">
                EchoBridge Studio was founded by media broadcast veteran <strong className="text-[#0D0D0E] font-bold">Sarika Sharma</strong> to bridge the gap between world-class content creators and regional audiences worldwide. Backed by high-stakes operational leadership across India’s premier broadcast networks, we combine TPN-grade acoustic mastering with next-generation AI workflows for unmatched cultural fidelity.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0D0D0E] hover:text-[#38383E] border-b-2 border-[#0D0D0E] pb-1 font-bold transition-all"
                >
                  <span>Meet Founder Sarika Sharma & Full Journey</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#0D0D0E] shadow-[0_20px_50px_rgba(110,48,38,0.22)]">
                <Image
                  src="/assets/founder.jpg"
                  alt="Founder Sarika Sharma"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E]/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[rgba(255,255,255,0.92)] backdrop-blur-md p-5 rounded-2xl shadow-[0_12px_40px_rgba(110,48,38,0.2)] border-2 border-[#0D0D0E] max-w-xs">
                <span className="font-mono text-[10px] text-[#6B372E] uppercase tracking-widest block mb-1 font-bold">
                  Founder & Creative Director
                </span>
                <span className="font-display text-xl text-[#0D0D0E] font-bold block">
                  Sarika Sharma
                </span>
                <span className="text-xs text-[#241E1F] font-sans font-semibold mt-0.5 block">
                  <span className="text-[#0D0D0E]">Zee</span> · <span className="text-[#0D0D0E]">Star Network</span> · <span className="text-[#0D0D0E]">PlanetCast</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SNAPSHOT */}
      <section className="py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6B372E] font-bold block mb-2">
                ✦ Three Pillars of Excellence
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0D0D0E] font-normal">
                Human Craft. AI Speed. Web Engineering.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0D0D0E] font-bold hover:underline transition-colors"
            >
              <span>Explore All {services.length} Capabilities</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <div
                key={service.slug}
                className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#6B372E] font-bold">
                      {service.pillarTitle}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#111113]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#0D0D0E] font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#241E1F] leading-relaxed mb-6 font-sans font-medium">
                    {service.tagline}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-xs text-[#0D0D0E] flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D0D0E] shrink-0" />
                        <span className="truncate text-[#241E1F]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0D0D0E] hover:underline pt-4 border-t border-[rgba(183,114,100,0.25)] transition-colors"
                >
                  <span>Inquire About {service.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SELECTED WORK SHOWCASE */}
      <section className="py-24 px-5 sm:px-8 bg-[rgba(255,245,242,0.45)] border-t border-[rgba(183,114,100,0.25)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6B372E] font-bold block mb-2">
                ✦ Portfolio Showcase
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0D0D0E] font-normal">
                Stories Carried Across Borders
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0D0D0E] font-bold hover:underline transition-colors"
            >
              <span>View Full Archive ({featuredWork.length})</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredWork.slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E]/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 z-10 bg-[#111113]/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#FCE7E1] border border-[rgba(247,210,201,0.3)] font-semibold">
                    {project.category} · {project.format}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-mono text-[#6B372E] font-bold mb-2">
                    <span>{project.client}</span>
                    <span>{project.platform}</span>
                  </div>
                  <h3 className="font-display text-2xl text-[#0D0D0E] font-bold group-hover:text-[#241E1F] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#241E1F] line-clamp-2 leading-relaxed mb-4 font-medium">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(183,114,100,0.25)]">
                    <span className="text-xs font-mono text-[#6B372E] font-bold">
                      {project.languages.join(" · ")}
                    </span>
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0D0D0E] hover:underline transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LANGUAGES MATRIX STRIP & ROSE GOLD INDIA MAP */}
      <section className="py-24 px-5 sm:px-8 border-t border-[rgba(183,114,100,0.25)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6B372E] font-bold block mb-2">
              ✦ 20+ Languages & Regional Dialect Matrix
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-[#0D0D0E] font-normal leading-tight mb-4">
              Every Story Deserves to Sound <span className="italic font-serif text-[#241E1F]">Native.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#241E1F] leading-relaxed font-sans font-medium">
              Explore our pan-India acoustic coverage and global dialect studios. From broadcast Hindi to regional cinema dialects, our native voice artists deliver pristine emotional fidelity.
            </p>
          </div>

          {/* Rose Gold Map of India Component */}
          <div className="mb-14">
            <GoldenIndiaMap />
          </div>

          {/* Language Cards Quick Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-6 border-t border-[rgba(183,114,100,0.25)]">
            {languages.slice(0, 6).map((lang) => (
              <div
                key={lang.name}
                className="glass-card p-4 rounded-xl flex flex-col justify-between text-center"
              >
                <span className="font-serif text-sm text-[#6B372E] block mb-1 font-bold">
                  {lang.native}
                </span>
                <span className="font-display text-sm text-[#0D0D0E] font-bold">
                  {lang.name}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/languages"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider text-[#FCE7E1] bg-[#111113] hover:bg-[#241E1F] shadow-md hover:scale-105 transition-all"
            >
              <Globe className="w-4 h-4 text-[#FCE7E1]" />
              <span>Explore All 20+ Dialects & World Map</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. PARTNERS ECOSYSTEM WITH ANIMATED LOGOS */}
      <section className="py-24 px-5 sm:px-8 bg-[rgba(255,245,242,0.45)] border-t border-[rgba(183,114,100,0.25)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6B372E] font-bold block mb-2">
              ✦ Broadcast & Platform Network
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#0D0D0E] font-normal">
              Trusted by Premier Media & OTT Platforms
            </h2>
          </div>
          <PartnersSection />
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <section className="py-24 px-5 sm:px-8 border-t border-[rgba(183,114,100,0.25)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6B372E] font-bold block mb-2">
              ✦ Producer & Client Inquiries
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#0D0D0E] font-normal">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* 9. BOTTOM CTA BAND */}
      <section className="py-24 px-5 sm:px-8 bg-[rgba(255,245,242,0.6)] border-t border-[rgba(183,114,100,0.25)] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6B372E] font-bold mb-4">
            ✦ Fast-Track Your Production
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-[#0D0D0E] font-normal mb-6">
            Have a series, commercial, or channel to localize?
          </h2>
          <p className="text-[#241E1F] max-w-xl text-base mb-10 leading-relaxed font-sans font-medium">
            Submit your project parameters through our interactive brief form or connect directly with our founder.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-[#FCE7E1] bg-[#111113] hover:bg-[#241E1F] shadow-[0_4px_20px_rgba(17,17,19,0.25)] hover:scale-105 transition-all"
            >
              Start Interactive Brief
            </Link>
            <a
              href="https://wa.me/918377086807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-semibold tracking-wider text-[#0D0D0E] border-2 border-[#0D0D0E] bg-[rgba(255,255,255,0.5)] hover:bg-[#111113] hover:text-[#FCE7E1] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#0D0D0E]" />
              <span>WhatsApp +91 8377086807</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
