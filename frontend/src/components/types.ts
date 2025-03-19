/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IImageProps {
  path: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  [key: string]: any;
}

export interface IUser {
  _id: string;
  displayName: string;
  username: string;
  email: string;
  hashedPassword: string;
  img: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPin {
  _id: string;
  media: string;
  width: number;
  height: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
  board: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IComment {
  _id: string;
  description: string;
  pin: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IBoard {
  _id: string;
  title: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
