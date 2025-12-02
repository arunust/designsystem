import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderNavbar, { HeaderNavbarProps } from '../componets/Organism/HeaderNavbar';

// Sample Menu items
const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default {
  title: 'UI/Organisms/HeaderNavbar',
  component: HeaderNavbar,
  argTypes: {
    logoSrc: { control: 'text' },
    title: { control: 'text' },
    menuItems: { control: 'object' },
  },
} as Meta<typeof HeaderNavbar>; // Correctly typing the Meta

// Template for the Story
const Template: StoryFn<HeaderNavbarProps> = (args) => <HeaderNavbar {...args} />; // Use StoryFn for typing

// Default Story
export const Default = Template.bind({});
Default.args = {
  logoSrc: 'https://etimg.etb2bimg.com/photo/80342670.cms',
  title: 'UST',
  menuItems: menuItems,
};

// Dark Mode Story
export const DarkMode = Template.bind({});
DarkMode.args = {
  logoSrc: 'https://etimg.etb2bimg.com/photo/80342670.cms',
  title: 'UST',
  menuItems: menuItems,
};

// Light Mode Story
export const LightMode = Template.bind({});
LightMode.args = {
  logoSrc: 'https://etimg.etb2bimg.com/photo/80342670.cms',
  title: 'UST',
  menuItems: menuItems,
};
