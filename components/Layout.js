import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className=''>
      <Navbar />
      <main className='flex flex-col justify-center px-8'>
        {children}
        <Footer />
      </main>
    </div>
  );
}
