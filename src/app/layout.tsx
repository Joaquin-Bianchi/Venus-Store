import Navbar from "../components/ui/navigation/Navbar";
import "./globals.css";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Venus Store | HOME",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
