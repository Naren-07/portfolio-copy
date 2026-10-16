"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import StudioLightbox from "@/components/StudioLightbox";

interface GalleryItem {
  title: string;
  role: string;
  image: string;
}

interface StudioGalleryClientProps {
  gallery: GalleryItem[];
}

export default function StudioGalleryClient({ gallery }: StudioGalleryClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setLightboxIndex(idx)}
            className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover cursor-pointer transition-all duration-300"
          >
            <div className="relative aspect-video w-full bg-black">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E]/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                <div className="w-12 h-12 rounded-full bg-[#111113] text-[#F7E49A] border-2 border-[#DFB742] flex items-center justify-center shadow-lg">
                  <ZoomIn className="w-5 h-5 text-[#F7E49A]" />
                </div>
              </div>
            </div>
            <div className="p-5">
              <span className="font-mono text-[10px] uppercase text-[#5A410A] tracking-widest block mb-1 font-bold">
                {item.role}
              </span>
              <h3 className="font-display text-xl text-[#0D0D0E] font-bold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <StudioLightbox
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        items={gallery}
        currentIndex={lightboxIndex ?? 0}
        onNavigate={(nextIdx) => setLightboxIndex(nextIdx)}
      />
    </>
  );
}
