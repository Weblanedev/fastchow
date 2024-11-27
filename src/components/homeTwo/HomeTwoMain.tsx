import React from 'react';
import CategoryAreaTwo from './CategoryAreaTwo';
// import BundleComboArea from './BundleComboArea';
import FeaturedAreaHomeTwo from './FeaturedAreaHomeTwo';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';
import HomeTwoBannerArea from './HomeTwoBannerArea';

const HomeTwoMain = () => {
  return (
    <>
      <HomeTwoBannerArea />
      <CategoryAreaTwo />
      {/* <BundleComboArea /> */}
      <FeaturedAreaHomeTwo />
      <SidebarMain />
    </>
  );
};

export default HomeTwoMain;
