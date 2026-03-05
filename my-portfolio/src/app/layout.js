import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Avinav | Software Engineer",
  description: "Portfolio of Avinav - Computer Science Student & QA Developer Co-op",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}