
import "./styles/globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>Le club créatif</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}




