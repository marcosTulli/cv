import React from 'react';
import copy from "copy-to-clipboard";

const useContact = () => {
    const tooltipDefault = 'Click to copy';
    const [tooltipTitle, setTooltipTitle] = React.useState<string>(tooltipDefault);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCopy = (event: any) => {
        const value = event.target.innerText;
        copy(value);
        setTooltipTitle(`${value} copied to clipboard!`);
    };

    const resetTooltip = () => {
        setTooltipTitle(tooltipDefault);
    };
    return {
        resetTooltip, handleCopy, tooltipTitle

    };
};

export default useContact;