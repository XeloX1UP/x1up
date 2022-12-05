import CategoryList from "./CategoryList";
import SubmitCategoryBtn from "./SubmitButton";

export default function addCategoryPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <form
            action="#"
            method="POST"
            className="needs-validation"
            encType="multipart/form-data"
            noValidate
            id="newProductForm"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre de la categoría
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nombre de la categoría..."
                required
                minLength={2}
                maxLength={15}
                name="name"
              />
              <div className="valid-feedback">Ok!</div>
              <div className="invalid-feedback">
                Nombre debe contener entre 2 y 15 caracteres incluyendo espacios
                y paréntesis.
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
                placeholder="Descripción..."
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
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 my-3 my-md-0">
                  <SubmitCategoryBtn />
                </div>
                <div className="col-md-6 my-3 my-md-0">
                  <button
                    type="reset"
                    className="btn btn-outline-danger w-100 h-100"
                  >
                    Limpiar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4 my-md-0 my-4">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
