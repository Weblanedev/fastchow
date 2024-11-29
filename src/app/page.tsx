//@refresh
import HomeTwoMain from '@/components/homeTwo/HomeTwoMain';
import MetaData from '@/hooks/useMetaData';
import WrapperStyleTwo from '@/layout/WrapperStyleTwo';
import React from 'react';

const Home = () => {
  return (
    <>
      <MetaData pageTitle="Home Two">
        <WrapperStyleTwo>
          <main>
            <HomeTwoMain />
          </main>
        </WrapperStyleTwo>
      </MetaData>
    </>
  );
};

export default Home;
