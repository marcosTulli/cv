'use client';
import { useMemo } from 'react';
import { PasswordConfigKeys } from '../utils';
import { passwordConfigStore } from '../store';

export function usePasswordConfig() {
  const { passwordConfig, updateConfig } = passwordConfigStore();
  const { withNumbers, withLowercase, withSymbols, withUppercase, length: lengthKey } =
    PasswordConfigKeys;

  const excluded = [lengthKey];

  const labels: Record<string, string> = {
    [withUppercase]: 'Uppercase (A-Z)',
    [withLowercase]: 'Lowercase (a-z)',
    [withNumbers]: 'Numbers (0-9)',
    [withSymbols]: 'Symbols (!@#$)',
  };

  const charConfig = useMemo(
    () =>
      Object.values(PasswordConfigKeys)
        .filter((key) => !excluded.includes(key))
        .map((key: PasswordConfigKeys) => ({
          key,
          label: labels[key],
          checked: passwordConfig[key] as boolean,
          setter: (value: boolean) => updateConfig(key, value),
        })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [passwordConfig]
  );

  const handleLength = (value: number) =>
    updateConfig(PasswordConfigKeys.length, value);

  return { charConfig, length: passwordConfig.length, handleLength };
}
