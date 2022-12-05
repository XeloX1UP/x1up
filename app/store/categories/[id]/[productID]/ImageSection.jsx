"use client";
import { useState } from "react";
import { FullImage } from "./FullImage";
import { PreImage } from "./PreImages";

export const ImageSection = ({ images }) => {
  const [imageSelected, setImageSelected] = useState();
  const changeHandler = (e) => {
    const src = e.target.getAttribute("id");
    setImageSelected(src);
  };
  return (
    <>
      <div className="col-2 bg-dark bg-gradient">
        <PreImage imageList={images} changeEvent={changeHandler} />
      </div>
      <div className="col-4 d-flex align-items-center justify-content-center bg-dark bg-gradient py-3">
        <FullImage image={imageSelected || images[0].url} />
      </div>
    </>
  );
};
