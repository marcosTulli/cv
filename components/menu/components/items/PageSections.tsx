import React from 'react';
import { usePageSections } from '../../hooks';
import { Button, Tooltip } from '@mui/material';
import { PageSection } from '.';
import { NavigationItem } from './NavigationItem';

const PageSections: React.FC = () => {
  const { pageSections } = usePageSections();

  return (
    <>
      {pageSections.map((section) => {
        const handleClick = () => {
          section.onClick();
        };

        return (
          <Tooltip key={section.title} title={section.title}>
            <Button
              type="button"
              sx={{ color: 'secondary.main', textTransform: 'none' }}
              onClick={handleClick}
            >
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
