'use client';
import { forwardRef } from 'react';
import SinglePageTemplate from './SinglePageTemplate';
import { Box } from '@mui/material';

// eslint-disable-next-line no-empty-pattern
const PrintableTemplate = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div hidden>
      <Box
        sx={{
          height: '100vh',
          minWidth: '100%',
          overflow: 'hidden',
          background: '#F2F2F2',
        }}
        ref={ref}
        className="PrintableTemplate"
      >
        <SinglePageTemplate />
      </Box>
    </div>
  );
});

export { PrintableTemplate };
