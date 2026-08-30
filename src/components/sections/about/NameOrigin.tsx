import FadeIn from "../../FadeIn";

export default function NameOrigin() {
  return (
    <section className="bg-brand-cream px-6 pb-32 pt-40 sm:px-10 sm:pb-44 sm:pt-48 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="font-heading text-4xl font-bold text-brand-teal sm:text-5xl">
            Where the name comes from.
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mt-12 text-2xl leading-relaxed text-brand-teal sm:text-3xl">
            In 2019, we held The Other Awards, a show that celebrated the bus
            drivers, parking attendants, and teachers who make Birmingham
            what it is. That is where the name comes from, and that heritage
            still runs through everything we do. A group of ten people
            started giving together in 2017. Now we fund somebody new every
            month.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
