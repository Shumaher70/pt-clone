import { IPages } from '../types';

export const getAllPins = (data: IPages[]) => {
  return data?.flatMap((page) => page.pins) || [];
};
