import "./globals.css"
import { Inter } from "next/font/google"
import { PropsWithChildren } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gerenciador de Orçamentos",
  description: "Gerenciador de Orçamentos",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
