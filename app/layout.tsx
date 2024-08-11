import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "@/components/navbar";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
    title: "Skin and you",
    description: "Created by Vijay Meena"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <CssBaseline />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
