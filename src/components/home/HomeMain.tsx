import React from 'react';
import CategoryBanner from './CategoryBanner';
// import CategoryArea from './CategoryArea';
// import FeaturesArea from '../SharedComponents/FeaturesArea';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';
import HeroBannerSec from './HeroBannerSec';
const HomeMain = () => {
  return (
    <>
      <HeroBannerSec />
      <CategoryBanner />
      {/* <CategoryArea />
      <FeaturesArea /> */}

      <SidebarMain />
    </>
  );
};

export default HomeMain;
