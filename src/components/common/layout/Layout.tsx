import React from 'react';
import Header from '../nav/Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <Header />
      </header>
      <main className="layout__main">
        {children}
      </main>
      <footer className="layout__footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;