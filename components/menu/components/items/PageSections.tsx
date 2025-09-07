import React from 'react';
import { usePageSections } from '../../hooks';
import { Box, Button, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { PageSection } from '.';
import useSideBar from '../../hooks/useSidebar';
import { NavigationItem } from './NavigationItem';
import { Sections } from '@/models/enums';

const PageSections: React.FC = () => {
  const { isSideBarOpen, toggleSideBar } = useSideBar();
  const { pageSections } = usePageSections();

  return (
    <>
      {pageSections.map((section) => {
        const handleClick = () => {
          isSideBarOpen && toggleSideBar();
          section.onClick();
        };

        return (
          <Tooltip key={section.title} title={section.title}>
            <Button type='button' sx={{ color: 'secondary.main', textTransform:'none' }} onClick={handleClick}>
              <NavigationItem label={section.label as string}>
                  <PageSection section={section.name} />
              </NavigationItem>
            </Button>
          </Tooltip>
        );
      })}
    </>
  );
};

export default PageSections;
