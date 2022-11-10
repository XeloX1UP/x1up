"use client";
import { useState } from "react";
import styles from "./LikeButton.module.css";

export function LikeButton({ id }) {
  const [liked, setLiked] = useState(false);
  const handleButton = () => {
    return setLiked(!liked);
  };

  return (
    <button className={styles.button} onClick={handleButton}>
      {liked ? "👍🏼" : "👎🏼"}
    </button>
  );
}
