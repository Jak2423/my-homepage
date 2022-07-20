import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigations = [
    { label: 'Home', path: '#home' },
    { label: 'About', path: '#about' },
    { label: 'Projects', path: '#projects' },
  ];

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  return (
    <>
      <button
        aria-label='Toggle Menu'
        className='visible sm:hidden relative'
        onClick={toggleMenu}
      >
        {!isMenuOpen ? (
          <MenuIcon className='w-5 h-5' />
        ) : (
          <XIcon className='w-5 h-5' />
        )}
      </button>
      {isMenuOpen && (
        <ul className='flex flex-col absolute w-full h-screen opacity-1 bg-[#f9fafb] dark:bg-[#111111] left-0 m-0 mt-6 px-8'>
          {navigations.map((nav) => (
            <li
              className='border-b border-gray-300 dark:border-gray-700 text-sm font-semibold mt-6'
              key={nav.label}
              onClick={toggleMenu}
            >
              <a className='flex w-auto pb-4' href={nav.path}>
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
