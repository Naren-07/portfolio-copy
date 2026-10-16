"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/lib/types";

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "glass-card border-[#0D0D0E] shadow-[0_12px_32px_-10px_rgba(90,65,10,0.22)]"
                : "bg-[rgba(255,248,225,0.55)] border-[rgba(168,126,26,0.3)] hover:border-[#0D0D0E] backdrop-blur-md"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg sm:text-xl text-[#0D0D0E] font-semibold">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border transition-transform duration-300 shrink-0 ${
                  isOpen
                    ? "rotate-180 bg-[#111113] text-[#F7E49A] border-[#111113]"
                    : "bg-transparent text-[#0D0D0E] border-[rgba(17,17,19,0.3)]"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm text-[#242428] leading-relaxed animate-in fade-in duration-200 border-t border-[rgba(168,126,26,0.2)] pt-4 font-medium">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
