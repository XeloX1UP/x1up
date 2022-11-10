"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function IsLogged() {
  const [profile, setProfile] = useState({});
  const fetchLogout = async () => {
    const lgd = await fetch("/api/logout", {
      credentials: "same-origin",
      method: "get",
    }).then((res) => res.json);
    if (!lgd.logged) location.href = "/";
  };
  useEffect(() => {
    const fetchLogged = async () => {
      const response = await fetch("/api/profile", {
        credentials: "same-origin",
        method: "get",
      }).then((res) => res.json());
      setProfile(response);
    };
    fetchLogged();
  }, []);
  if (profile.logged) {
    return (
      <li>
        <Link prefetch={false} href={`#`} onClick={fetchLogout}>
          Cerrar sesion
        </Link>
      </li>
    );
  } else {
    return (
      <>
        <li>
          <Link href={`/users/login`}>Iniciar sesion</Link>
        </li>
        <li>
          <Link href={`/users/newuser`}>Registrarse</Link>
        </li>
      </>
    );
  }
}
