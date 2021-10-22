import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        &copy; {new Date().getFullYear()}.
      </div>
    </footer>
  );
};
