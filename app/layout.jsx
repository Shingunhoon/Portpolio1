import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"

import Header from "@/components/Header"

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Header />
        <main className="container">
          <div className="flex items-start justify-items-center min-h-screen">
            <div className="mt-20">{children}</div>
          </div>
        </main>
      </html>
    </ClerkProvider>
  )
}
