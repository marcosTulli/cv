import * as React from 'react';
import { Download, ThemePicker, LanguageSelector } from '../items';
import OpenAdminDialogButton from '../admin-dialog/button';
import { Box } from '@mui/material';


const Actions: React.FC = () => {
    return (
        <>
            <LanguageSelector />
            <ThemePicker />
            <Download />
            <Box
                sx={{ padding: '0px', margin: '0px', display: { lg: 'none', md:'none' } }}>
                <OpenAdminDialogButton />
            </Box>
        </>
    );
};

export default Actions;
