export interface IItems {
  id: number;
  media: string;
  height: number;
  width: number;
}

export interface IItemWrapper {
  height: number;
}

export interface IGalleryItemsProps {
  item: IItems;
}
