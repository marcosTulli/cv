import React from "react";
import copy from "copy-to-clipboard";
import { generateRandomString } from "@/utils";

function usePasswordGenerator() {
  const [password, setPassword] = React.useState<string>("");
  const [lengthInput, setLengthInput] = React.useState<number>(0);
  const tooltipDefault: string = "Click to copy";
  const [tooltipTitle, setTooltipTitle] =
    React.useState<string>(tooltipDefault);
  const [displayCopyButton, setDisplayCopyButton] =
    React.useState<boolean>(false);
  const disableGenerate: boolean = lengthInput === 0;

  const generatePassword = (event: React.FormEvent) => {
    event.preventDefault();
    const randomPassword = generateRandomString({ length: lengthInput });
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
