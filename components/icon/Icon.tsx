import React from 'react';
import Image from 'next/image';
import CodeIcon from '@mui/icons-material/Code';
import { icons } from '@/utils';

interface IconProps {
  name: string;
  alt?: string;
}

const Icon: React.FC<IconProps> = ({ name, alt }) => {
  const { width, height } = icons;

  if (!name || name === '-') {
    return <CodeIcon sx={{ width, height, color: 'secondary.main', opacity: 0.6 }} />;
  }

  const iconPath = `/icons/${name}.svg`;
  return <Image src={iconPath} alt={alt || `${name} icon`} width={width} height={height} />;
};

export default Icon;
