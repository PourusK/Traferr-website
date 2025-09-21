import Image from "next/image";

type FrameSize = "xs" | "sm" | "md" | "lg";

type Props = {
  /** Optional path to screenshot, e.g. "/app-screenshot.png". Falls back to placeholder SVG. */
  src?: string;
  alt?: string;
  className?: string;
  size?: FrameSize;
};

const frameWidthClass: Record<FrameSize, string> = {
  xs: "w-[140px]",
  sm: "w-[180px]",
  md: "w-[280px]",
  lg: "w-[320px] sm:w-[360px] md:w-[380px]",
};

const screenPaddingClass: Record<FrameSize, string> = {
  xs: "m-[5px]",
  sm: "m-[6px]",
  md: "m-[8px]",
  lg: "m-[10px]",
};

const outerRadiusClass: Record<FrameSize, string> = {
  xs: "rounded-[26px]",
  sm: "rounded-[32px]",
  md: "rounded-[38px]",
  lg: "rounded-[42px]",
};

const screenRadiusClass: Record<FrameSize, string> = {
  xs: "rounded-[18px]",
  sm: "rounded-[22px]",
  md: "rounded-[26px]",
  lg: "rounded-[28px]",
};

const dynamicIslandClass: Record<FrameSize, string> = {
  xs: "top-1.5 h-2.5 w-12",
  sm: "top-1.5 h-3 w-16",
  md: "top-2 h-3.5 w-20",
  lg: "top-2 h-4 sm:h-5 w-24 sm:w-28",
};

export default function IPhoneFrame({
  src,
  alt = "Traferr app",
  className = "",
  size = "lg",
}: Props) {
  const imageSrc = src || "/placeholder-screenshot.svg";
  const containerClassName = className || "mx-auto";

  return (
    <div className={containerClassName}>
      {/* Phone shell */}
      <div className={`relative ${frameWidthClass[size]}`}>
        {/* Outer rounded bezel */}
        <div
          className={`relative ${outerRadiusClass[size]} bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 shadow-[0_18px_45px_rgba(15,23,42,0.35)]`}
        >
          {/* Screen area with padding to simulate bezel */}
          <div
            className={`relative ${screenPaddingClass[size]} ${screenRadiusClass[size]} bg-black overflow-hidden`}
          >
            {/* Maintain iPhone-ish aspect ratio via padding trick */}
            <div className="relative w-full" style={{ paddingTop: "210%" }}>
              <Image
                src={imageSrc}
                alt={alt}
                fill
                priority
                className={`object-cover ${screenRadiusClass[size]}`}
                sizes="(max-width: 768px) 320px, 380px"
              />
            </div>
          </div>

          {/* Dynamic island */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 ${dynamicIslandClass[size]} rounded-full bg-black/90 shadow-inner`}
          />
        </div>
      </div>
    </div>
  );
}
