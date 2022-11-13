import styles from "./home.module.css";
import Image from "next/image";
export default function CardOffer({ image, alt, title, texts, gkey }) {
  return (
    <div className={styles.card} key={gkey}>
      <div className={styles.img}>
        <Image
          src={image}
          alt={alt}
          placeholder="blur"
          fill
          objectFit="content"
          priority
        />
      </div>
      <div className={styles["text-area"]}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.ul}>
          {texts.map((text, i) => (
            <li key={i + 1} className={styles.text}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
