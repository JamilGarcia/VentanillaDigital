import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
