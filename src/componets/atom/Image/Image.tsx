import React from 'react';
import classNames from 'classnames';
import { ImageProps } from './type'; 

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  isAvatar = false,
  isThumbnail = false,
  isBanner = false,
}) => {
  const imageClasses = classNames(
    className,
    {
      'w-16 h-16 rounded-full object-cover': isAvatar,       // Avatar: Circle shape
      'w-32 h-32 object-cover rounded-md': isThumbnail,      // Thumbnail: Square
      'w-full h-56 object-cover rounded-sm': isBanner,       // Banner: Full width
    }
  );

  return <img src={src} alt={alt} className={imageClasses} />;
};

export default Image;
