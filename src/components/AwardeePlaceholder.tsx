import Logo from "./Logo";

const TONES = {
  teal: "bg-brand-teal",
  coral: "bg-brand-coral",
} as const;

export default function AwardeePlaceholder({
  tone = "teal",
  logoClassName = "h-8",
}: {
  tone?: keyof typeof TONES;
  logoClassName?: string;
}) {
  return (
    <div className={`flex h-full w-full items-center justify-center ${TONES[tone]}`}>
      <Logo className={`w-auto opacity-25 ${logoClassName}`} />
    </div>
  );
}
