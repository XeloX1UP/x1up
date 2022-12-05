import Link from "next/link";
import Modal from "./Modal";

const getCategory = (id) => {
  return fetch(`${process.env.BASE_URL}/api/getcategory/${id}`).then((res) =>
    res.json()
  );
};
const bodyBuyNow = (
  <p>
    Por estos momentos sólo aceptamos transferencias electrónicas. <br />
    Te recomiendo que te comuniques con nosotros para saber más sobre{" "}
    <strong>disponibilidad </strong>y métodos de <strong>envíos</strong>{" "}
    disponibles para su localidad
  </p>
);
const bodyAdd = (
  <p>
    <strong>Esta parte aún está en construcción</strong>
  </p>
);
export const MetaInfo = async ({ name, price, category, stock }) => {
  const cName = await getCategory(category);
  const email = {
    date: new Date().toLocaleDateString(),
    name: "monk.da15@gmail.com",
    body: `Dudas sobre ${name}`,
    category: cName.name,
  };
  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-10">
          <h2>{name}</h2>
        </div>
        <div className="col-2">
          <div>acciones</div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 my-3">
          <p>
            Valor: <span className="fw-bold">{`$ ${price}`}</span>
          </p>
          <p>
            Categoría:{" "}
            <Link href={`/store/categories/${category}`}>
              <span className="fw-bold">{`${cName.name}`}</span>
            </Link>
          </p>
          <p>
            Stock: <span className="fw-bold">{`${stock} unidades`}</span>
          </p>
        </div>
        <div className="col-4">acciones carrito de compra</div>
      </div>
      <div className="row">
        <div className="col-12 d-flex flex-row flex-nowrap align-items-center justify-content-evenly">
          <Modal
            title={"¿Cómo comprar?"}
            body={bodyBuyNow}
            btnName={"Comprar ahora"}
            id="modal1"
            email={email}
          />
          <Modal
            title={"En construcción"}
            body={bodyAdd}
            btnName={"Agregar al carro"}
            secundary
            id="modal2"
            email={email}
          />
        </div>
      </div>
    </div>
  );
};
