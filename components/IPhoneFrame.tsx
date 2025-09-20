import Image from "next/image";

type Props = {
  /** Optional path to screenshot, e.g. "/app-screenshot.png". Falls back to placeholder SVG. */
  src?: string;
  alt?: string;
  className?: string;
};

export default function IPhoneFrame({ src, alt = "Traferr app", className = "" }: Props) {
  const imageSrc = src || "/placeholder-screenshot.svg";

  return (
    <div className={`mx-auto ${className}`}>
      {/* Phone shell */}
      <div className="relative mx-auto w-[320px] sm:w-[360px] md:w-[380px]">
        {/* Outer rounded bezel */}
        <div className="relative rounded-[42px] bg-neutral-900/95 shadow-2xl ring-1 ring-black/40">
          {/* Screen area with padding to simulate bezel */}
          <div className="relative m-[10px] rounded-[28px] bg-black overflow-hidden">
            {/* Maintain iPhone-ish aspect ratio via padding trick */}
            <div className="relative w-full" style={{ paddingTop: "210%" }}>
              <Image
                src={imageSrc}
                alt={alt}
                fill
                priority
                className="object-cover rounded-[28px]"
                sizes="(max-width: 768px) 320px, 380px"
              />
            </div>
          </div>

          {/* Dynamic island */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 h-4 sm:h-5 w-24 sm:w-28 rounded-full bg-black/90 shadow-inner" />
        </div>
      </div>
    </div>
  );
}
