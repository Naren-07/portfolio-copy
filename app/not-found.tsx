import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-5 py-24 relative z-10">
      <div className="w-20 h-20 mb-8 rounded-full overflow-hidden border-2 border-[#0D0D0E] shadow-md flex items-center justify-center shrink-0">
        <Image
          src="/assets/echobridge-emblem.jpg"
          alt="EchoBridge Studio"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover shrink-0"
        />
      </div>

      <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#5A410A] font-bold block mb-2">
        Error 404 · Sequence Not Found
      </span>
      <h1 className="font-display text-5xl sm:text-7xl text-[#0D0D0E] font-normal mb-6">
        Scene Missing From Reel.
      </h1>
      <p className="text-[#242428] max-w-md mx-auto text-sm leading-relaxed mb-10 font-sans font-medium">
        The story or page you are searching for has moved, expired, or exists under another dialect route.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold tracking-wider text-[#F7E49A] bg-[#111113] hover:bg-[#242428] shadow-[0_4px_20px_rgba(17,17,19,0.25)] hover:scale-105 transition-all"
      >
        <Home className="w-4 h-4 text-[#F7E49A]" />
        <span>Return to Studio Home</span>
      </Link>
    </div>
  );
}
