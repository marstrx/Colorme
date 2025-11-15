import reset from "../reset/reset.js";
const yellowColor = "\x1b[33m";
export const yellow = (text) => {
  return `${yellowColor}${text}${reset}`;
};
