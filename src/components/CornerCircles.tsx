import Parallax from "./Parallax";

export function BottomLeftCircles({
  light,
  dark,
}: {
  light: string;
  dark: string;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute left-0 bottom-0">
      <Parallax speed={0.08} className="absolute left-0 top-0">
        <div
          className={`h-[640px] w-[640px] -translate-x-1/2 translate-y-1/2 rounded-full ${light}`}
        />
      </Parallax>
      <Parallax speed={0.16} className="absolute left-0 top-0">
        <div
          className={`h-[440px] w-[440px] -translate-x-1/2 translate-y-1/2 rounded-full ${dark}`}
        />
      </Parallax>
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
      <Parallax speed={0.08} className="absolute left-0 top-0">
        <div
          className={`h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full ${light}`}
        />
      </Parallax>
      <Parallax speed={0.16} className="absolute left-0 top-0">
        <div
          className={`h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full ${dark}`}
        />
      </Parallax>
    </div>
  );
}
