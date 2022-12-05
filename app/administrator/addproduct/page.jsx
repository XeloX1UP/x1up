import SelectCategory from "./SelectCategory";
import { StockRange } from "./StockRange";
import { SubmitButton } from "./SubmitButton";

export default function AddProduct() {
  return (
    <div className="container px-3">
      <form
        action="/api/newproduct"
        method="POST"
        className="needs-validation"
        encType="multipart/form-data"
        noValidate
        id="newProductForm"
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nombre del producto..."
            required
            minLength={5}
            maxLength={80}
            name="name"
          />
          <div className="valid-feedback">Ok!</div>
          <div className="invalid-feedback">
            Nombre debe contener entre 5 y 80 caracteres
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Descripción del producto..."
            minLength={5}
            maxLength={500}
            required
            name="description"
          ></textarea>
          <div className="valid-feedback">Ok!</div>
          <div className="invalid-feedback">
            Descripción debe contener entre 5 y 500 caracteres
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="category">
            Categoría
          </label>
          <SelectCategory />
          <div className="invalid-feedback">Selecciona una categoría</div>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Valor
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Valor del producto..."
            required
            name="price"
          />
          <div className="invalid-feedback">Ingresa un valor</div>
        </div>
        <StockRange />
        <div className="mb-3">
          <label htmlFor="images" className="form-label">
            Imágenes
          </label>
          <input
            className="form-control"
            type="file"
            id="images"
            multiple
            accept="image/jpeg, image/png, image/gif"
            name="images"
            required
          />
        </div>
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-evenly my-5">
          <SubmitButton />
          <button type="reset" className="btn btn-lg btn-danger my-3 my-md-0">
            Resetear campos
          </button>
        </div>
      </form>
    </div>
  );
}
