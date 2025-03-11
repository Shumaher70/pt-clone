export interface IItems {
  id: number;
  media: string;
  height: number;
  width: number;
}

export interface IGalleryItems {
  item: IItems;
}

export interface IGalleryItemWrapper {
  height: number;
}
