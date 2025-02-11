import { Roboto } from "next/font/google";
import "../styles/globals.css";
import ClientLayout from "./clientLayout";

const roboto = Roboto({
  weight: ["300"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "HydroFlow Lude",
  description:
    "Web Application which provides the ability to monitor nutrient levels of a plant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/hydroponics.png" />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
