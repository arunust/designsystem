import type { Meta, StoryObj } from '@storybook/react';
import Input from '../componets/atom/input/Input';
import { FiUser, FiLock } from 'react-icons/fi';

const meta: Meta<typeof Input> = {
  title: 'UI/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text', 'password', 'email', 'number', 'search', 'tel', 'url',
        'date', 'datetime-local', 'month', 'week', 'time', 'color',
        'file', 'range', 'checkbox', 'radio'
      ],
    },
    variant: {
      control: 'radio',
      options: ['rounded', 'square'],
    },
    placeholder: { control: 'text' },
    leftIcon: { control: false },
    rightIcon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter something...',
    type: 'text',
    variant: 'rounded',
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: 'Username',
    leftIcon: <FiUser />,
    variant: 'rounded',
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: 'Password',
    type: 'password',
    rightIcon: <FiLock />,
    variant: 'square',
  },
};

export const EmailInput: Story = {
  args: {
    type: 'email',
    placeholder: 'example@email.com',
    variant: 'rounded',
  },
};
