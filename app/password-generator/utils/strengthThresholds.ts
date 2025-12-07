import { passwordLengths } from "./passwordLengths";
import { PasswordStrength } from "./passwordStrength";

const { weak, fair, strong} = passwordLengths

export const strengthThresholds: Array<[number, PasswordStrength]> = [
  [weak, PasswordStrength.weak],
  [fair, PasswordStrength.fair],
  [strong, PasswordStrength.fair],
];