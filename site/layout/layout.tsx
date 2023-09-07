import { Space_Mono, Poppins } from "next/font/google";
const space_mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${space_mono.variable} ${poppins.variable}`}>
      {children}
    </div>
  );
}
