import "./globals.css"
import Header from "@/components/Header"

export const metadata = {
  title: "Bupart — б/у автозапчасти",
  description: "Маркетплейс б/у автозапчастей всех марок",
}

export default function RootLayout({ children }: any) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}