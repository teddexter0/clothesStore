import './globals.css'
import { storeConfig } from '../config/store'
import { detectSeason } from '../lib/season'
import WhatsAppFloat from '../components/WhatsAppFloat'
import SeasonalBanner from '../components/SeasonalBanner'

export const metadata = {
  title: `${storeConfig.name} — ${storeConfig.tagline}`,
  description: `Shop at ${storeConfig.name}. ${storeConfig.tagline}. WhatsApp orders, fast delivery.`,
}

export default function RootLayout({ children }) {
  const season = storeConfig.season !== 'default' ? storeConfig.season : detectSeason()

  return (
    <html lang="en" data-season={season}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <SeasonalBanner />
        {children}
        <WhatsAppFloat phone={storeConfig.whatsapp} />
      </body>
    </html>
  )
}
