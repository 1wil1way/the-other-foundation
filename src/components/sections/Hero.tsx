import FadeIn from "../FadeIn";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-brand-teal">
      {/* Background video — drop the exported file at public/videos/hero.mp4 */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-brand-teal/75" />

      <div className="relative z-10 flex flex-1 flex-col">
        <main className="flex flex-1 flex-col justify-center px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <FadeIn>
              <h1 className="font-heading text-4xl font-bold leading-tight text-brand-cream sm:text-5xl lg:text-6xl">
                Every month, somebody in Birmingham gets funded, and our
                members decide who.
              </h1>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-brand-cream/90">
                For $100 a month you get a vote, a room full of neighbors, and
                a handshake with the person you funded.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-coral"
                >
                  Apply for Grant
                </a>
                <a
                  href="/join"
                  className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-4 font-heading font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-coral"
                >
                  Become a member
                </a>
              </div>
            </FadeIn>
          </div>
        </main>

        <div className="flex justify-center pb-10">
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce text-brand-teal-dark"
          >
            <path
              d="M10 0V26M10 26L2 18M10 26L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
