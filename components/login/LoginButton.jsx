"use client";
import { button, error } from "./Login.module.css";
import { useState } from "react";

const fetchLogIn = (user) => {
  return fetch("/api/login", {
    body: JSON.stringify(user),
    method: "post",
    credentials: "same-origin",
  }).then((res) => res.json());
};
const loggin = () => {
  location.href = "/";
};
const validUser = (user) => {
  let errors = [];
  const emailExp =
    /^[a-zA-Z0-9.-_]{1,30}\@{1}[a-zA-Z0-9.-_]{1,30}\.{1}(com|cl|org)$/;
  const passExp = /^[a-zA-Z0-9.-_&$#]{4,10}$/;
  if (!passExp.test(user.password))
    errors.push({
      message: "Contraseña inválida",
    });
  if (!emailExp.test(user.email)) errors.push({ message: "Correo inválido" });
  if (errors.length > 0) {
    user.error = errors;
    return false;
  }
  return true;
};
export const LoginButton = () => {
  const [msj, setMsj] = useState([]);
  const btnHandler = async (e) => {
    e.preventDefault();
    const user = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    if (validUser(user)) {
      const action = await fetchLogIn(user);
      if (action.login) {
        setMsj([]);
        loggin();
      } else {
        //Errores del servidor
        const messages = action.errors.map((err) => err.message);
        setMsj(messages);
      }
    } else {
      //Errores de validacion HTML
      const messages = user.error.map((err) => err.message);
      setMsj(messages);
    }
  };
  return (
    <>
      <div>
        {msj.map((m, i) => (
          <p key={i + 1} className={error}>
            {m}
          </p>
        ))}
      </div>

      <button type="submit" onClick={btnHandler} className={button}>
        Login
      </button>
    </>
  );
};
