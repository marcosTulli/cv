import React from 'react';

type CopyAlertProps = {
    display: boolean;
    string?: string;
};


export const CopyAlert: React.FC<CopyAlertProps> = ({ display }) => {
    return (
        <span
            hidden={display}
            className='copyAlert'
        >
            &#9989;
        </span>
    );
};
