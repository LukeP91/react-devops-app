import React from 'react';
import Link from 'next/link';

export const Nav: React.FC = () => {
  return (
    <nav className="app-nav" role="navigation">
      <Link href="/">
        <a role="link">Home</a>
      </Link>

      <Link href="/about">
        <a role="link">
          About
        </a>
      </Link>

      <Link href="/contact">
        <a role="link">
          Contact
        </a>
      </Link>
    </nav>
  );
};
