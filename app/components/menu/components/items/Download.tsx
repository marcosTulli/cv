import { Button, Tooltip } from '@mui/material';
import React from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useDownload } from '../../hooks';
import { useIsLoadingSections } from '@/app/hooks';
import { languageStore } from '@/app/store';

interface IDownloadButtonProps {
    onClick?: () => void;
}

const Download: React.FC<IDownloadButtonProps> = ({ onClick }) => {
    const { isLoadingSections } = useIsLoadingSections();
    const { handleDownload } = useDownload();
    const { strings } = languageStore();

    const handleClick = () => {
        onClick && onClick();
        handleDownload();
    };

    return (
        <Tooltip title={strings.downloadAction} >
            <span>
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