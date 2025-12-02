import type { Meta, StoryObj } from '@storybook/react';
import Button from '../componets/atom/button/button';
import  ButtonPropsTypes  from '../componets/atom/button/type';

const meta: Meta<typeof Button> = {
  title: 'UI/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'tertiary'],
    },
    variantType: {
      control: { type: 'radio' },
      options: ['solid', 'outline'],
    },
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimarySolid: Story = {
  args: {
    children: 'Primary Solid',
    type: 'button',
    variant: 'primary',
    variantType: 'solid',
  },
};

export const PrimaryOutline: Story = {
  args: {
    children: 'Primary Outline',
    type: 'button',
    variant: 'primary',
    variantType: 'outline',
  },
};

export const SecondarySolid: Story = {
  args: {
    children: 'Secondary Solid',
    type: 'button',
    variant: 'secondary',
    variantType: 'solid',
  },
};

export const SecondaryOutline: Story = {
  args: {
    children: 'Secondary Outline',
    type: 'button',
    variant: 'secondary',
    variantType: 'outline',
  },
};

export const Accent: Story = {
  args: {
    children: 'Accent',
    type: 'button',
    variant: 'accent',
    variantType: 'solid',
  },
};

export const AccentOutline: Story = {
  args: {
    children: 'Accent Outline',
    type: 'button',
    variant: 'accent',
    variantType: 'outline',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    type: 'button',
    variant: 'tertiary',
    variantType: 'solid',
  },
};

export const TertiaryOutline: Story = {
  args: {
    children: 'Tertiary Outline',
    type: 'button',
    variant: 'tertiary',
    variantType: 'outline',
  },
};
