const CHAR_SETS = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%?',
};

export interface PasswordOptions {
  length: number;
  includeUppercase?: boolean;
  includeLowercase?: boolean;
  includeNumbers?: boolean;
  includeSymbols?: boolean;
}

export const generateRandomString = ({
  length,
  includeUppercase = true,
  includeLowercase = true,
  includeNumbers = true,
  includeSymbols = true,
}: PasswordOptions): string => {
  let charset = '';

  if (includeLowercase) charset += CHAR_SETS.lowercase;
  if (includeUppercase) charset += CHAR_SETS.uppercase;
  if (includeNumbers) charset += CHAR_SETS.numbers;
  if (includeSymbols) charset += CHAR_SETS.symbols;

  if (charset.length === 0) {
    charset = CHAR_SETS.lowercase;
  }

  const password = Array.from({ length })
    .map(() => charset[Math.floor(Math.random() * charset.length)])
    .join('');

  return password;
};
