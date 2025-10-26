'use client';
import React from 'react';
import Image from 'next/image';
import { ILanguage } from '@/models/interfaces';
import { icons } from '@/utils';
import styles from './index.module.scss';
import { Box, Tooltip } from '@mui/material';
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
            style={{ width: `${icons.width}px`, height: `${icons.height}px` }}
          />
          <Box component="p">{language.level}</Box>
        </Box>
      ) : (
        <Box sx={{ color: 'secondary.main' }} className={styles.language}>
          <Image
            src={`/${language.flag}.png`}
            alt={language.language}
            width={icons.width}
            height={icons.height}
            className={styles.icon}
            style={{ width: `${icons.width}px`, height: `${icons.height}px` }}
          />
          <Box component="p">{language.level}</Box>
        </Box>
      )}
    </Tooltip>
  );
};

export default Language;
