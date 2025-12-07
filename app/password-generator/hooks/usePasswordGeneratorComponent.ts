'use client'
import { passwordConfigStore, passwordGenUIStore } from "../store"
import { getPasswordStrength } from "../utils"
import { passwordStrengthColorMap } from "../utils/colorMap"
import { passwordStrengthLabelMap } from "../utils/labelMap"


export function usePasswordGeneratorComponent() {
  const { passwordConfig} = passwordConfigStore()
  const { length, withNumbers, withLowercase, withSymbols, withUppercase} = passwordConfig
  const {passwordCopied, showSnackbar, displayCopyPassword, togglePasswordCoppied, toggleShowSnackBar } = passwordGenUIStore()
  const passwordStrength = getPasswordStrength(passwordConfig.length)
  const strengthColor = passwordStrengthColorMap[passwordStrength]
  const strengthLabel = passwordStrengthLabelMap[passwordStrength]

  const hasAtLeastOneOption =
    withUppercase || withLowercase || withNumbers || withSymbols;
  const disableGenerate = length < 4 || !hasAtLeastOneOption;

  const handleCopy = () => {
    togglePasswordCoppied()
    toggleShowSnackBar()
    setTimeout(() => togglePasswordCoppied(), 2000);
  };

  return {
    passwordCopied,
    showSnackbar,
    disableGenerate,
    strengthColor,
    strengthLabel,
    displayCopyPassword,
    toggleShowSnackBar,
    handleCopy,
  }
}

