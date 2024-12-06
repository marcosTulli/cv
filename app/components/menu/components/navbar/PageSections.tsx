import React from 'react';
import { usePageSections } from '../../hooks';
import { Button, Tooltip } from '@mui/material';
import { PageSection } from '../items';

const PageSections = () => {
    const { pageSections } = usePageSections();
    return (
        <>
            {
                pageSections.map(section => (
                    <Tooltip key={section.title} title={section.title} >
                        <Button
                            sx={{ color: 'secondary.main' }}
                            onClick={section.onClick}
                        >
                            <PageSection section={section.name} />
                        </Button>
                    </Tooltip>
                ))
            }

        </>
    );
};

export default PageSections;