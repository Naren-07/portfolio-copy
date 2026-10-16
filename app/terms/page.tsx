export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-5 sm:px-8 max-w-4xl mx-auto relative z-10">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5A410A] font-bold block mb-3">
        ✦ Studio Operations
      </span>
      <h1 className="font-display text-4xl sm:text-6xl text-[#0D0D0E] font-normal mb-8">
        Terms of Engagement & Production Standards
      </h1>
      <div className="space-y-6 text-sm text-[#242428] leading-relaxed font-sans glass-card p-8 sm:p-12 rounded-3xl font-medium">
        <p>
          These Terms govern production engagements, localization deliverables, and voice-over commissions executed by <strong className="text-[#0D0D0E]">EchoBridge Studio</strong>.
        </p>
        <h2 className="font-display text-2xl text-[#0D0D0E] font-bold pt-4">
          1. Deliverable Formats & Quality Assurance
        </h2>
        <p>
          All audio deliverables are mastered to broadcast standards (typically 24-bit / 48kHz WAV multi-track stems, stereo deliverables, and 5.1 / binaural configurations where specified in the project scope). All dialogue is reviewed by native language supervisors prior to client delivery.
        </p>
        <h2 className="font-display text-2xl text-[#0D0D0E] font-bold pt-4">
          2. Revisions & Pickup Sessions
        </h2>
        <p>
          Every standard engagement includes pickup recording sessions to correct mispronunciations or technical discrepancies against approved scripts. Creative script alterations post-recording are accommodated at standard hourly studio rates.
        </p>
        <h2 className="font-display text-2xl text-[#0D0D0E] font-bold pt-4">
          3. Intellectual Property & Commercial Buyouts
        </h2>
        <p>
          Upon receipt of full contractual settlement, all agreed broadcast, streaming, and synchronization rights for the commissioned localization deliverables transfer to the client according to the project agreement.
        </p>
      </div>
    </div>
  );
}
