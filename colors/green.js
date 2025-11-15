import reset from "../reset/reset.js";
const greenColor = "\x1b[32m";
const green = (text) => {
  return `${greenColor}${text}${reset}`;
};

export default green;
