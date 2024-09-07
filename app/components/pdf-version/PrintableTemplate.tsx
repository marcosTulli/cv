'use client';
import { forwardRef } from 'react';
import SinglePageTemplate from './SinglePageTemplate';
import { Box } from '@mui/material';

const PrintableTemplate = forwardRef<HTMLDivElement>(({ }, ref) => {
    return (
        <div hidden>
            <Box

                sx={{
                    height: '100vh',
                    minWidth: '100%',
                    overflow: 'hidden',
                }}
                ref={ref}
                className="PrintableTemplate"
            >
                <SinglePageTemplate />
            </Box>
        </div>
    );
});
PrintableTemplate.displayName = 'PrintableTemplate';

export { PrintableTemplate };