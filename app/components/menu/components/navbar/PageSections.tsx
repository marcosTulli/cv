import React from 'react';
import { usePageSections } from '../../hooks';
import { Button, Tooltip } from '@mui/material';
import { PageSection } from '../items';

interface IPageSectionProps {
    onClick?: () => void;
}
const PageSections: React.FC<IPageSectionProps> = ({ onClick }) => {
    const { pageSections } = usePageSections();
    return (
        <>
            {
                pageSections.map(section => {
                    const handleClick = () => {
                        onClick && onClick();
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