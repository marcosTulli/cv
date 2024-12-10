import { Button, Tooltip } from '@mui/material';
import React from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useDownload } from '../../hooks';
import { useIsLoadingSections } from '@/app/hooks';
import { languageStore } from '@/app/store';
import useSideBar from '../../hooks/useSidebar';


const Download: React.FC = () => {
    const { isLoadingSections } = useIsLoadingSections();
    const { strings } = languageStore();
    const { isSideBarOpen, toggleSideBar } = useSideBar();
    const { handleDownload } = useDownload();

    const handleClick = () => {
        handleDownload();
        isSideBarOpen && toggleSideBar();
    };

    return (
        <Tooltip title={strings.downloadAction} >
            <span> {/* This is to prevent browser error*/}
                <Button
                    sx={{ color: 'secondary.main' }}
                    disabled={isLoadingSections}
                    onClick={handleClick}
                >
                    <PictureAsPdfIcon />
                </Button>

            </span>
        </Tooltip>
    );
};

export default Download;