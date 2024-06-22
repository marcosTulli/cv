import React from 'react';
import styles from './LanguageSelector.module.scss';
import { Language } from '@/app/types';
import { useLanguage } from '@/app/hooks';

const LanguageSelector = () => {
    const { setLang } = useLanguage();

    const availableLanguages = [
        { id: 0, language: Language.EN },
        { id: 1, language: Language.ES }
    ];

    const handleClick = (language: Language) => {
        setLang(language);
        console.log(language);
    };

    return (
        <div className={styles.container}>
            {availableLanguages.map(i => {
                return (
                    <div
                        className={styles.button}
                        key={i.id}
                        onClick={() => handleClick(i.language)}
                    >
                        {i.language}
                    </div>
                );
            })}
        </div>
    );
};

export default LanguageSelector;