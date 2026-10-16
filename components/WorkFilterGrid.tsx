"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types";
import { Play, ArrowUpRight, Film, Smartphone, Headphones } from "lucide-react";
import VideoModal from "@/components/VideoModal";

interface WorkFilterGridProps {
  projects: Project[];
}

const CATEGORIES = [
  "All",
  "OTT Dubbing",
  "AI Micro-Drama",
  "Audio Drama",
  "Brand Film",
  "YouTube Growth",
];

export default function WorkFilterGrid({ projects }: WorkFilterGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);

  const filtered = projects.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  return (
    <>
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all border ${
              selectedCategory === cat
                ? "bg-[#111113] text-[#F7E49A] border-[#111113] shadow-md"
                : "bg-[rgba(255,255,255,0.65)] text-[#0D0D0E] border-[rgba(168,126,26,0.35)] hover:border-[#0D0D0E]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col rounded-2xl overflow-hidden glass-card glass-card-hover"
          >
            {/* Visual Card / Poster */}
            <div className={`relative w-full overflow-hidden bg-black ${
              project.format === "9:16" ? "aspect-[9/16] max-h-[460px]" : "aspect-video"
            }`}>
              <Image
                src={project.thumbnailUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E]/80 via-black/20 to-transparent" />

              {/* Format Badge Top Left */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#111113]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[rgba(247,228,154,0.3)]">
                {project.format === "9:16" && <Smartphone className="w-3 h-3 text-[#F7E49A]" />}
                {project.format === "16:9" && <Film className="w-3 h-3 text-[#F7E49A]" />}
                {project.format === "AUDIO" && <Headphones className="w-3 h-3 text-[#F7E49A]" />}
                <span className="font-mono text-[10px] uppercase text-[#F7E49A] tracking-wider font-semibold">
                  {project.category}
                </span>
              </div>

              {/* Play Button Trigger */}
              <button
                onClick={() => setActiveVideo({ url: project.videoUrl, title: project.title })}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40"
                aria-label={`Play showreel for ${project.title}`}
              >
                <div className="w-14 h-14 rounded-full bg-[#111113] text-[#F7E49A] border-2 border-[#DFB742] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-0.5 text-[#F7E49A]" />
                </div>
              </button>
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#5A410A] font-bold mb-2">
                  <span>{project.client}</span>
                  <span>{project.platform}</span>
                </div>
                <h3 className="font-display text-2xl text-[#0D0D0E] font-bold group-hover:text-[#242428] transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-[#242428] line-clamp-2 leading-relaxed mb-4 font-medium">
                  {project.description}
                </p>
              </div>

              {/* Footer: Languages Chips & Case Study Link */}
              <div className="pt-4 border-t border-[rgba(168,126,26,0.25)] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.languages.slice(0, 3).map((lang) => (
                    <span
                      key={lang}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[rgba(255,255,255,0.7)] text-[#0D0D0E] border border-[rgba(168,126,26,0.25)] font-semibold"
                    >
                      {lang}
                    </span>
                  ))}
                  {project.languages.length > 3 && (
                    <span className="text-[10px] font-mono text-[#5A410A] font-bold">
                      +{project.languages.length - 3} more
                    </span>
                  )}
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs text-[#0D0D0E] hover:underline transition-colors font-bold shrink-0"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <VideoModal
          isOpen={true}
          onClose={() => setActiveVideo(null)}
          videoUrl={activeVideo.url}
          title={activeVideo.title}
        />
      )}
    </>
  );
}
