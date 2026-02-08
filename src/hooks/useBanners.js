import { useState } from "react"
import BANNERS from "../data/banners"

function useBanners() {
  const [ activeBanners, setActiveBanners ] = useState([]);
  
  const addBanner = (difficulty) => {
    const banner = BANNERS.find(
      b => b.difficulty === difficulty
    );
    if (!banner) return;
    setActiveBanners(prev => [...prev, banner]);
  };

  return [
    activeBanners,
    addBanner
  ]
}

export default useBanners