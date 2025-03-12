import { IOptimizedHeight } from '../../../types';

export const optimizedHeight = ({ height, width }: IOptimizedHeight) => {
  return (327 * height) / width;
};
