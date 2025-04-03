import React, { useState, useEffect } from 'react';

import { bannerImg } from "../../assets/index";
import {logo} from "../../assets/index"

const RightBanner = () => {

  const [scrollScale, setScrollScale] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const scale = 1 - scrollPosition * 0.002; // Adjust the scaling speed as needed

      if (scale >= 0.3) {
        setScrollScale(scale);
      } else {
        setScrollScale(0.3);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="image-container">
      <img
        src={logo}
        alt="Your Image"
        style={{
          transform: `scale(${scrollScale})`,
        }}
      />
    </div>
  );
}

export default RightBanner