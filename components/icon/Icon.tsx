import React from 'react';
import Image from 'next/image';
import { icons } from '@/utils';

interface IconProps {
  name: string;
  alt?: string;
}

const Icon: React.FC<IconProps> = ({ name, alt }) => {
  const iconPath = `/icons/${name}.svg`;
  const { width, height } = icons;

  return <Image src={iconPath} alt={alt || `${name} icon`} width={width} height={height} />;
};

export default Icon;
