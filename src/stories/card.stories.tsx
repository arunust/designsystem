import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card, { CardProps } from '../componets/molecule/card';

export default {
  title: 'UI/Molecules/Card',
  component: Card,
  argTypes: {
    imageSrc: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    buttonText: { control: 'text' },
  },
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://soloway.tech/wp-content/uploads/2023/08/Digital-transformation.png',
  title: 'Sample Card',
  description: 'This is a sample card with image, title, description and a button.',
  buttonText: 'Learn More',
  onButtonClick: () => alert('Button clicked!'),
};
