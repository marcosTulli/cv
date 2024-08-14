'use client';
import React from 'react';
import Image from 'next/image';
import { ILanguage } from '@/app/models/interfaces';
import { icons } from '@/app/utils';
import { useIconKey, useIcons } from '@/app/hooks/queries';
import styles from './Languages.module.scss';

interface ILanguageProps {
    language: ILanguage;

}
const Language: React.FC<ILanguageProps> = ({ language }) => {
    const [fileKey, setFileKey] = React.useState("");
    const { data: key } = useIconKey({ name: language.flag });
    const { data: icon } = useIcons({ fileKey: fileKey });

    React.useEffect(() => {
        if (key) {
            setFileKey(key);
        }
    }, [key]);

    return (
        <div className={styles.language}>
            <Image
                src={icon ? icon : ''}
                alt="english"
                width={icons.width}
                height={icons.height}
                className={styles.icon}

            />
            <p>{language.level}</p>
        </div>

    );
};

export default Language;