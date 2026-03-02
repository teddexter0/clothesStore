/**
 * CLOTHES STORE CONFIG — Single source of truth
 * Change this file to white-label for a new client.
 */

export const storeConfig = {
  name: "Velour Collective",
  tagline: "Wear What You Mean",
  whatsapp: "+254700000000",
  email: "hello@velourcollective.co.ke",
  instagram: "@velourcollective",
  currency: "KES",
  address: "Westgate Mall, Nairobi",
  googleAnalyticsId: "",
  colors: {
    primary: "#1A1A1A",
    accent: "#C9A96E",
    bg: "#F7F5F2",
    text: "#1A1A1A",
  },
  // All orders go via WhatsApp — no payment gateway needed
  orderMethod: "whatsapp",
  collections: [
    { name: "Casual", description: "Effortless everyday looks", emoji: "👕" },
    { name: "Office", description: "Sharp fits for the workplace", emoji: "👔" },
    { name: "Weekend", description: "Relaxed styles for your off days", emoji: "🧥" },
  ],
  // Manual season override — set to override auto-detection
  // Options: "default" | "valentine" | "christmas" | "easter"
  season: "default",
};
