import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const navigations = [
    { label: 'Home', path: '#home' },
    { label: 'About', path: '#about' },
    { label: 'Projects', path: '#projects' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <button
          aria-label='Toggle Dark Mode'
          className='w-9 h-9 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:ring-2 ring-gray-400 transition-all'
          onClick={() => setTheme('light')}
        >
          <SunIcon className='w-5 h-5 text-white' />
        </button>
      );
    } else {
      return (
        <button
          aria-label='Toggle Light Mode'
          className='w-9 h-9 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center hover:ring-2 ring-gray-300 transition-all'
          onClick={() => setTheme('dark')}
        >
          <MoonIcon className='w-5 h-5 text-black' />
        </button>
      );
    }
  };

  return (
    <div className='flex flex-col justify-center px-8'>
      <nav className='flex items-center justify-between pb-8 pt-8 sm:pb-16 text-gray-800 dark:text-gray-100 max-w-2xl mx-auto w-full'>
        <div className='ml-[-0.6rem]'>
          <MobileMenu />
          {navigations.map((nav) => (
            <a
              className='md:text-lg font-normal hidden sm:inline-block p-1 sm:px-3 sm:py-2 rounded-lg  hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
              href={nav.path}
              key={nav.label}
            >
              {nav.label}
            </a>
          ))}
        </div>
        {renderThemeChanger()}
      </nav>
    </div>
  );
}
