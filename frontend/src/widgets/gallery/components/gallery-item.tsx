import { IGalleryItems } from '../types';
import { GalleryItemImage, GalleryItemWrapper } from './gallery-item.styled';

export const GalleryItems = ({ item }: IGalleryItems) => {
  return (
    <GalleryItemWrapper height={item.height}>
      <GalleryItemImage src={item.media} alt={item.media} />
    </GalleryItemWrapper>
  );
};
