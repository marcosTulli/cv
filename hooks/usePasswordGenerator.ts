import React from 'react';
import { generateRandomString } from '@/utils';

function usePasswordGenerator() {
  const [password, setPassword] = React.useState<string>('');
  const [lengthInput, setLengthInput] = React.useState<number>(16);
  const [displayCopyButton, setDisplayCopyButton] = React.useState<boolean>(false);

  const [includeUppercase, setIncludeUppercase] = React.useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = React.useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = React.useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = React.useState<boolean>(true);

  const hasAtLeastOneOption =
    includeUppercase || includeLowercase || includeNumbers || includeSymbols;
  const disableGenerate = lengthInput < 4 || !hasAtLeastOneOption;

  const generatePassword = (event?: React.FormEvent) => {
    event?.preventDefault();
    const randomPassword = generateRandomString({
      length: lengthInput,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    });
    setPassword(randomPassword);
    setDisplayCopyButton(true);
  };

  return {
    password,
    lengthInput,
    setLengthInput,
    displayCopyButton,
    disableGenerate,
    generatePassword,
    includeUppercase,
    setIncludeUppercase,
    includeLowercase,
    setIncludeLowercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
  };
}

export default usePasswordGenerator;
