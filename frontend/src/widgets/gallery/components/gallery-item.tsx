import { IGalleryItemsProps } from '../types';
import * as S from './gallery-item.styled';

export const GalleryItems = ({ item }: IGalleryItemsProps) => {
  return (
    <S.ItemWrapper height={item.height}>
      <S.ItemImage src={item.media} alt={item.media} />
    </S.ItemWrapper>
  );
};
