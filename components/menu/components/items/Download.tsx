import { Button, Tooltip } from '@mui/material';
import React from 'react';
import { useDownload, useIsLoadingSections } from '@/hooks';
import { languageStore } from '@/store';
import { NavigationItem } from './NavigationItem';
import DownloadIcon from '@mui/icons-material/Download';

const Download: React.FC = () => {
  const { isLoadingSections } = useIsLoadingSections();
  const { strings } = languageStore();
  const { handleDownload } = useDownload();

  const handleClick = () => {
    handleDownload();
  };

  return (
    <Tooltip title={strings.downloadAction}>
      <span>
        {' '}
        {/* This is to prevent browser error*/}
        <Button
          sx={{ color: 'secondary.main', textTransform:'none' }}
          disabled={isLoadingSections}
          onClick={handleClick}
        >
          <NavigationItem label={strings.downloadPdf as string}>

          <DownloadIcon />
          </NavigationItem>
        </Button>
      </span>
    </Tooltip>
  );
};

export default Download;
