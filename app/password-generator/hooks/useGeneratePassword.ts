'use client';
import { generateRandomString } from '@/utils';
import { passwordConfigStore, passwordGenUIStore, passwordStore } from '../store';

export function useGeneratePassword() {
  const { passwordConfig } = passwordConfigStore();
  const { password, setPassword } = passwordStore();
  const { length, withNumbers, withLowercase, withSymbols, withUppercase } = passwordConfig;
  const { displayCopyPassword, toggleShowSnackBar, toggleDisplayCopyPassword } =
    passwordGenUIStore();

  const generatePassword = () => {
    const randomPassword = generateRandomString({
      length: length,
      includeUppercase: withUppercase,
      includeLowercase: withLowercase,
      includeNumbers: withNumbers,
      includeSymbols: withSymbols,
    });
    setPassword(randomPassword);
    if (!displayCopyPassword) {
      toggleDisplayCopyPassword();
    }
  };

  return {
    password,
    passwordConfig,
    toggleShowSnackBar,
    generatePassword,
  };
}
