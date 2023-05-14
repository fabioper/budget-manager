import "./globals.css"
import { Roboto as Inter } from "next/font/google"
import { PropsWithChildren } from "react"
import Header from "@/shared/layout/header/Header"

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--primary-font",
})

export const metadata = {
  title: "Gerenciador de Orçamentos",
  description: "Gerenciador de Orçamentos",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
