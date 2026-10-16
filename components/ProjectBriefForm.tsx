"use client";

import { useState } from "react";
import { CheckCircle2, MessageCircle, Send, AlertCircle, Loader2 } from "lucide-react";

const PROJECT_TYPES = [
  "OTT Dubbing",
  "Voice-Over",
  "Localization & Transcreation",
  "Subtitling & Closed Captioning",
  "AI Micro-Drama Production",
  "YouTube Channel Expansion",
  "Brand & Commercial Film",
  "Audio Drama & Foley",
  "Other Custom Project",
];

const QUICK_LANGUAGES = [
  "Hindi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Marathi",
  "Punjabi",
  "English (US/UK)",
  "Spanish",
  "Arabic",
  "Thai",
  "Bahasa Indonesia",
  "Portuguese",
  "French",
  "German",
];

export default function ProjectBriefForm({ initialService = "" }: { initialService?: string }) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    initialService ? [initialService] : ["OTT Dubbing"]
  );
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["Hindi", "Tamil", "Telugu"]);
  const [volume, setVolume] = useState<number>(20);
  const [budget, setBudget] = useState<number>(5000);
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [timeline, setTimeline] = useState("Within 2–4 Weeks");
  const [message, setMessage] = useState("");
  const [attachmentLink, setAttachmentLink] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleLanguage = (lang: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim()) {
      setError("Please provide your name and email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          selectedTypes,
          selectedLanguages,
          volume,
          budget,
          currency,
          timeline,
          message,
          attachmentLink,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to transmit project brief. Please try WhatsApp.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Network error. Please message us directly via WhatsApp.");
      }
    } finally {
      setLoading(false);
    }
  };

  const whatsappBriefText = encodeURIComponent(
    `*EchoBridge Studio Brief*\n\n` +
      `*Name:* ${name || "Client"}\n` +
      `*Company:* ${company || "Not specified"}\n` +
      `*Email:* ${email || "Not specified"}\n` +
      `*Services:* ${selectedTypes.join(", ")}\n` +
      `*Languages:* ${selectedLanguages.join(", ")}\n` +
      `*Volume:* ${volume} Episodes / Minutes\n` +
      `*Budget:* ${currency === "USD" ? "$" : "₹"}${budget}\n` +
      `*Timeline:* ${timeline}\n` +
      `*Message:* ${message || "Interested in starting a project."}`
  );
  const whatsappUrl = `https://wa.me/918377086807?text=${whatsappBriefText}`;

  if (submitted) {
    return (
      <div className="glass-card rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center justify-center max-w-2xl mx-auto shadow-xl border-2 border-[#0D0D0E]">
        <div className="w-16 h-16 rounded-full bg-[#111113] text-[#F7E49A] flex items-center justify-center mb-6 shadow-md border border-[#DFB742]">
          <CheckCircle2 className="w-10 h-10 text-[#F7E49A]" />
        </div>
        <h3 className="font-display text-3xl sm:text-4xl text-[#0D0D0E] font-bold mb-3">
          Brief Received!
        </h3>
        <p className="text-[#242428] max-w-md mx-auto mb-8 text-sm leading-relaxed font-medium">
          Thank you, <strong className="text-[#0D0D0E] font-bold">{name}</strong>. Our creative director Sarika Sharma and production team will review your project requirements and follow up within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider text-[#F7E49A] bg-[#111113] hover:bg-[#242428] shadow-md hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Fast-Track on WhatsApp</span>
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-widest text-[#5A410A] hover:text-[#0D0D0E] font-bold transition-colors py-2"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto shadow-xl">
      {error && (
        <div className="mb-8 p-4 rounded-xl bg-red-100 border border-red-400 text-red-900 text-xs flex items-center gap-3 font-medium">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Step 1: Project Types */}
      <div className="mb-10">
        <label className="font-mono text-xs uppercase tracking-widest text-[#5A410A] font-bold block mb-3">
          01 · Select Required Services (Multi-Select)
        </label>
        <div className="flex flex-wrap gap-2.5">
          {PROJECT_TYPES.map((type) => {
            const isSelected = selectedTypes.includes(type);
            return (
              <button
                type="button"
                key={type}
                onClick={() => toggleType(type)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border ${
                  isSelected
                    ? "bg-[#111113] text-[#F7E49A] border-[#111113] shadow-md"
                    : "bg-[rgba(255,255,255,0.7)] text-[#0D0D0E] border-[rgba(168,126,26,0.35)] hover:border-[#0D0D0E]"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Language Requirements */}
      <div className="mb-10">
        <label className="font-mono text-xs uppercase tracking-widest text-[#5A410A] font-bold block mb-3">
          02 · Target Languages Needed ({selectedLanguages.length} selected)
        </label>
        <div className="flex flex-wrap gap-2">
          {QUICK_LANGUAGES.map((lang) => {
            const isSelected = selectedLanguages.includes(lang);
            return (
              <button
                type="button"
                key={lang}
                onClick={() => toggleLanguage(lang)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all border font-medium ${
                  isSelected
                    ? "bg-[#111113] text-[#F7E49A] border-[#111113] font-bold shadow-sm"
                    : "bg-[rgba(255,255,255,0.6)] text-[#0D0D0E] border-[rgba(168,126,26,0.25)] hover:border-[#0D0D0E]"
                }`}
              >
                {lang}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3: Volume & Budget Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 p-6 rounded-2xl bg-[rgba(255,255,255,0.65)] border border-[rgba(168,126,26,0.35)]">
        {/* Volume Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5A410A] font-bold">
              Project Volume
            </span>
            <span className="font-mono text-sm font-bold text-[#0D0D0E]">
              {volume} {volume >= 100 ? "100+ Eps / Hours" : "Episodes / Mins"}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full accent-[#111113] h-2 bg-[rgba(168,126,26,0.25)] rounded-lg cursor-pointer"
          />
          <span className="text-[10px] text-[#5A410A] font-medium block mt-1">
            Slide to indicate episode count or total duration
          </span>
        </div>

        {/* Budget Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#5A410A] font-bold">
                Estimated Budget
              </span>
              <div className="flex rounded-md border border-[rgba(168,126,26,0.35)] overflow-hidden text-[10px] font-bold">
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={`px-2 py-0.5 ${currency === "USD" ? "bg-[#111113] text-[#F7E49A]" : "bg-[rgba(255,255,255,0.8)] text-[#0D0D0E]"}`}
                >
                  USD
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("INR")}
                  className={`px-2 py-0.5 ${currency === "INR" ? "bg-[#111113] text-[#F7E49A]" : "bg-[rgba(255,255,255,0.8)] text-[#0D0D0E]"}`}
                >
                  INR
                </button>
              </div>
            </div>
            <span className="font-mono text-sm font-bold text-[#0D0D0E]">
              {currency === "USD" ? `$${budget.toLocaleString()}` : `₹${(budget * 80).toLocaleString()}`}
            </span>
          </div>
          <input
            type="range"
            min="1000"
            max="50000"
            step="1000"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full accent-[#111113] h-2 bg-[rgba(168,126,26,0.25)] rounded-lg cursor-pointer"
          />
          <span className="text-[10px] text-[#5A410A] font-medium block mt-1">
            Flexible custom packages tailored to project specifications
          </span>
        </div>
      </div>

      {/* Step 4: Contact Credentials & Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
            Your Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Maya Sen"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="gold-input w-full px-4 py-3 rounded-xl text-sm"
          />
        </div>
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
            Business Email *
          </label>
          <input
            type="email"
            required
            placeholder="maya@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="gold-input w-full px-4 py-3 rounded-xl text-sm"
          />
        </div>
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
            WhatsApp / Phone (Optional)
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="gold-input w-full px-4 py-3 rounded-xl text-sm"
          />
        </div>
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
            Company / Platform / Channel
          </label>
          <input
            type="text"
            placeholder="e.g. Netflix, Kuku, YouTube Channel"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="gold-input w-full px-4 py-3 rounded-xl text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
            Project Timeline
          </label>
          <select
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="gold-input w-full px-4 py-3 rounded-xl text-sm"
          >
            <option>Immediate (Within 48–72 Hours)</option>
            <option>Within 2–4 Weeks</option>
            <option>Next Quarter</option>
            <option>Exploratory / Budget Planning</option>
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
            Script / Reference Reel Link (Optional)
          </label>
          <input
            type="url"
            placeholder="https://drive.google.com/..."
            value={attachmentLink}
            onChange={(e) => setAttachmentLink(e.target.value)}
            className="gold-input w-full px-4 py-3 rounded-xl text-sm"
          />
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
          Project Details & Narrative Notes
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about the storyline, character tones, specific accents, or deliverable schedule..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="gold-input w-full px-4 py-3 rounded-xl text-sm resize-none"
        />
      </div>

      {/* Submit button & WhatsApp alternative */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[rgba(168,126,26,0.3)]">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-[#F7E49A] bg-[#111113] hover:bg-[#242428] shadow-[0_4px_20px_rgba(17,17,19,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Brief...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-[#F7E49A]" />
              <span>Submit Project Brief</span>
            </>
          )}
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#0D0D0E] hover:underline font-bold transition-colors flex items-center gap-1.5"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>Or send directly via WhatsApp</span>
        </a>
      </div>
    </form>
  );
}
