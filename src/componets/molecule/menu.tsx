import React from 'react';
import MenuPropsTypes from './type';
import Button from '../atom/button/button';

const Menu: React.FC<MenuPropsTypes> = ({ menuItems, className }) => {
  return (
    <nav className={`flex items-center gap-4 ${className}`}>
      {menuItems.map((item:any) => (
        <Button
          key={item.label}
          type="button"
          variant="secondary"
          variantType="solid"
          className="text-sm hover:text-secondary transition-colors"
          onClick={() => window.location.href = item.href}
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
};

export default Menu;
