import { LoginInput } from "./LoginInputTxt";
import { form } from "./Login.module.css";
import { LoginButton } from "./LoginButton";
import Link from "next/link";

export const LoginForm = () => {
  return (
    <form className={form} method="POST" action="/api/newuser">
      <h2>Iniciar sesion</h2>
      <LoginInput placeholder="Usuario" id="email" type="email" />
      <LoginInput placeholder="Contraseña" id="password" type="password" />
      <Link href="/users/newuser">¿No tienes cuenta? Registrate aqui.</Link>
      <Link href="/users/passforggot">¿Olvidó su contraseña?</Link>
      <LoginButton />
    </form>
  );
};
