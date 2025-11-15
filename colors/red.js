import reset from "../reset/reset.js";
const redColor = "\x1b[31m";
export const red = (text) => {
  return `${redColor}${text}${reset}`;
};
