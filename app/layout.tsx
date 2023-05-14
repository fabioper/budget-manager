import "./globals.css"
import { Inter } from "next/font/google"
import { PropsWithChildren } from "react"
import Header from "@/shared/layout/header/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gerenciador de Orçamentos",
  description: "Gerenciador de Orçamentos",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
