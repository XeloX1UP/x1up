import { contactCard } from "./home.module.css";
import { About } from "../components/Cards/About";
import { Contact } from "../components/Cards/Contact";

export const ContactCard = () => {
  return (
    <div
      className={`container-lg d-flex flex-column justify-content-center align-items-center my-5 flex-md-row`}
    >
      <About />
      <Contact />
    </div>
  );
};
