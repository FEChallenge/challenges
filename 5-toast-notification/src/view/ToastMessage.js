import { getBackgroundColor } from "../util.js";

function ToastMessage({ id, type, message }) {
  return `<div class="toast-message bottom-color-${getBackgroundColor(type)}">
            <div>${message}</div>
            <span class="close-button" data-id="${id}">X</span>
          </div>`;
}

export default ToastMessage;
