'use client';
import React from 'react';
import Image from 'next/image';
import { ILanguage } from '@/models/interfaces';
import { icons } from '@/utils';
import styles from './index.module.scss';
import { Box, Tooltip } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useLanguage } from '../../hooks';

export interface ILanguageProps {
  language: ILanguage;
}
const Language: React.FC<ILanguageProps> = ({ language }) => {
  const { iconLoaded, icon } = useLanguage({ language });

  return (
    <Tooltip title={`${language.language}: ${language.level}`}>
      {iconLoaded ? (
        <Box sx={{ color: 'secondary.main' }} className={styles.language}>
          <Image
            src={icon ? icon : ''}
            alt={language.language}
            width={icons.width}
            height={icons.height}
            className={styles.icon}
          />
          <Box component="p">{language.level}</Box>
        </Box>
      ) : (
        <Box className={styles.language}>
          <Skeleton height={22} width={26} />
          <Skeleton height={14} width={57.61} />
        </Box>
      )}
    </Tooltip>
  );
};

export default Language;
