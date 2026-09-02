"use client";

import { useRef, useState } from "react";
import FadeIn from "../../FadeIn";

export default function InterviewFeature() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <section className="relative overflow-hidden bg-brand-teal px-6 pb-28 pt-40 sm:px-10 sm:pb-36 sm:pt-48 lg:px-16">
      <div className="relative z-10 mx-auto max-w-5xl">
        <FadeIn>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-coral">
            The interview
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="mt-4 font-heading text-4xl font-bold text-brand-cream sm:text-5xl">
            Hear it from the people we fund.
          </h2>
        </FadeIn>

        <FadeIn delay={250}>
          <div className="relative mt-14 aspect-video w-full overflow-hidden rounded-3xl bg-black shadow-2xl">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster="/images/photos/interview-poster.jpg"
              controls={playing}
              playsInline
              preload="none"
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            >
              <source src="/videos/interview.mp4" type="video/mp4" />
            </video>

            {!playing && (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Play the interview"
                className="group absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-coral shadow-lg transition-transform group-hover:scale-110 sm:h-24 sm:w-24">
                  <svg viewBox="0 0 24 24" className="ml-1 h-9 w-9 fill-brand-cream">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
