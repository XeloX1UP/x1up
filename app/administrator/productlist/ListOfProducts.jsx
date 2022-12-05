'use client'
import Link from "next/link";
import { useState, useEffect } from "react";



export const ListOfProducts = () => {
  const [list, setList] = useState([])
  const productList = async () => {
    const result = await fetch(`/api/productlist`).then((res) =>
      res.json()
    )
    setList(result)
  }
  useEffect(()=> {
    productList()
  }, [])
  if (list.length < 1) return null
  return (
    <>
      {list.map(
        ({
          _id,
          author,
          name,
          category,
          price,
          stock,
          description,
          status
        }) => (
          <div key={_id} className="row my-3 bg-dark py-2 rounded">
            <div className="col-8 text-start">
              <p className="m-0 fw-bold">
                Nombre: <span className="fw-normal">{name}</span>
              </p>
              <p className="m-0 fw-bold">
                Descripción:{" "}
                <span className="fw-normal">
                  {description.slice(0, 20)}. . .
                </span>
              </p>
              <p className="m-0 fw-bold">
                Valor: $<span className="fw-normal">{price}</span>
              </p>
              <p className="m-0 fw-bold">
                Stock: <span className="fw-normal">{stock}</span>
              </p>
              <p className="m-0 fw-bold">
                Status: <span className="fw-normal">{status}</span>
              </p>
            </div>
            <div className="col-4 my-auto">
              <Link href="#" className="">
                <i className="bi bi-pencil-fill text-primary me-4 fs-3" />
              </Link>
              <Link href="#" className="">
                <i className="bi bi-x-circle text-danger fs-3" />
              </Link>
            </div>
          </div>
        )
      )}
    </>
  );
};
