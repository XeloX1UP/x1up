import { Footer } from "../components/footer/Footer";
import { Navigation } from "../components/navigation/Navigation";
import "../styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Metadatos */}
        <meta charSet="utf-8" />
        <meta name="author" content="XeloX1UP" />
        <meta name="description" content="Portafolio y Tienda XeloX1UP" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Bootstrap */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossOrigin="anonymous"
        />
        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
        ></link>
        {/* Titulo */}
        <title>X1UP | 😎 Store</title>
        {/* FavIcon */}
        <link rel="icon" type="image/x-icon" href="../images/css.png" />
      </head>
      <body className="text-light">
        <Navigation />
        {children}
        <Footer />

        {/* Script Bootstrap */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
