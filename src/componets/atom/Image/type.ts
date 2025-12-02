export type ImageVariant = 'avatar' | 'thumbnail' | 'banner';

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  isAvatar?: boolean;
  isThumbnail?: boolean;
  isBanner?: boolean;
}
