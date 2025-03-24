import * as S from './gallery-skeleton.styled';

const skeletons = Array.from({ length: 21 }, (_, i) => {
  return {
    id: i + 1,
    height: i % 2 === 0 ? 600 : 1200,
  };
});

export const GallerySkeleton = () => {
  const skeletonItems = skeletons.map((item) => (
    <S.Item key={item.id} height={item.height} />
  ));

  return <>{skeletonItems}</>;
};
