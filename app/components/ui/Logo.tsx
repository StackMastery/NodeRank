import Image from "next/image";
import Link from "next/link";
import LogoURI from "../../../public/logo.svg";

type LogoProps = {
  href?: string;
};

const Logo = ({ href = "/" }: LogoProps) => {
  return (
    <Link href={href} className="flex items-center gap-3 w-fit">
      <Image
        width={45}
        src={LogoURI}
        alt="Node Rank Logo"
        className="hover:animate-spin duration-[10000] origin-center"
      />
    </Link>
  );
};

export default Logo;
