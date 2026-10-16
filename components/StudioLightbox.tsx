"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  title: string;
  role: string;
  image: string;
}

interface StudioLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onSelectIndex?: (index: number) => void;
  onNavigate?: (index: number) => void;
}

export default function StudioLightbox({
  isOpen,
  onClose,
  items,
  currentIndex,
  onSelectIndex,
  onNavigate,
}: StudioLightboxProps) {
  const setIndex = onSelectIndex || onNavigate || (() => {});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setIndex((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight") {
        setIndex((currentIndex + 1) % items.length);
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, currentIndex, items.length, setIndex]);

  if (!isOpen || !items[currentIndex]) return null;

  const current = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0D0D0E]/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Studio Facility Lightbox"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-[#111113] hover:bg-[#242428] text-[#F7E49A] flex items-center justify-center transition-all border border-[#DFB742]"
        aria-label="Close Lightbox"
      >
        <X className="w-5 h-5 text-[#F7E49A]" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIndex((currentIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#111113] hover:bg-[#242428] text-[#F7E49A] flex items-center justify-center transition-all border border-[#DFB742] hidden sm:flex"
        aria-label="Previous Facility"
      >
        <ChevronLeft className="w-6 h-6 text-[#F7E49A]" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIndex((currentIndex + 1) % items.length);
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#111113] hover:bg-[#242428] text-[#F7E49A] flex items-center justify-center transition-all border border-[#DFB742] hidden sm:flex"
        aria-label="Next Facility"
      >
        <ChevronRight className="w-6 h-6 text-[#F7E49A]" />
      </button>

      <div
        className="relative max-w-4xl w-full bg-[#111113] rounded-3xl overflow-hidden border-2 border-[#0D0D0E] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full">
          <Image
            src={current.image}
            alt={current.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-6 bg-[rgba(255,248,225,0.92)] border-t border-[rgba(168,126,26,0.35)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#5A410A] font-bold">
              {current.role}
            </span>
            <h3 className="font-display text-2xl text-[#0D0D0E] font-bold">
              {current.title}
            </h3>
          </div>
          <span className="font-mono text-xs text-[#0D0D0E] font-bold">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}
