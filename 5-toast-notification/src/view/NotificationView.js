import { $, $All } from "../util.js";
import Button from "./Button.js";
import ToastMessage from "./ToastMessage.js";

class NotificationView {
  setHandler({ onClickHandler, onCloseHandler }) {
    this.onClickHandler = onClickHandler;
    this.onCloseHandler = onCloseHandler;
  }
  template({ notifications }) {
    return `<div class="buttons">
              ${Button({ type: "Success", title: "Success" })}
              ${Button({ type: "Info", title: "Info" })}
              ${Button({ type: "Warning", title: "Warning" })}
              ${Button({ type: "Error", title: "Error" })}
            </div>
            <div class="toast-message-container">
              ${notifications
                .map(({ id, type, message }) => ToastMessage({ id, type, message: `${message} toast notification.` }))
                .join("")}
            </div>`;
  }
  render({ notifications }) {
    $("body").innerHTML = this.template({ notifications });
    this.setEvent();
  }
  setEvent() {
    $(".buttons").addEventListener("click", (e) => {
      const type = e.target.textContent;
      this.onClickHandler({ type, message: `${type} toast notifications` });
    });
    $All(`.close-button`).forEach((el) => {
      el.addEventListener("click", (e) => {
        const id = +e.target.dataset.id;
        this.onCloseHandler({ id });
      });
    });
  }
}

export default NotificationView;
