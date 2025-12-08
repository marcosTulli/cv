import { PasswordStrength } from './passwordStrength';
import { strengthThresholds } from './strengthThresholds';

export const getPasswordStrength = (length: number): PasswordStrength => {
  const found = strengthThresholds.find(([limit]) => length < limit);
  return found ? found[1] : PasswordStrength.strong;
};
