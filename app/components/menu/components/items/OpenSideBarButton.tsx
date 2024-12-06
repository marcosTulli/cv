'use client';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface IOpenSideBarButtonProps {
    onClick: () => void;
    display: boolean;
}

const OpenSideBarButton: React.FC<IOpenSideBarButtonProps> = ({ onClick, display }) => {

    return (
        display && <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onClick}
            sx={{ mr: 2, display: { sm: 'none' } }}
        >
            <MenuIcon />
        </IconButton>
    );
};


export default OpenSideBarButton;