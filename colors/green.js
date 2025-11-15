import reset from "../reset/reset.js";
const greenColor = "\x1b[32m";
export const green = (text) => {
  return `${greenColor}${text}${reset}`;
};