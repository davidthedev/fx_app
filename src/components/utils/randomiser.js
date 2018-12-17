// formats to 6 characters
const formatValue = (x) => {
  return x.toString().substring(0, 7);
}

// randomises within +/- 10% of the value
export const randomise = (value) => {
  const percentage = value / 100 * 10;
  const min = value - percentage;
  const max = value + percentage;

  return formatValue(Math.random() * (max - min) + min);
};
