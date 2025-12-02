import React, { useState, useEffect } from 'react';
import Image from '../atom/Image/Image';
import Typography from '../atom/typography/typography';
import Button from '../atom/button/button';
import { FaMoon, FaSun } from 'react-icons/fa'; // Importing icons from react-icons
import classNames from 'classnames';

interface MenuItem {
  label: string;
  href: string;
}

export interface HeaderNavbarProps {
  logoSrc: string;
  title: string;
  menuItems: MenuItem[];
  bgColor?: 'primary' | 'secondary'; // Allow background color to be set via prop
}

const HeaderNavbar: React.FC<HeaderNavbarProps> = ({ logoSrc, title, menuItems, bgColor = 'primary' }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // if (isDarkMode) {
    //   document.documentElement.classList.add('dark');
    // } else {
    //   document.documentElement.classList.remove('dark');
    // }
  }, [isDarkMode]);

  const toggleTheme = () => {
    // setIsDarkMode(prev => !prev);
  };

  const logOut = () => {
    localStorage.removeItem('userSession');
    window.location.reload();
  };

  return (
    <header
      className={classNames(
        'flex items-center justify-between px-6 py-4 text-foreground shadow-md dark:bg-background dark:text-foreground',
        {
          'bg-primary': bgColor === 'primary',  // Conditional background color
          'bg-secondary': bgColor === 'secondary', // Conditional background color
        }
      )}
    >
      {/* Left Section: Logo + Title */}
      <div className="flex items-center gap-4">
        <Image src={logoSrc} alt="Brand Logo" isAvatar />
        <Typography tag="h1" className="text-lg font-bold" text={title} />
      </div>

      {/* Center Section: Menu */}
      <nav className="flex-1 flex justify-center gap-8">  {/* Centering the menu */}
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-base font-medium hover:text-primary transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Right Section: Theme Switch with Icon */}
      {/* <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="secondary"
          variantType="outline"
          onClick={toggleTheme}
          className="px-3 py-1 flex items-center gap-2"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />} 
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </div> */}
      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="secondary"
          variantType="outline"
          onClick={logOut}
          className="px-3 py-1 flex items-center gap-2"
        >
          Logout
        </Button>
      </div>
    </header>
  );
};

export default HeaderNavbar;
