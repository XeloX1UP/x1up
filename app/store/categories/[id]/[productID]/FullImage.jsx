import Image from "next/image";
import { Suspense } from "react";

export const FullImage = ({ image }) => {
  return (
    <div className="position-relative w-100 h-100 my-3">
      <Image
        src={image}
        fill
        alt="Image-product"
        className="rounded rounded-3"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};
