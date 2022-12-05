import { LoginInput } from "../../../components/login/LoginInputTxt";
import ButtonSubmit from "./ButtonSubmit";
import { form } from "./newuser.module.css";
export default function NewUserPage() {
  return (
    <form
      className={`d-flex flex-column align-items-center justify-content-center text-light my-4 w-100 mx-auto py-3 ${form}`}
      style={{ maxWidth: 400 + "px" }}
    >
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
  );
}
