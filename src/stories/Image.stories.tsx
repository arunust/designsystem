import React from 'react';
import { Meta, StoryFn } from '@storybook/react';  // Importing the correct StoryFn and Meta types
import Image from '../componets/atom/Image/Image';  // Import the Image component
import { ImageProps } from '../componets/atom/Image/type';  // Import the ImageProps type   

export default {
  title: 'UI/Atoms/Image',  // Storybook category and name
  component: Image,
  argTypes: {
    src: { control: 'text' },  // Allow custom input for 'src' in Storybook
    alt: { control: 'text' },  // Allow custom input for 'alt' in Storybook
    isAvatar: { control: 'boolean' },
    isThumbnail: { control: 'boolean' },
    isBanner: { control: 'boolean' },
    className: { control: 'text' },
  },
} as Meta;

// Template to render the Image component
const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

// Default story with a sample image
export const Default = Template.bind({});
Default.args = {
  src: 'https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg',
  alt: 'Avatar Example',
  isAvatar: true,
};

// Story for Thumbnail variant
export const Thumbnail = Template.bind({});
Thumbnail.args = {
  src: 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg',
  alt: 'Product Thumbnail',
  isThumbnail: true,
};

// Story for Banner variant
export const Banner = Template.bind({});
Banner.args = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3KOna-FYXZAZaA8yFcuXg8bZbKGfxp94jA&s',
  alt: 'Banner Example',
  isBanner: true,
};
