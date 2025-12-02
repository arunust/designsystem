import type { Meta, StoryFn } from '@storybook/react';
import Menu from '../componets/molecule/menu';
import { MenuItem } from '../componets/molecule/type';

const meta: Meta<typeof Menu> = {
  title: 'UI/Molecules/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' }
  },
};

export default meta;

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ] as MenuItem[],
};
