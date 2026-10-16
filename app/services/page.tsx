import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, PenTool, Globe, Mic, Cpu, Smartphone, PlaySquare, Film, Laptop, Code2 } from "lucide-react";
import { getServices } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  PenTool: <PenTool className="w-5 h-5 text-[#0D0D0E]" />,
  Globe: <Globe className="w-5 h-5 text-[#0D0D0E]" />,
  Mic: <Mic className="w-5 h-5 text-[#0D0D0E]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#0D0D0E]" />,
  Smartphone: <Smartphone className="w-5 h-5 text-[#0D0D0E]" />,
  PlaySquare: <PlaySquare className="w-5 h-5 text-[#0D0D0E]" />,
  Film: <Film className="w-5 h-5 text-[#0D0D0E]" />,
  Laptop: <Laptop className="w-5 h-5 text-[#0D0D0E]" />,
  Code2: <Code2 className="w-5 h-5 text-[#0D0D0E]" />,
};

export default function ServicesPage() {
  const services = getServices();
  const humanServices = services.filter((s) => s.pillar === "human");
  const aiServices = services.filter((s) => s.pillar === "ai");
  const webServices = services.filter((s) => s.pillar === "web");

  return (
    <div className="pt-32 pb-24 px-5 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Page Header */}
      <div className="max-w-3xl mb-20">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5A410A] font-bold block mb-3">
          ✦ Comprehensive Capabilities
        </span>
        <h1 className="font-display text-5xl sm:text-7xl text-[#0D0D0E] font-normal leading-[1.1] mb-6">
          From Script to Screen to Every Language.
        </h1>
        <p className="text-[#242428] text-base sm:text-lg leading-relaxed font-sans font-medium">
          We combine the nuanced artistry of seasoned screenwriters, native voice directors, and sound designers with high-velocity AI pipelines engineered for modern streamers and mobile audiences.
        </p>
      </div>

      {/* Pillar A: Human-Led Creative & Localization */}
      <section id="human-led" className="mb-24">
        <div className="flex items-center gap-3 pb-6 border-b border-[rgba(168,126,26,0.3)] mb-12">
          <span className="w-3.5 h-3.5 rounded-full bg-[#111113]" />
          <h2 className="font-display text-3xl sm:text-4xl text-[#0D0D0E] font-bold">
            Pillar I · Human-Led Creative & Localization Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {humanServices.map((service) => (
            <div
              key={service.slug}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.7)] border border-[rgba(168,126,26,0.35)] flex items-center justify-center mb-6 shadow-sm">
                  {ICON_MAP[service.icon] || <Sparkles className="w-5 h-5 text-[#0D0D0E]" />}
                </div>
                <h3 className="font-display text-2xl text-[#0D0D0E] font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-xs text-[#5A410A] font-mono uppercase tracking-wider mb-4 font-bold">
                  {service.tagline}
                </p>
                <p className="text-sm text-[#242428] leading-relaxed mb-6 font-sans font-medium">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-[rgba(168,126,26,0.25)] mb-6">
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#5A410A] font-bold mb-3">
                    Deliverables & Outputs:
                  </h4>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="text-xs text-[#0D0D0E] flex items-start gap-2.5 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0D0D0E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center justify-between w-full px-5 py-3 rounded-full text-xs font-semibold tracking-wider text-[#F7E49A] bg-[#111113] hover:bg-[#242428] shadow-md transition-all"
              >
                <span>Discuss {service.title}</span>
                <ArrowUpRight className="w-4 h-4 text-[#F7E49A]" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pillar B: AI-Powered Content Services */}
      <section id="ai-powered" className="mb-24">
        <div className="flex items-center gap-3 pb-6 border-b border-[rgba(168,126,26,0.3)] mb-12">
          <span className="w-3.5 h-3.5 rounded-full bg-[#111113]" />
          <h2 className="font-display text-3xl sm:text-4xl text-[#0D0D0E] font-bold">
            Pillar II · AI-Powered Content Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiServices.map((service) => (
            <div
              key={service.slug}
              className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.7)] border border-[rgba(168,126,26,0.35)] flex items-center justify-center mb-6 shadow-sm">
                  {ICON_MAP[service.icon] || <Sparkles className="w-5 h-5 text-[#0D0D0E]" />}
                </div>
                <h3 className="font-display text-2xl text-[#0D0D0E] font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[#5A410A] font-mono uppercase tracking-wider mb-3 font-bold">
                  {service.tagline}
                </p>
                <p className="text-xs text-[#242428] leading-relaxed mb-6 font-sans font-medium">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-[rgba(168,126,26,0.25)] mb-6">
                  <h4 className="font-mono text-[10px] uppercase tracking-wider text-[#5A410A] font-bold mb-3">
                    Deliverables:
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="text-xs text-[#0D0D0E] flex items-start gap-2 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D0D0E] shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider text-[#F7E49A] bg-[#111113] hover:bg-[#242428] shadow-md transition-all"
              >
                <span>Inquire</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F7E49A]" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pillar C: Web & Digital Presence Services */}
      <section id="web-digital" className="mb-24">
        <div className="flex items-center gap-3 pb-6 border-b border-[rgba(168,126,26,0.3)] mb-12">
          <span className="w-3.5 h-3.5 rounded-full bg-[#111113]" />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#0D0D0E] font-bold">
              Pillar III · Web & Digital Presence
            </h2>
            <p className="text-xs font-mono uppercase tracking-wider text-[#5A410A] mt-1 font-bold">
              Bespoke Studio Sites, Creator Portfolios & Interactive Media Platforms
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {webServices.map((service) => (
            <div
              key={service.slug}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.7)] border border-[rgba(168,126,26,0.35)] flex items-center justify-center mb-6 shadow-sm">
                  {ICON_MAP[service.icon] || <Sparkles className="w-5 h-5 text-[#0D0D0E]" />}
                </div>
                <h3 className="font-display text-2xl text-[#0D0D0E] font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[#5A410A] font-mono uppercase tracking-wider mb-4 font-bold">
                  {service.tagline}
                </p>
                <p className="text-sm text-[#242428] leading-relaxed mb-6 font-sans font-medium">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-[rgba(168,126,26,0.25)] mb-6">
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#5A410A] font-bold mb-3">
                    Deliverables & Architecture:
                  </h4>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="text-xs text-[#0D0D0E] flex items-start gap-2.5 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0D0D0E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center justify-between w-full px-5 py-3 rounded-full text-xs font-semibold tracking-wider text-[#F7E49A] bg-[#111113] hover:bg-[#242428] shadow-md transition-all"
              >
                <span>Launch Web Project · {service.title}</span>
                <ArrowUpRight className="w-4 h-4 text-[#F7E49A]" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Box */}
      <div className="glass-card rounded-3xl p-10 sm:p-14 text-center">
        <h3 className="font-display text-3xl sm:text-5xl text-[#0D0D0E] font-normal mb-4">
          Need a tailored multi-format production pipeline?
        </h3>
        <p className="text-[#242428] text-sm sm:text-base max-w-xl mx-auto mb-8 font-sans font-medium">
          We structure customized production agreements, episodic volume tiers, and dedicated recording bays for streaming networks and high-growth digital creators.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-[#F7E49A] bg-[#111113] hover:bg-[#242428] shadow-[0_4px_20px_rgba(17,17,19,0.25)] hover:scale-105 transition-all"
        >
          <span>Submit Project Specifications</span>
          <ArrowUpRight className="w-4 h-4 text-[#F7E49A]" />
        </Link>
      </div>
    </div>
  );
}
