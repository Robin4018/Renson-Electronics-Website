import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rensonelectronics.com"),
  title: {
    default: "Renson Electronics — Industrial Powder Coating & Power Electronics",
    template: "%s · Renson Electronics",
  },
  description:
    "Electrostatic powder coating, voltage stabilizers and battery chargers manufactured in Coimbatore since 1986. Two purpose-built units, 15,000 sq ft, MSME registered.",
  keywords: [
    "powder coating Coimbatore",
    "voltage stabilizer manufacturer",
    "battery charger manufacturer",
    "electrostatic coating",
    "industrial surface finishing",
  ],
  openGraph: {
    title: "Renson Electronics — Built to Last",
    description:
      "Industrial surface finishing and power electronics, engineered in Coimbatore since 1986.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
