import { Button, Tooltip } from '@mui/material';
import React from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useDownload } from '../../hooks';
import { useIsLoadingSections } from '@/app/hooks';
import { languageStore } from '@/app/store';

const Download: React.FC = () => {

    const { isLoadingSections } = useIsLoadingSections();
    const { handleDownload } = useDownload();
    const { strings } = languageStore();

    return (
        <Tooltip title={strings.downloadAction} >
            <span>
                <Button
                    sx={{ color: 'secondary.main' }}
                    disabled={isLoadingSections}
                    onClick={handleDownload}
                >
                    <PictureAsPdfIcon />
                </Button>
            </span>
        </Tooltip>
    );
};

export default Download;