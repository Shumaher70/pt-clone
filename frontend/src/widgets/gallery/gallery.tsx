import * as S from './gallery.styled';

import { TItems } from './types';

import { GalleryItem, GallerySkeleton, useGetPins } from '../constants';

export const Gallery = () => {
  const { data, isPending } = useGetPins();

  const renderItems = data?.map((item: TItems) => (
    <GalleryItem key={item._id} item={item} />
  ));

  return (
    <S.Wrapper>
      {data && renderItems}
      {isPending && <GallerySkeleton />}
    </S.Wrapper>
  );
};
