import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"

// Changed fonts to Inter and Plus Jakarta Sans for Finezit branding
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

// Updated metadata for Finezit POC
export const metadata: Metadata = {
  title: "Finezit - Tax and Accounting Solutions",
  description:
    "Comprehensive tax and accounting management platform for entrepreneurs and businesses. Cloud-based invoicing, accounting, and tax compliance.",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Changed lang="es" to lang="en"
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}