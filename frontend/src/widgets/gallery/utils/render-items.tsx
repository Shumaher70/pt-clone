import { IPin } from '../../../components/types';
import { GalleryItem } from '../../constants';
import { TItems } from '../types';

export const renderItems = (pins: IPin[]) => {
  return pins.map((item: TItems) => <GalleryItem key={item._id} item={item} />);
};
