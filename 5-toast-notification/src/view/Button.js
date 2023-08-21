import { getBackgroundColor } from "../util.js";

function Button({ type, title }) {
  return `<button class="button ${title}-button ${getBackgroundColor(type)}" type="button">${title}</button>`;
}

export default Button;
