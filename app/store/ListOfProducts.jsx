'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export const ListOfProducts = () => {
  const [products, setProducts] = useState([])

  const listOfProducts = async () => {
    const result = await fetch(`/api/productlist`).then((res) =>
      res.json()
    );
    setProducts(result)
  };
  useEffect(()=>{
    listOfProducts()
  },[])

  return (
    <div className="row my-5">
      <div className="col">
        <h1 className="text-center">Aquí puedes ver nuestros productos</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {products.map(
            ({ _id, name, images, price, stock, description, category }, i) => (
              <div
                key={_id}
                className="card text-center text-bg-dark m-3"
                style={{ width: "250px" }}
              >
                <div
                  className="w-100 position-relative"
                  style={{ height: "200px" }}
                >
                  <Image
                    src={images[0].url}
                    className="card-img-top"
                    alt={name}
                    fill
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text border-bottom border-1 border-primary w-100 m-0">
                    <span className="fw-bolder">Descripción:</span>
                    {` ${description.slice(0, 15)}...`}
                  </p>
                  <p className="card-text border-bottom border-1 border-primary w-100 m-0">
                    <span className="fw-bolder">Precio:</span>
                    {` $${price}.`}
                  </p>
                  <p className="card-text border-bottom border-1 border-primary w-100 m-0">
                    <span className="fw-bolder">Stock:</span>
                    {` ${stock} unidades.`}
                  </p>
                  <Link
                    href={`/store/categories/${category}/${_id}`}
                    className="btn btn-primary mt-3"
                  >
                    Ver producto
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
