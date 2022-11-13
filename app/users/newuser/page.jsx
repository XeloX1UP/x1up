import { LoginInput } from "../../../components/login/LoginInputTxt";
import ButtonSubmit from "./ButtonSubmit";
import styles from "./newuser.module.css";
export default function NewUserPage() {
  return (
    <div className="section">
      <form className={`${styles.form}`}>
        <h2>Registro nuevo usuario</h2>
        <LoginInput placeholder="Nombre" id="firstName" type="text" />
        <LoginInput placeholder="Apellido" id="lastName" type="text" />
        <LoginInput placeholder="Correo electrónico" id="email" type="email" />
        <LoginInput
          placeholder="Repite correo electrónico"
          id="re-email"
          type="email"
        />
        <LoginInput placeholder="Contraseña" id="password" type="password" />
        <LoginInput
          placeholder="Repite contraseña"
          id="re-password"
          type="password"
        />
        <ButtonSubmit />
      </form>
    </div>
  );
}
