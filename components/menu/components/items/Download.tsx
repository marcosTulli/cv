import { Button, Tooltip } from '@mui/material';
import React from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useDownload, useIsLoadingSections } from '@/hooks';
import { languageStore } from '@/store';
import useSideBar from '../../hooks/useSidebar';
import { NavigationItem } from './NavigationItem';

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

          <PictureAsPdfIcon />
          </NavigationItem>
        </Button>
      </span>
    </Tooltip>
  );
};

export default Download;
