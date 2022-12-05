import Image from "next/image";
import { Suspense } from "react";
export const PreImage = ({ imageList, changeEvent }) => {
  return (
    <ul className="my-3 px-0 py-3 d-flex flex-row flex-wrap align-items-center justify-content-center">
      {imageList.map(({ url, ref }) => (
        <li
          key={url}
          className="position-relative border border-info border-opacity-50"
          onClick={changeEvent}
          style={{ listStyle: "none", cursor: "pointer" }}
        >
          <Image
            src={url}
            alt={"image-small"}
            className="rounded m-1"
            width={60}
            height={60}
            id={url}
          />
        </li>
      ))}
    </ul>
  );
};
