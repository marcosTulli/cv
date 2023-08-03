import React from 'react';

type CopyAlertProps = {
    display: boolean;
    string: string;
};


export const CopyAlert: React.FC<CopyAlertProps> = ({ display, string }) => {
    return (
        <p
            hidden={display}
            className='copyAlert'
        >
            &#9989;
        </p>
    );
};
