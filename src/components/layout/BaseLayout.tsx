import React, { Fragment } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';

export const BaseLayout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main role="main" id="main-content" className="app-wrapper">
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};
