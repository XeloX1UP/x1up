import { ImageSection } from "./ImageSection";
import { MetaInfo } from "./MetaInfo";
import { ProductInfo } from "./ProductInfo";

export default async function ProductPage({ params }) {
  const { productID } = params;
  const getProduct = (id) => {
    return fetch(`${process.env.BASE_URL}/api/getproduct`, {
      body: JSON.stringify({ id }),
      method: "POST",
    }).then((res) => res.json());
  };
  const product = await getProduct(productID);
  if (product.name) {
    const { name, description, category, price, stock, status, images } =
      product;
    return (
      <div className="container-md shadow-sm pb-3">
        <div className="row rounded rounded-3 m-lg-2 overflow-hidden shadow">
          <ImageSection images={images} />
          <div className="col-6 text-bg-info bg-gradient d-flex flex-column align-items-center justify-content-center">
            <MetaInfo
              name={name}
              price={price}
              category={category}
              stock={stock}
            />
          </div>
        </div>
        <div className="row my-5">
          <ProductInfo description={description} />
        </div>
      </div>
    );
  } else {
    return <h1>El producto seleccionado no existe</h1>;
  }
}
