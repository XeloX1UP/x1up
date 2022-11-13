import { contactCard } from "./home.module.css";
import { About } from "../components/Cards/About";
import { Contact } from "../components/Cards/Contact";

export const ContactCard = () => {
  return (
    <div className={contactCard}>
      <About />
      <Contact />
    </div>
  );
};
