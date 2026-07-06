"use client";

import { useEffect, useRef, useState } from "react";

type State = "initial" | "hidden" | "visible";

export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Starts "initial" (fully visible) so content is never hidden without JS.
  const [state, setState] = useState<State>("initial");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setState("visible");
      return;
    }

    // If it's already on screen at mount, don't animate — just show it.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      setState("visible");
      return;
    }

    setState("hidden");
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setState("visible");
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const hidden = state === "hidden";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(24px)" : "none",
        transition:
          state === "initial"
            ? undefined
            : "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        willChange: hidden ? "opacity, transform" : undefined,
      }}
    >
      {children}
    </div>
  );
}
