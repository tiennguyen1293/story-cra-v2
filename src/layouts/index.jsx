import React from 'react';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';

import Nav from 'components/Nav';

import Loading from './assets/loading.gif';

const LayoutWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 4rem;
  padding-top: calc(4rem + env(safe-area-inset-top));
  padding-right: calc(4rem + env(safe-area-inset-top));
  padding-bottom: calc(4rem + env(safe-area-inset-top));
  padding-left: calc(4rem + env(safe-area-inset-top));
`;

const MainContent = styled.div`
  height: calc(100% - 2rem);
  margin: 1rem;
  transition: height 0.2s ease, margin 0.2s ease;
`;

const LoadingWrapper = styled.img`
  width: 100px;
  height: 100px;
`;

const Layout = ({ children, intl, loading }) => {
  const childrenWithProps = React.Children.map(children, child => {
    return React.cloneElement(child, { intl });
  });

  return (
    <LayoutWrapper>
      <MainContent>
        {/* <Nav intl={intl} /> */}
        {loading ? <LoadingWrapper src={Loading} alt="Loading" /> : childrenWithProps}
      </MainContent>
    </LayoutWrapper>
  );
};

export default injectIntl(Layout);
