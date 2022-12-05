import CardOffer from "./CardOffer";
import { ContactCard } from "./ContactCard";
import images from "./getImg";
const cards = [
  {
    title: "Mi nombre es Eduardo Moncada.",
    texts: [
      "Egresado de la carera Analista de Sistemas y Programador del instituto técnico profesional INACAP.",
      "Mis comienzos en el mundo de la programacion fueron con Java, HTML, JavaScript, CSS, ASP.Net, C++ y C#.",
    ],
    image: images.img1,
    alt: "codigo-x1up-web-design",
    id: 1,
  },
  {
    title: "Bases de datos",
    texts: [
      "Tengo experiencia con el uso de bases de datos relacionales cómo SQL Server y Oracle Database.",
      "Actualmente utilizo Mongo DB (No relacional) para el desarrollo de mis soluciones.",
    ],
    image: images.img2,
    alt: "",
    id: 2,
  },
  {
    title: "GitHub / Docker",
    texts: [
      "Conocimientos básicos de GitHub y Docker.",
      "Creación de imágenes y contenedores mediante DockerFile y docker-compose (YML).",
    ],
    image: images.img3,
    alt: "",
    id: 3,
  },
];

export default function HomePage() {
  return (
    <div>
      {cards.map((card) => (
        <CardOffer
          image={card.image}
          alt={card.alt}
          title={card.title}
          texts={card.texts}
          gkey={card.id}
        />
      ))}
      <ContactCard />
    </div>
  );
}
