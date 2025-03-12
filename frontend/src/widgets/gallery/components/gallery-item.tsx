import { IGalleryItemsProps } from '../types';

import * as S from './gallery-item.styled';

export const GalleryItems = ({ item }: IGalleryItemsProps) => {
  return (
    <S.ItemWrapper height={item.height}>
      <S.ItemImage src={item.media} alt={item.media} />
      <S.SLink to={`/pin/${item.id}`} />
      <S.SaveButton>Save</S.SaveButton>
      <S.OverlayIcons>
        <S.Button>
          <S.Img src="/general/share.svg" alt="" />
        </S.Button>

        <S.Button>
          <S.Img src="/general/more.svg" alt="" />
        </S.Button>
      </S.OverlayIcons>
    </S.ItemWrapper>
  );
};
