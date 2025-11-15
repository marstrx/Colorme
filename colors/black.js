import reset from "../reset/reset.js";
const blackColor = "\x1b[30m";
export const black = (text) => {
  return `${blackColor}${text}${reset}`;
};
