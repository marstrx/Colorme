import reset from "../reset/reset.js";
const cyanColor = "\x1b[36m";
export const cyan = (text) => {
  return `${cyanColor}${text}${reset}`;
};
