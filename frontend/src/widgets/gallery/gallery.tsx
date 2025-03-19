import * as S from './gallery.styled';

import { TItems } from './types';

import { GalleryItem, useGetPins } from '../constants';

export const Gallery = () => {
  const { data } = useGetPins();

  const renderItems = data?.map((item: TItems) => (
    <GalleryItem key={item._id} item={item} />
  ));

  return <S.Wrapper>{renderItems}</S.Wrapper>;
};
