export interface MenuItem {
    label: string;
    href: string;
  }
  
  interface MenuPropsTypes {
    menuItems: MenuItem[];
    className?: string;
  }
  
  export default MenuPropsTypes;
  