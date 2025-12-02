import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '../componets/atom/typography/typography';

const meta: Meta<typeof Typography> = {
  title: 'UI/Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
    },
    text: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
    style: {
      control: { type: 'object' },
    },
    children: {
      control: false, // children is a ReactNode, avoid controlling it from the panel
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    tag: 'h1',
    text: 'This is a Heading 1',
    className: 'text-4xl font-bold text-primary',
  },
};

export const Paragraph: Story = {
  args: {
    tag: 'p',
    text: 'This is a paragraph with Tailwind styling.',
    className: 'text-base text-gray-600',
  },
};

export const WithChildren: Story = {
  args: {
    tag: 'span',
    text: 'Label: ',
    children: <strong>Active</strong>,
    className: 'text-sm text-blue-700',
  },
};

export const CustomStyle: Story = {
  args: {
    tag: 'div',
    text: 'Styled using inline styles',
    style: { color: 'purple', fontWeight: 'bold' },
  },
};
