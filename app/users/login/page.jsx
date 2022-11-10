"use client";
import { useEffect, useState } from "react";
import { LoginForm } from "../../../components/login/loginForm";

export default function LoginPage() {
  const [loged, setLoged] = useState({ logged: false });
  useEffect(() => {
    const fetchLog = async () => {
      const lgd = await fetch("/api/profile", {
        credentials: "same-origin",
        method: "get",
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
      setLoged(lgd);
    };
    fetchLog();
  }, []);
  if (!loged.logged) return <LoginForm />;

  return <h2>Usted ya se encuentra loggeado</h2>;
}
