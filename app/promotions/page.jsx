import { PromotionCard } from "./PromotionCard";
const promos = [
  {
    title: "Tarjeta Match",
    subTitle: "Crea una cuenta Match",
    body: (
      <>
        Debes descargar la aplicación con mi código para que ganes{" "}
        <strong>$5.000</strong> al momento de hacer tu primera compra.
      </>
    ),
    link: "https://bajamach.com/bKFfBZ7Jppb",
  },
  {
    title: "Muevo COPEC",
    subTitle: "Café + $50 de dcto. por litro de combustible",
    body: (
      <>
        Utiliza mi código para ganar un <strong>café gratis</strong> y un cupón
        de bienvenida de <strong>$50 de descuento por litro</strong> en tu
        recarga de combustible pagando con Muevo.
      </>
    ),
    code: "R6CINKJX",
  },
];
export default function PromotionsPage() {
  return (
    <div className="container-md">
      <h1 className="my-4 text-center">#Promos1UP</h1>
      {promos.map(({ title, subTitle, body, link, code }) => (
        <PromotionCard
          title={title}
          subTitle={subTitle}
          body={body}
          link={link}
          code={code}
        />
      ))}
    </div>
  );
}
