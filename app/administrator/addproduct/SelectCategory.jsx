"use client";

import { useEffect, useState } from "react";

export default function SelectCategory() {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const result = await fetch("/api/categorylist", {
        credentials: "same-origin",
        method: "GET",
      }).then((res) => res.json());
      setCategories(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      id="category"
      defaultValue={0}
      required
      name="category"
    >
      <option value="">Selecciona...</option>
      {categories.map(({ _id, name }) => (
        <option key={_id} value={_id}>
          {name}
        </option>
      ))}
    </select>
  );
}
