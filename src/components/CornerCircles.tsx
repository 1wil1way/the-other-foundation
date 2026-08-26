export function BottomLeftCircles({
  light,
  dark,
}: {
  light: string;
  dark: string;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute left-0 bottom-0">
      <div
        className={`absolute left-0 top-0 h-[640px] w-[640px] -translate-x-1/2 translate-y-1/2 rounded-full ${light}`}
      />
      <div
        className={`absolute left-0 top-0 h-[440px] w-[440px] -translate-x-1/2 translate-y-1/2 rounded-full ${dark}`}
      />
    </div>
  );
}

export function TopLeftCircles({
  light,
  dark,
}: {
  light: string;
  dark: string;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute left-0 top-0">
      <div
        className={`absolute left-0 top-0 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full ${light}`}
      />
      <div
        className={`absolute left-0 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full ${dark}`}
      />
    </div>
  );
}
