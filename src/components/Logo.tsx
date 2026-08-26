import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo.png"
      alt="The Other Foundation"
      width={308}
      height={126}
      priority
      className="h-16 w-auto sm:h-20"
    />
  );
}
