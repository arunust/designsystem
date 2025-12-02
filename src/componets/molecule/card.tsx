import React from 'react';
import Image from '../atom/Image/Image';
import Typography from '../atom/typography/typography';
import Button from '../atom/button/button';

export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="border-primary dark:bg-background border border-gray-200 dark:border-gray-700 rounded-sm shadow-md p-4 w-full max-w-sm flex flex-col items-center gap-4">
      <Image src={imageSrc} alt={title} isBanner={true} />
      <Typography tag="h3" className="text-xl font-semibold text-center dark:text-gray-300" text={title} />
      <Typography tag="p" className="text-sm text-gray-600 text-center dark:text-gray-300" text={description} />
      <Button type="button" variant="primary" variantType="solid" onClick={onButtonClick}>
        {buttonText}
      </Button>
    </div>
  );
};

export default Card;
