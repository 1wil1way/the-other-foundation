export default function FormField({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex flex-col gap-2 text-left">
      <span className="font-heading text-sm font-semibold text-brand-cream/90">
        {label}
      </span>
      <input
        {...props}
        className="rounded-lg border border-brand-cream/25 bg-brand-cream/10 px-4 py-3 text-brand-cream placeholder:text-brand-cream/40 outline-none transition-colors focus:border-brand-coral focus:bg-brand-cream/15"
      />
    </label>
  );
}
