import { IKImage } from 'imagekitio-react';
import { IImageProps } from '../types';

export const Image = ({
  path,
  src,
  alt,
  width,
  height,
  className,
  ...props
}: IImageProps) => {
  const urlEndpoint = import.meta.env.VITE_URL_IK_ENDPOINT;

  return (
    <IKImage
      className={className}
      urlEndpoint={urlEndpoint}
      path={path}
      src={src}
      alt={alt}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      transformation={[{ height: String(height), width: String(width) }]}
      {...props}
    />
  );
};
