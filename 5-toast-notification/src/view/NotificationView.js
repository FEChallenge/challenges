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
              ${Button({ title: "Success" })}
              ${Button({ title: "Info" })}
              ${Button({ title: "Warning" })}
              ${Button({ title: "Error" })}
            </div>
            <div class="toast-message-container">
              ${notifications
                .map(({ type, message }, index) => ToastMessage({ type, message: `${message} toast notification.`, index }))
                .join("")}
            </div>`;
  }
  render({ notifications }) {
    $("body").innerHTML = this.template({ notifications });
    this.setEvent();
  }
  setEvent() {
    $(".buttons").addEventListener("click", (e) => {
      const [type] = e.target.className.split("-");
      this.onClickHandler({ type, message: `${type} toast notifications` });
    });
    $All(`.close-button`).forEach((el) => {
      el.addEventListener("click", (e) => {
        const { index } = e.target.dataset;
        this.onCloseHandler({ index });
      });
    });
  }
}

export default NotificationView;
