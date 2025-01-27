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

export const generateRandomString = ({ length }: { length: number }) => {
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
