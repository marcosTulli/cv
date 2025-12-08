import React from 'react';

const useContact = () => {
  const tooltipDefault = 'Click to copy';
  const [tooltipTitle, setTooltipTitle] = React.useState<string>(tooltipDefault);

  const handleCopy = async (event: React.MouseEvent<HTMLElement>) => {
    const value = (event.currentTarget.textContent || '').trim();
    try {
      await navigator.clipboard.writeText(value);
      setTooltipTitle(`${value} copied to clipboard!`);
    } catch (err) {
      setTooltipTitle('Failed to copy!');
    }
  };

  const resetTooltip = () => {
    setTooltipTitle(tooltipDefault);
  };

  return {
    resetTooltip,
    handleCopy,
    tooltipTitle,
  };
};

export default useContact;
