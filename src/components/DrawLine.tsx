"use client";

import { useEffect, useRef, useState } from "react";

export default function DrawLine({
  direction,
  className = "",
}: {
  direction: "horizontal" | "vertical";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isHorizontal = direction === "horizontal";

  return (
    <div
      ref={ref}
      className={`bg-brand-cream transition-transform duration-700 ease-out motion-reduce:duration-0 ${
        isHorizontal
          ? `h-1 w-full origin-left ${visible ? "scale-x-100" : "scale-x-0"}`
          : `w-1 origin-bottom ${visible ? "scale-y-100" : "scale-y-0"}`
      } ${className}`}
    />
  );
}
