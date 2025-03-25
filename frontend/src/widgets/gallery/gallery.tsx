import InfiniteScroll from 'react-infinite-scroll-component';

import {
  getAllPins,
  useGetPins,
  renderItems,
  GallerySkeleton,
} from '../constants';
import { Spinner } from '../../components/constants';

import { IPages } from './types';

import * as S from './gallery.styled';

export const Gallery = () => {
  const { data, status, hasNextPage, fetchNextPage } = useGetPins();

  const allPins = getAllPins(data?.pages as IPages[]);

  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={
        <S.WrapperSpinner>
          <Spinner />
        </S.WrapperSpinner>
      }
    >
      <S.Wrapper>
        {data?.pages[0] && renderItems(allPins)}
        {status === 'pending' && <GallerySkeleton />}
      </S.Wrapper>
    </InfiniteScroll>
  );
};
