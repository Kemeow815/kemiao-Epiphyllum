import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export default function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
}: MarqueeProps) {
  const classname = `flex shrink-0 justify-around gap-[var(--marquee-gap)] 
    ${vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row"} 
    ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}
    ${reverse ? "animate-marquee-reverse" : ""}`;
  return (
    <div
      className={
        "group flex overflow-hidden p-2 [gap:var(--marquee-gap)] " +  (vertical ? "flex-col " : "flex-row ") + `${className}`
      }
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={classname}
          >
            {children}
          </div>
        ))}
    </div>
  );
}