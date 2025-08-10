import React from 'react';
import { generateRandomString } from '@/utils';

function usePasswordGenerator() {
  const [password, setPassword] = React.useState<string>('');
  const [lengthInput, setLengthInput] = React.useState<number>(0);
  const tooltipDefault = 'Click to copy';
  const [tooltipTitle, setTooltipTitle] =
    React.useState<string>(tooltipDefault);
  const [displayCopyButton, setDisplayCopyButton] =
    React.useState<boolean>(false);
  const disableGenerate = lengthInput === 0;

  const generatePassword = (event: React.FormEvent) => {
    event.preventDefault();
    const randomPassword = generateRandomString({ length: lengthInput });
    setPassword(randomPassword);
    setDisplayCopyButton(true);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = parseInt(event.target.value, 10);
    setLengthInput(value);
  };

  const resetTooltip = () => {
    setTooltipTitle(tooltipDefault);
  };

  return {
    password,
    lengthInput,
    tooltipTitle,
    setTooltipTitle,
    displayCopyButton,
    disableGenerate,
    generatePassword,
    handleInputChange,
    resetTooltip
  };
}

export default usePasswordGenerator;
