"use client";

import { useState } from "react";
import { Mic, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function RosterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("Female");
  const [voiceAge, setVoiceAge] = useState("Young Adult (20–35)");
  const [primaryLanguages, setPrimaryLanguages] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [experience, setExperience] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !demoLink.trim()) {
      setError("Please provide your name, email, and a link to your audio/video demo reel.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/roster", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          city,
          gender,
          voiceAge,
          primaryLanguages,
          demoLink,
          experience,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to register. Please try again or email us your demo reel directly.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again or email your reel to echobridge.studio6@gmail.com");
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center justify-center max-w-xl mx-auto border-2 border-[#0D0D0E] shadow-xl">
        <div className="w-16 h-16 rounded-full bg-[#111113] text-[#F7E49A] flex items-center justify-center mb-6 shadow-md border border-[#DFB742]">
          <CheckCircle2 className="w-10 h-10 text-[#F7E49A]" />
        </div>
        <h3 className="font-display text-3xl text-[#0D0D0E] font-bold mb-3">
          Audition Profile Registered!
        </h3>
        <p className="text-[#242428] text-sm leading-relaxed mb-6 font-medium">
          Thank you, <strong className="text-[#0D0D0E] font-bold">{name}</strong>. Our casting directors will review your demo reel and catalog your voice profile in our talent network for upcoming OTT dubbing and micro-drama productions.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs uppercase tracking-widest text-[#0D0D0E] font-bold hover:underline"
        >
          Submit Another Profile
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 sm:p-10 max-w-2xl mx-auto shadow-xl">
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-100 border border-red-400 text-red-900 text-xs flex items-center gap-3 font-medium">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
            Artist Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rohan Varma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="gold-input w-full px-4 py-3 rounded-xl text-sm"
          />
        </div>
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="rohan@voice.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="gold-input w-full px-4 py-3 rounded-xl text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="gold-input w-full px-4 py-3 rounded-xl text-sm"
          />
        </div>
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
            City & Country
          </label>
          <input
            type="text"
            placeholder="e.g. Mumbai, India"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="gold-input w-full px-4 py-3 rounded-xl text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
            Gender Category
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="gold-input w-full px-4 py-3 rounded-xl text-sm"
          >
            <option>Female</option>
            <option>Male</option>
            <option>Non-Binary / Character Artist</option>
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
            Voice Age Range
          </label>
          <select
            value={voiceAge}
            onChange={(e) => setVoiceAge(e.target.value)}
            className="gold-input w-full px-4 py-3 rounded-xl text-sm"
          >
            <option>Child / Teen (8–18)</option>
            <option>Young Adult (20–35)</option>
            <option>Middle-Aged (35–50)</option>
            <option>Senior / Mature (50+)</option>
          </select>
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
          Languages & Dialects Spoken Fluently *
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Hindi (Neutral, Awadhi), English (Indian, Neutral UK), Marathi"
          value={primaryLanguages}
          onChange={(e) => setPrimaryLanguages(e.target.value)}
          className="gold-input w-full px-4 py-3 rounded-xl text-sm"
        />
      </div>

      <div className="mb-5">
        <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
          Demo Reel Link (Drive / SoundCloud / YouTube / Dropbox) *
        </label>
        <input
          type="url"
          required
          placeholder="https://drive.google.com/your-voice-demo"
          value={demoLink}
          onChange={(e) => setDemoLink(e.target.value)}
          className="gold-input w-full px-4 py-3 rounded-xl text-sm"
        />
        <span className="text-[10px] text-[#5A410A] font-medium block mt-1">
          Please ensure link permissions are set to Anyone with the link can view
        </span>
      </div>

      <div className="mb-8">
        <label className="block text-xs uppercase font-mono tracking-wider text-[#5A410A] font-bold mb-2">
          Prior Dubbing / Voice Experience & Studio Setup (Optional)
        </label>
        <textarea
          rows={3}
          placeholder="List major OTT/commercial credits, home acoustic booth specs (if any), or microphone equipment..."
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="gold-input w-full px-4 py-3 rounded-xl text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-full text-sm font-semibold tracking-wider text-[#F7E49A] bg-[#111113] hover:bg-[#242428] shadow-[0_4px_20px_rgba(17,17,19,0.25)] hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-[#F7E49A]" />
            <span>Registering Profile...</span>
          </>
        ) : (
          <>
            <Mic className="w-4 h-4 text-[#F7E49A]" />
            <span>Apply to Join 100+ Artist Roster</span>
          </>
        )}
      </button>
    </form>
  );
}
