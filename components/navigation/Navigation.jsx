import Link from "next/link";
import { Logo1up } from "../logo1up/Logo1up";
import styles from "./Navigation.module.css";
import { IsLogged } from "./IsLogged";

const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Proyectos",
    route: "/about",
  },
  {
    label: "Publicaciones",
    route: "/posts",
  },
];
export function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.cntLogo}>
        <Logo1up />
      </div>

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
