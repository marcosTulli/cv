import React from 'react';
import { usePageSections } from '../../hooks';
import { Button, Tooltip } from '@mui/material';
import { PageSection } from '.';
import useSideBar from '../../hooks/useSidebar';

const PageSections: React.FC = () => {
    const { isSideBarOpen, toggleSideBar } = useSideBar();
    const { pageSections } = usePageSections();

    return (
        <>
            {
                pageSections.map(section => {
                    const handleClick = () => {
                        isSideBarOpen && toggleSideBar();
                        section.onClick();
                    };

                    return (
                        <Tooltip key={section.title} title={section.title} >
                            <Button
                                sx={{ color: 'secondary.main' }}
                                onClick={handleClick}
                            >
                                <PageSection section={section.name} />
                            </Button>
                        </Tooltip>
                    );
                })
            }

        </>
    );
};

export default PageSections;