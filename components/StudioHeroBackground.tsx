"use client";

import React, { useEffect, useState } from "react";

export default function StudioHeroBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Subtle parallax: normalize between -1 and 1, max +/- 12px
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fade out hero background as user scrolls down beyond hero
  const opacity = Math.max(0, Math.min(1, 1 - scrollY / 650));

  return (
    <div
      aria-hidden="true"
      style={{ opacity }}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 max-h-screen transition-opacity duration-200"
    >
      {/* 1. Ambient Warm Golden Light Pillars */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-gradient-to-b from-[#FFF3C4]/35 via-[#DFB742]/15 to-transparent rounded-full blur-[110px]" />
      <div className="absolute -top-20 right-1/4 w-[450px] h-[450px] bg-gradient-to-b from-[#F7E49A]/30 via-[#D8AE41]/15 to-transparent rounded-full blur-[100px]" />

      {/* 2. Studio Sound Monitor & Harmonic Acoustic Waves (Left Flank) */}
      <div
        className="hidden md:flex absolute top-[18%] left-[2%] lg:left-[5%] flex-col items-center gap-3 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
        }}
      >
        {/* Acoustic Waves radiating outward */}
        <div className="relative flex items-center justify-center">
          {/* Wave ring 1 */}
          <div className="absolute w-44 h-44 rounded-full border border-[rgba(216,174,65,0.45)] animate-acoustic-1" />
          {/* Wave ring 2 */}
          <div className="absolute w-44 h-44 rounded-full border border-[rgba(223,183,66,0.35)] animate-acoustic-2" />
          {/* Wave ring 3 */}
          <div className="absolute w-44 h-44 rounded-full border border-[rgba(247,228,154,0.3)] animate-acoustic-3" />

          {/* Studio Monitor Speaker Cabinet */}
          <div className="relative w-32 h-44 rounded-xl bg-gradient-to-b from-[#242428] via-[#17171A] to-[#0D0D0E] p-3 shadow-[0_16px_36px_rgba(90,65,10,0.28)] border border-[rgba(247,228,154,0.35)] flex flex-col items-center justify-between">
            {/* Corner metallic hex screws */}
            <div className="w-full flex justify-between px-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFB742]/70 shadow-sm" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFB742]/70 shadow-sm" />
            </div>

            {/* Tweeter Cone */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#111113] to-[#38383E] border border-[rgba(223,183,66,0.5)] flex items-center justify-center shadow-inner">
              <div className="w-4 h-4 rounded-full bg-[#DFB742] shadow-[0_0_8px_rgba(223,183,66,0.8)]" />
            </div>

            {/* Pulsing Woofer Cone */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#0D0D0E] via-[#242428] to-[#17171A] border-2 border-[rgba(247,228,154,0.6)] flex items-center justify-center shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)] animate-woofer">
              <div className="w-12 h-12 rounded-full border border-[#DFB742]/40 bg-gradient-to-br from-[#111113] to-[#2C2C32] flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#DFB742]/90 shadow-[0_0_10px_rgba(223,183,66,0.9)]" />
              </div>
            </div>

            {/* Monitor Brand Badge & Status LED */}
            <div className="w-full flex items-center justify-between px-1">
              <span className="font-mono text-[8px] tracking-[0.2em] text-[#F7E49A] font-semibold uppercase">
                EB·MON-01
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[7px] text-[#A69B8F]">ON</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Acoustic Spectrum Bars under speaker */}
        <div className="flex items-end gap-1 h-6 px-3 py-1 rounded-full bg-[rgba(255,248,225,0.7)] backdrop-blur-md border border-[rgba(168,126,26,0.35)] shadow-sm">
          {[0.6, 0.9, 0.4, 0.8, 1, 0.5, 0.7, 0.3].map((height, i) => (
            <span
              key={i}
              className="w-1 bg-[#111113] rounded-full"
              style={{
                height: `${height * 100}%`,
                animation: `eqBarPulse 1.2s ease-in-out infinite ${i * 0.14}s`,
                transformOrigin: "bottom",
              }}
            />
          ))}
        </div>
      </div>

      {/* 3. Floating 3D Storyboard Frame with Viewfinder & Lip-Sync Waveform (Right Flank) */}
      <div
        className="hidden md:flex absolute top-[16%] right-[2%] lg:right-[5%] flex-col gap-3 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px, 0)`,
        }}
      >
        {/* Main 16:9 Storyboard Viewfinder Frame */}
        <div className="w-64 sm:w-72 h-44 rounded-2xl bg-[rgba(255,248,225,0.65)] backdrop-blur-xl border border-[rgba(168,126,26,0.38)] p-3.5 shadow-[0_16px_38px_rgba(90,65,10,0.22)] flex flex-col justify-between animate-float-slow">
          {/* Header: REC indicator & Cine Timecode */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#0D0D0E] uppercase">
                REC · 4K RAW
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#0D0D0E] font-semibold bg-[rgba(223,183,66,0.3)] px-2 py-0.5 rounded border border-[rgba(168,126,26,0.35)]">
              01:24:18:04
            </span>
          </div>

          {/* Viewfinder Center Crosshair & Corner Framing Marks */}
          <div className="relative flex-1 my-1.5 border border-dashed border-[#A87E1A]/40 rounded-lg flex items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-[rgba(223,183,66,0.15)]">
            {/* Viewfinder corner brackets */}
            <span className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0D0D0E]" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#0D0D0E]" />
            <span className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#0D0D0E]" />
            <span className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0D0D0E]" />

            {/* Center Crosshair */}
            <div className="relative flex items-center justify-center">
              <span className="w-4 h-[1px] bg-[#0D0D0E]/60 absolute" />
              <span className="h-4 w-[1px] bg-[#0D0D0E]/60 absolute" />
              <span className="w-2 h-2 rounded-full border border-[#0D0D0E]/60" />
            </div>

            {/* Audio Lip-Sync Waveform SVG */}
            <svg
              className="absolute bottom-1 left-2 right-2 h-7 w-[90%] text-[#0D0D0E] opacity-75"
              viewBox="0 0 200 40"
              fill="none"
            >
              <path
                d="M0 20 Q 20 5, 40 20 T 80 20 T 120 5 T 160 30 T 200 20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Footer: Scene / Take / FPS metadata */}
          <div className="flex items-center justify-between font-mono text-[9px] text-[#242428] font-medium">
            <span>SCENE: 4B</span>
            <span>TAKE: 03</span>
            <span>FPS: 24.00</span>
            <span className="text-[#0D0D0E] font-bold">LIP-SYNC: +0.02s</span>
          </div>
        </div>

        {/* Secondary Vertical Storyboard Reel Frame */}
        <div className="self-end w-44 h-24 -mt-5 mr-3 rounded-xl bg-[rgba(255,250,235,0.72)] backdrop-blur-md border border-[rgba(168,126,26,0.35)] p-2.5 shadow-[0_12px_30px_rgba(90,65,10,0.18)] flex flex-col justify-between animate-float-reverse">
          <div className="flex items-center justify-between text-[8px] font-mono font-semibold text-[#0D0D0E]">
            <span>STEM: VO_HINDI</span>
            <span className="text-emerald-700 font-bold">LOCKED</span>
          </div>
          {/* Frequency Bars */}
          <div className="flex items-center gap-1 h-8">
            {[40, 75, 55, 90, 60, 100, 80, 45, 95, 70, 85, 50, 65].map((pct, idx) => (
              <span
                key={idx}
                className="flex-1 bg-[#111113] rounded-sm"
                style={{
                  height: `${pct}%`,
                  animation: `eqBarPulse 1s ease-in-out infinite ${idx * 0.08}s`,
                  transformOrigin: "bottom",
                }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[7px] font-mono text-[#5A410A]">
            <span>AI EMOTION: DRAMATIC</span>
            <span>-14 LUFS</span>
          </div>
        </div>
      </div>

      {/* 4. Sweeping NLE Timeline & Laser Playhead (Bottom Strip) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[94%] max-w-6xl rounded-2xl bg-[rgba(255,248,225,0.7)] backdrop-blur-xl border border-[rgba(168,126,26,0.38)] p-3 shadow-[0_12px_36px_rgba(90,65,10,0.16)] flex flex-col gap-2">
        {/* Timeline Header: Timecode Ruler */}
        <div className="relative w-full h-5 border-b border-[rgba(168,126,26,0.25)] flex items-center justify-between font-mono text-[9px] text-[#5A410A] px-2 select-none">
          <span>00:00:00:00</span>
          <span>00:00:15:00</span>
          <span>00:00:30:00</span>
          <span>00:00:45:00</span>
          <span>00:01:00:00</span>

          {/* Sweeping Laser Playhead Scrubber */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-[#0D0D0E] animate-playhead z-20"
            style={{ transform: "translateX(-50%)" }}
          >
            {/* Playhead diamond cursor */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#111113] rotate-45 border border-[#DFB742] shadow-[0_0_8px_rgba(17,17,19,0.5)]" />
          </div>
        </div>

        {/* Multitrack Sequence Rows */}
        <div className="flex flex-col gap-1.5 relative">
          {/* Video Track V1 */}
          <div className="flex items-center gap-2">
            <span className="w-7 font-mono text-[8px] font-bold text-[#0D0D0E] uppercase text-right">
              V1
            </span>
            <div className="flex-1 h-4 rounded-md bg-[rgba(223,183,66,0.3)] border border-[rgba(168,126,26,0.35)] flex items-center px-2 gap-1 overflow-hidden">
              <span className="font-mono text-[7px] text-[#0D0D0E] font-semibold truncate">
                MASTER_REEL_4K_HDR.PRORES · 24FPS
              </span>
            </div>
          </div>

          {/* Audio Dialogue Track A1 */}
          <div className="flex items-center gap-2">
            <span className="w-7 font-mono text-[8px] font-bold text-[#0D0D0E] uppercase text-right">
              A1
            </span>
            <div className="flex-1 h-4 rounded-md bg-[rgba(17,17,19,0.12)] border border-[rgba(17,17,19,0.22)] flex items-center px-2 gap-2 overflow-hidden">
              <span className="font-mono text-[7px] text-[#0D0D0E] font-semibold truncate">
                NATIVE_DIALOGUE_MASTER.WAV · 48KHZ 24-BIT
              </span>
            </div>
          </div>

          {/* Audio AI Voice Track A2 */}
          <div className="flex items-center gap-2">
            <span className="w-7 font-mono text-[8px] font-bold text-[#0D0D0E] uppercase text-right">
              A2
            </span>
            <div className="flex-1 h-4 rounded-md bg-[rgba(223,183,66,0.45)] border border-[rgba(168,126,26,0.4)] flex items-center px-2 gap-2 overflow-hidden">
              <span className="font-mono text-[7px] text-[#0D0D0E] font-semibold truncate">
                ECHO_AI_VOICE_LOCALIZATION · 22 REGIONAL DIALECTS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
