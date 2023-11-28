export const formatMarketCaps = (number: number): string => {
  if (number < 1) {
    return String(number);
  }
  if (number < 1000000) {
    return number.toLocaleString("en-US");
  }

  const suffix = "M";
  const formattedNumber = Number((number / 1000000).toFixed(0)).toLocaleString(
    "en-US",
  );

  return `${formattedNumber}${suffix}`;
};
