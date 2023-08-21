class NotificationController {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
    this.addNotification = this.addNotification.bind(this);
    this.removeNotification = this.removeNotification.bind(this);

    this.view.setHandler({ onClickHandler: this.addNotification, onCloseHandler: this.removeNotification });
    this.model.subscribe(() => this.view.render({ notifications: this.model.notifications }));
    this.view.render({ notifications: this.model.notifications });
  }
  addNotification({ type, message }) {
    const newNotification = { type, message };
    const id = this.model.addNotification({ notification: newNotification });

    setTimeout(() => {
      this.removeNotification({ id });
    }, 4_000);
  }
  removeNotification({ id }) {
    this.model.removeNotification({ id });
  }
}

export default NotificationController;
