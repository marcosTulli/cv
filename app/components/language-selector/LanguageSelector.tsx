import React from 'react';
import { Language } from '@/app/types';
import { useLanguage } from '@/app/hooks';
import { userStore } from '@/app/store';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const LanguageSelector = () => {
    const { setLang, currentLanguage } = useLanguage();
    const { user } = userStore();

    const handleClick = (language: Language) => {
        setLang(language);
    };

    return (
        <Box >
            <FormControl >
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentLanguage}
                    label="language"
                    onChange={(e) => handleClick(e.target.value as Language)}
                >
                    {user?.availableLanguages.map((lang, index) => {
                        return (
                            <MenuItem value={lang}>{lang}</MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </Box>
    );
};

export default LanguageSelector;