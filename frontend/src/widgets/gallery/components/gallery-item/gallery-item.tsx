import * as S from './gallery-item.styled';

import { IGalleryItemsProps } from '../../types';

import { optimizedHeight } from '../../../constants';

export const GalleryItem = ({ item }: IGalleryItemsProps) => {
  const height = optimizedHeight({ height: item.height, width: item.width });

  return (
    <S.ItemWrapper height={item.height}>
      <S.SIKImage
        path={item.media}
        alt={item.media}
        width={372}
        height={height}
      />
      <S.SLink to={`/pin/${item.id}`} />
      <S.SaveButton>Save</S.SaveButton>
      <S.OverlayIcons>
        <S.Button>
          <S.Img src="/general/share.svg" alt="share.svg" />
        </S.Button>

        <S.Button>
          <S.Img src="/general/more.svg" alt="share.svg" />
        </S.Button>
      </S.OverlayIcons>
    </S.ItemWrapper>
  );
};
