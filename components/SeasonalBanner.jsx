'use client';

import { useState } from 'react';
import { storeConfig } from '../config/store';
import { detectSeason } from '../lib/season';

const BANNERS = {
  default: { message: '', visible: false },
  valentine: {
    message: "💕 Valentine's Edit — Dress for the moment. Shop our curated picks.",
    visible: true,
  },
  christmas: {
    message: '🎄 Festive Season Fits — Look good at every party. New arrivals in.',
    visible: true,
  },
  easter: {
    message: '🌸 Fresh season, fresh wardrobe. Shop the new collection.',
    visible: true,
  },
};

export default function SeasonalBanner() {
  const [dismissed, setDismissed] = useState(false);
  const season = storeConfig.season !== 'default' ? storeConfig.season : detectSeason();
  const banner = BANNERS[season] || BANNERS.default;

  if (!banner.visible || dismissed) return null;

  return (
    <div className="seasonal-banner">
      <span>{banner.message}</span>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="ml-4 opacity-70 hover:opacity-100 font-bold text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}
