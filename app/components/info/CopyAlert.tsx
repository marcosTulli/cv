import React from 'react';

type CopyAlertProps = {
    display: boolean;
    string: string;
};


export const CopyAlert: React.FC<CopyAlertProps> = ({ display, string }) => {
    return (
        <span
            hidden={display}
            className='copyAlert'
        >
            &#9989;
        </span>
    );
};
