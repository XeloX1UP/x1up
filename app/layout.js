import { Footer } from "../components/footer/Footer";
import { Navigation } from "../components/navigation/Navigation";
import "../styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>😎 Mi primer NextJS</title>
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
