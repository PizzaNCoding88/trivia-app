import { Aboreto, Alkatra } from "next/font/google";
import "./globals.css";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-aboreto",
});

const alkatra = Alkatra({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-main",
});

export const metadata = {
  title: "Trivia App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${aboreto.variable} ${alkatra.variable}`}>
        {children}
      </body>
    </html>
  );
}
