"use client";
import { useState } from "react";
import styles from "./newuser.module.css";

export default function ButtonSubmit() {
  const [msgs, setMsgs] = useState([]);
  const handler = async (e) => {
    e.preventDefault();
    const data = {
      firstName: document.getElementById("firstName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      email: document.getElementById("email").value.trim(),
      reEmail: document.getElementById("re-email").value.trim(),
      password: document.getElementById("password").value.trim(),
      rePassword: document.getElementById("re-password").value.trim(),
    };

    const frmVal = formValidate(data);
    if (!frmVal.valid) {
      setMsgs(frmVal.messages);
    } else {
      const response = await fetch("/api/newuser", {
        method: "post",
        body: JSON.stringify(data),
      }).then((res) => res.json());
      setMsgs([]);
      if (response.isCreated) {
        alert(
          `Usuario creado exitosamente. Revisa tu bandeja de entrada (${data.email})`
        );
        location.href = "/users/login";
      } else {
        alert(response.errors);
        location.href = "/users/login";
      }
    }
  };
  const formValidate = (data) => {
    const rgx = {
      firstName: /^[a-zA-Z\sÀ-ÿ\u00f1\u00d1]{3,40}$/,
      lastName: /^[a-zA-Z\sÀ-ÿ\u00f1\u00d1]{3,40}$/,
      email: /^[a-zA-Z0-9.-_]{1,30}\@[a-zA-Z0-9.-_]{1,30}\.(com|cl|org)$/,
      password: /^[a-zA-Z./&%$-_,]{3,10}$/,
    };
    let msg = [];
    if (!rgx.firstName.test(data.firstName))
      msg.push({
        message: "Nombre inválido (Debe contener entre 3 y 40 letras)",
      });
    if (!rgx.lastName.test(data.lastName))
      msg.push({
        message: "Apellido inválido (Debe contener entre 3 y 40 letras)",
      });
    if (!rgx.email.test(data.email))
      msg.push({ message: "Correo formato inválido" });
    if (!rgx.password.test(data.password))
      msg.push({
        message:
          "Contraseña inválida (Debe contener entre 3 y 10 caracteres incluidos '. / & % $ - _ , ')",
      });
    if (data.email != data.reEmail)
      msg.push({ message: "Los correos deben coincidir" });
    if (data.password != data.rePassword)
      msg.push({ message: "Las contraseñas deben coincidir" });
    if (msg.length > 0) return { messages: msg, valid: false };
    return { data, valid: true };
  };

  return (
    <>
      {msgs.map((msg, i) => (
        <p key={i + 1} className={styles.error}>
          {msg.message}
        </p>
      ))}
      <button type="submit" onClick={handler} className={styles.button}>
        Registrarse
      </button>
    </>
  );
}
