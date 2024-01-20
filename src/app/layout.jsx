import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Dusun 10 Desa Girimulyo",
  description: "Website Informasi Dusun 10 Desa Girimulyo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://js.arcgis.com/4.27/esri/themes/light/main.css"
        />
        <script src="https://js.arcgis.com/4.27/"></script>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
