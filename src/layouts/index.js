import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default ({ children }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
