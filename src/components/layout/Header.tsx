import Link from 'next/link';
import React from 'react';

import { Nav } from './Nav';

export const Header: React.FC = () => {
  return (
    <header className="app-header" role="banner">
      <div className="app-header__nav-bar">
        <Nav />
      </div>
    </header>
  );
};
