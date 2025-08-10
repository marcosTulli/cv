import React from 'react';
import { icons } from '@/utils';

interface IconProps {
  name: string;
  alt?: string;
}

const Icon: React.FC<IconProps> = ({ name, alt }) => {
  const iconPath = `/icons/${name}.svg`;
  const { width, height } = icons;

  return (
    <img
      src={iconPath}
      alt={alt || `${name} icon`}
      width={width}
      height={height}
    />
  );
};

export default Icon;
