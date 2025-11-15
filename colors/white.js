import reset from "../reset/reset.js";
const whiteColor = "\x1b[37m";
export const white = (text) => {
  return `${whiteColor}${text}${reset}`;
};
