import FadeIn from "../FadeIn";
import PlaceholderPhoto from "../PlaceholderPhoto";

const AWARDEES = [
  { name: "Organization Name", date: "Month Year" },
  { name: "Organization Name", date: "Month Year" },
  { name: "Organization Name", date: "Month Year" },
  { name: "Organization Name", date: "Month Year" },
];

export default function TheOtherAwardees() {
  return (
    <section className="bg-brand-cream px-6 py-24 sm:px-10 lg:px-16">
      <FadeIn>
        <h2 className="font-heading text-4xl font-medium sm:text-5xl">
          <span className="text-brand-teal">The </span>
          <span className="text-brand-coral">Other</span>
          <span className="text-brand-teal"> Awardees</span>
        </h2>
      </FadeIn>

      <div className="mt-24 grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-4 sm:gap-10">
        {AWARDEES.map((awardee, i) => (
          <FadeIn key={i} delay={i * 120}>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="aspect-square w-full max-w-[300px] overflow-hidden rounded-full">
                <PlaceholderPhoto label="Awardee photo — swap in real asset" />
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-brand-teal">
                  {awardee.name}
                </p>
                <p className="text-sm text-brand-coral">{awardee.date}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
