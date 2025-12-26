import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "International Distributors | Food Wholesale | Guam",
    description: "International Distributors, Inc. - Your local food wholesaler serving Guam and Micronesia since 1980. Quality food distribution for restaurants, hotels, and retailers.",
    keywords: ["food distributor", "Guam", "wholesale", "produce", "frozen foods", "Micronesia", "International Distributors"],
    openGraph: {
        title: "International Distributors | Food Wholesale | Guam",
        description: "Your local food wholesaler serving Guam and Micronesia since 1980.",
        type: "website",
    },
    icons: {
        icon: '/icon.svg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
            </head>
            <body className="min-h-screen bg-white">
                {children}
            </body>
        </html>
    );
}
