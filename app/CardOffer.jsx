import styles from "./home.module.css";
import Image from "next/image";
export default function CardOffer({ image, alt, title, texts, gkey }) {
  return (
    <div className={`container-lg my-4`}>
      <div className={`row ${styles.container} ${styles.shadow}`}>
        <div className="col-md-5 d-none d-md-block">
          <div className="position-relative h-100">
            <Image src={image} alt={alt} placeholder="blur" fill priority />
          </div>
        </div>
        <div
          className={`col-12 col-md-7 d-flex flex-column justify-content-center align-items-center`}
        >
          <h2 className="text-center">{title}</h2>
          <ul className="">
            {texts.map((text, i) => (
              <li key={i + 1} className="">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
