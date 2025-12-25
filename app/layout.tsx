import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "IDI Guam | Premier Food Distributor",
    description: "IDI Guam - Your trusted food distribution partner serving the Guam community with quality products and exceptional service.",
    keywords: ["food distributor", "Guam", "wholesale", "produce", "frozen foods"],
    openGraph: {
        title: "IDI Guam | Premier Food Distributor",
        description: "Your trusted food distribution partner serving the Guam community.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-white">
                {children}
            </body>
        </html>
    );
}
