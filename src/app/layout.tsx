import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sawthetphyoe.me"),
  title: "Saw Thet Phyoe - Software Engineer",
  description:
    "Experienced software engineer specializing in web development, skilled in frontend and backend technologies, delivering efficient and scalable web applications.",
  applicationName: "Saw Thet Phyoe - Software Engineer",
  icons: {
    icon: "/icon.png",
  },
  authors: [{ name: "Saw Thet Phyoe", url: "https://sawthetphyoe.me" }],
  keywords: [
    "sawthet",
    "sawthetphyoe",
    "sawthetphyoe.me",
    "Saw",
    "Saw Thet",
    "Saw Thet Phyoe",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Full Stack Developer",
  ],
  creator: "Saw Thet Phyoe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
