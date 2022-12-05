"use client";

import { useEffect, useState } from "react";

export const StockRange = () => {
  const [value, setValue] = useState("1");
  const rangeHandler = () => {
    setValue(document.getElementById("stock").value);
  };
  return (
    <div className="mb-3">
      <label htmlFor="stockRange" className="form-label">
        {`Cantidad: ${value}`}
      </label>
      <input
        type="range"
        onChange={rangeHandler}
        className="form-range"
        min="1"
        max="50"
        id="stock"
        defaultValue={1}
      />
    </div>
  );
};
