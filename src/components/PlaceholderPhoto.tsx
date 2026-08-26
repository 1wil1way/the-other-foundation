export default function PlaceholderPhoto({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-400">
      <span className="px-4 text-center text-xs text-white/80">{label}</span>
    </div>
  );
}
