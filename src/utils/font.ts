const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min: number, max: number): number => {
  return Number((Math.random() * (max - min) + min).toFixed(2));
};

const getRandomFontClass = (): string => {
  return Math.random() < 0.5 ? "var(--font-sans)" : "var(--font-editorial)";
};

export const getRandomLayoutTransform = (
  minLeft: number = 2,
  maxLeft: number = 12,
  minDeg: number = -1.2,
  maxDeg: number = 1.2
): React.CSSProperties => {
  const leftPercent = getRandomInt(minLeft, maxLeft);
  const angle = getRandomFloat(minDeg, maxDeg);

  return {
    marginLeft: `${leftPercent}%`,
    transform: `rotate(${angle}deg)`,
    transformOrigin: "left center",
    display: "block",
    boxSizing: "border-box",
  };
};

export const generateGlobalTypographyVariables = (): Record<string, string> => {
  return {
    "--fs-h1": `${getRandomInt(32, 40)}px`,
    "--font-h1": getRandomFontClass(),

    "--fs-h2": `${getRandomInt(24, 30)}px`,
    "--font-h2": getRandomFontClass(),

    "--fs-h3": `${getRandomInt(20, 23)}px`,
    "--font-h3": getRandomFontClass(),

    "--fs-h4": `${getRandomInt(17, 19)}px`,
    "--font-h4": getRandomFontClass(),

    "--fs-body": `${getRandomInt(14, 16)}px`,
    "--font-body": getRandomFontClass(),

    "--fs-caption": `${getRandomInt(11, 13)}px`,
    "--font-caption": getRandomFontClass(),
  };
};