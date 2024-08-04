'use client';
import React from 'react';
import Image from 'next/image';
import { ILanguage } from '@/app/models/interfaces';
import { useLanguage } from '@/app/hooks';
import { icons } from '@/app/utils';
import { useIconKey, useIcons } from '@/app/hooks/queries';

interface ILanguageProps {
    language: ILanguage;

}
const Language: React.FC<ILanguageProps> = ({ language }) => {
    const { strings } = useLanguage();
    const [fileKey, setFileKey] = React.useState("");
    const { data: key } = useIconKey({ name: language.flag });
    const { data: icon } = useIcons({ fileKey: fileKey });

    React.useEffect(() => {
        if (key) {
            setFileKey(key);
        }
    }, [key]);

    return (
        <a
            title="View certification"
            href={strings.englishCertificate}
            target='_blank'
            key={language.language}
        >
            <Image
                src={icon ? icon : ''}
                alt="english"
                width={icons.width}
                height={icons.height}

            />
            <p>{language.level}</p>
        </a>

    );
};

export default Language;