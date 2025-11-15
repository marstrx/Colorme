import reset from "../reset/reset.js";
const magentaColor = "\x1b[35m";
export const magenta = (text) => {
  return `${magentaColor}${text}${reset}`;
};
