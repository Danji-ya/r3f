export const randomPos = ({ min = -3, max = 3 } = {}) => {
  return Math.random() * (max - min) + min;
};

export const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
