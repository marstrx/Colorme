import reset from "../reset/reset.js";
const blueColor = "\x1b[34m";
export const blue = (text) => {
  return `${blueColor}${text}${reset}`;
};
