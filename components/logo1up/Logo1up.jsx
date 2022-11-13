import logo from "../../images/logoNav.png";
import Image from "next/image";
export function Logo1up() {
  return <Image src={logo} fill priority placeholder="blur" alt="Logo X1UP" />;
}
