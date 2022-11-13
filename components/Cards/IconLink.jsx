import Image from "next/image";
import Link from "next/link";

export const IconLink = ({ url, image }) => {
  if (url) {
    return (
      <Link href={url} target="_blank">
        <Image src={image} width={40} height={40} />
      </Link>
    );
  }
  return <Image src={image} width={40} height={40} />;
};
