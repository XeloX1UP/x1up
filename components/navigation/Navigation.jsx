import Link from "next/link";
import { Logo1up } from "../logo1up/Logo1up";
import styles from "./Navigation.module.css";
import { IsLogged } from "./IsLogged";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Posts",
    route: "/posts",
  },
];
export function Navigation() {
  return (
    <header className={styles.header}>
      <Logo1up />
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
          <IsLogged />
        </ul>
      </nav>
    </header>
  );
}
