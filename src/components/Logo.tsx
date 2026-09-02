import Image from "next/image";

export default function Logo({ className = "h-16 sm:h-20" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="The Other Foundation"
      width={308}
      height={126}
      priority
      className={`w-auto ${className}`}
    />
  );
}
