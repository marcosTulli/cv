'use client'

import { generateRandomString } from "@/utils"
import passwordConfigStore from "../store/passwordConfigStore"
import { passwordGenUIStore } from "../store/passwordGenUiStore"
import passwordStore from "../store/passwordStore"

export function useGeneratePassword() {
  const { passwordConfig } = passwordConfigStore()
  const {password, setPassword} = passwordStore()
  const { length, withNumbers, withLowercase, withSymbols, withUppercase} = passwordConfig
  const {passwordCopied, showSnackbar, displayCopyPassword, togglePasswordCoppied, toggleShowSnackBar, toggleDisplayCopyPassword} = passwordGenUIStore()


  const hasAtLeastOneOption =
    withUppercase || withLowercase || withNumbers || withSymbols;
  const disableGenerate = length < 4 || !hasAtLeastOneOption;


 const getStrengthColor = (length: number) => {
    if (length < 8) return '#ef4444';
    if (length < 12) return '#f59e0b';
    if (length < 16) return '#22c55e';
    return '#10b981';
  };

const getStrengthLabel = (length: number) => {
    if (length < 8) return 'Weak';
    if (length < 12) return 'Fair';
    if (length < 16) return 'Strong';
    return 'Very Strong';
  };

  const strengthColor = getStrengthColor(length);

  const handleCopy = () => {
    togglePasswordCoppied()
    toggleShowSnackBar()
    setTimeout(() => togglePasswordCoppied(), 2000);
  };


  const generatePassword = () => {
    const randomPassword = generateRandomString({
      length: length,
      includeUppercase: withUppercase,
      includeLowercase: withLowercase,
      includeNumbers: withNumbers,
      includeSymbols: withSymbols,
    });
    setPassword(randomPassword);
    !displayCopyPassword && toggleDisplayCopyPassword();
  };


  return {
    password,
    passwordCopied,
    showSnackbar,
    disableGenerate,
    strengthColor,
    passwordConfig,
    displayCopyPassword,
    getStrengthLabel,
    toggleShowSnackBar,
    handleCopy,
    generatePassword,
  }
}

