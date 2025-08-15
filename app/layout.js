

// app/layout.js
import './globals.css'

export const metadata = {
  title: 'StyleHub Kenya - Latest Fashion Trends & Clothing Online',
  description: 'Shop the latest fashion trends at StyleHub Kenya. Quality clothing for men, women & kids. Fast delivery across Nairobi & Kenya.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-white text-gray-900">{children}</body>
    </html>
  )
}
