'use client';
import { forwardRef } from 'react';
import SinglePageTemplate from './SinglePageTemplate';

const PrintableTemplate = forwardRef<HTMLDivElement>(({ }, ref) => {
    return (
        <div hidden>
            <div
                ref={ref}
                className="PrintableTemplate"
            >
                <SinglePageTemplate />
            </div>
        </div>
    );
});
PrintableTemplate.displayName = 'PrintableTemplate';

export { PrintableTemplate };