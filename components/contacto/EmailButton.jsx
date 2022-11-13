"use client";
import { btn } from "./emailButton.module.css";
import icon from "../../images/emailIcon.png";
import Image from "next/image";
import Link from "next/link";
export const EmailButton = () => {
  const date = new Date().toLocaleDateString();
  const data = {
    mail: "monk.da15@gmail.com",
    date,
  };
  return (
    <Link
      href={`mailto:${data.mail}?Subject=${data.date}%20Quisiera%20contactarme%20contigo!`}
    >
      <button className={btn}>
        <Image src={icon} width={40} height={35} alt="email-contact-icon" />
      </button>
    </Link>
  );
};
