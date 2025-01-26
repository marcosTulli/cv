import React from "react";
import copy from "copy-to-clipboard";

function usePasswordGenerator() {
  const [password, setPassword] = React.useState<string>("");
  const [lengthInput, setLengthInput] = React.useState<number>(0);
  const tooltipDefault: string = "Click to copy";
  const [tooltipTitle, setTooltipTitle] =
    React.useState<string>(tooltipDefault);
  const [displayCopyButton, setDisplayCopyButton] =
    React.useState<boolean>(false);
  const disableGenerate: boolean = lengthInput === 0;

  enum CharTypes {
    lowerCase = "lowerCase",
    upperCase = "upperCase",
    numberString = "numberString",
    specialChar = "sepcialChar",
  }

  const generateRandomCharacter = ({
    charType,
  }: {
    charType: CharTypes;
  }): string => {
    const charPositions = { max: 0, min: 0 };
    switch (charType) {
      case CharTypes.lowerCase:
        charPositions.min = 97;
        charPositions.max = 122;
        break;
      case CharTypes.upperCase:
        charPositions.min = 65;
        charPositions.max = 90;
        break;
      case CharTypes.specialChar:
        charPositions.min = 35;
        charPositions.max = 38;
        break;
      case CharTypes.numberString:
        charPositions.min = 48;
        charPositions.max = 57;
        break;
      default:
        throw new Error("missing chartype on generate ");
    }
    const { min, max } = charPositions;

    const char = Math.floor(Math.random() * (max - min + 1) + min);
    return String.fromCharCode(char);
  };

  const generateLowerCase = () =>
    generateRandomCharacter({ charType: CharTypes.lowerCase });
  const generateUperCase = () =>
    generateRandomCharacter({ charType: CharTypes.upperCase });
  const generateNumberString = () =>
    generateRandomCharacter({ charType: CharTypes.numberString });
  const generateSpecialChar = () =>
    generateRandomCharacter({ charType: CharTypes.specialChar });

  const generateRandomPassword = ({ length }: { length: number }) => {
    const generators = [
      generateLowerCase,
      generateUperCase,
      generateNumberString,
      generateSpecialChar,
    ];

    const password = Array.from({ length })
      .map(() => {
        const randomGenerator =
          generators[Math.floor(Math.random() * generators.length)];
        return randomGenerator();
      })
      .join("");
    return password;
  };

  const generatePassword = (event: React.FormEvent) => {
    event.preventDefault();
    const randomPassword = generateRandomPassword({ length: lengthInput });
    setPassword(randomPassword);
    setDisplayCopyButton(true);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = parseInt(event.target.value);
    setLengthInput(value);
  };

  const handleCopy = () => {
    copy(password);
    setTooltipTitle("Password copied to clipboard!");
  };
  const resetTooltip = () => {
    setTooltipTitle(tooltipDefault);
  };
  return {
    password,
    lengthInput,
    tooltipTitle,
    displayCopyButton,
    disableGenerate,
    generatePassword,
    handleCopy,
    handleInputChange,
    resetTooltip,
  };
}

export default usePasswordGenerator;
