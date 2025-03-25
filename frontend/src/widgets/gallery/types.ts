import { IPin } from '../../components/types';

export type TItems = Pick<IPin, '_id' | 'media' | 'width' | 'height'>;

export interface IItemWrapper {
  height: number;
}

export interface IGalleryItemsProps {
  item: TItems;
}

export interface IOptimizedHeight {
  height: number;
  width: number;
}

export interface IPages {
  nextCursor: number;
  pins: IPin[];
}
