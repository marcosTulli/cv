'use client';
import React from 'react';
import Image from 'next/image';
import { ILanguage } from '@/app/models/interfaces';
import { icons } from '@/app/utils';
import { useIconKey, useIcons } from '@/app/hooks/queries';
import styles from './Languages.module.scss';
import { Box, Tooltip } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ILanguageProps {
    language: ILanguage;

}
const Language: React.FC<ILanguageProps> = ({ language }) => {
    const [fileKey, setFileKey] = React.useState("");
    const { data: key } = useIconKey({ name: language.flag });
    const { data: icon } = useIcons({ fileKey: fileKey });
    const iconLoaded = icon !== undefined;

    React.useEffect(() => {
        if (key) {
            setFileKey(key);
        }
    }, [key]);

    return (
        <Tooltip title={`${language.language}: ${language.level}`}>
            {
                iconLoaded
                    ? <Box
                        sx={{ color: 'secondary.main' }}
                        className={styles.language}
                    >
                        <Image
                            src={icon ? icon : ''}
                            alt={language.language}
                            width={icons.width}
                            height={icons.height}
                            className={styles.icon}
                        />
                        <Box component='p'>{language.level}</Box>
                    </Box>

                    : <Box
                        sx={{ color: 'secondary.main' }}
                        className={styles.language}
                    >
                        <Skeleton height={25} width={30} />
                        <Skeleton height={20} width={57.61} />
                    </Box>
            }
        </Tooltip>

    );
};

export default Language;