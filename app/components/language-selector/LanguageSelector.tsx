import React from 'react';
import { Language } from '@/app/models/enums';
import { languageStore } from '@/app/store';
import { userStore } from '@/app/store';
import style from './LanguageSelector.module.scss';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const LanguageSelector = () => {
    const { setLang, currentLanguage } = languageStore();
    const { user } = userStore();

    const handleClick = (language: Language) => {
        setLang(language);
    };

    return (
        <FormControl className={style.form}>
            <Select
                className={style.drop}
                id="lang-id"
                value={currentLanguage}
                onChange={(e) => handleClick(e.target.value as Language)}
            >
                {user?.availableLanguages.map((lang, index) => {
                    return (
                        <MenuItem key={index} value={lang}>{lang}</MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

export default LanguageSelector;