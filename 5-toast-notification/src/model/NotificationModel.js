class NotificationModel {
  constructor() {
    this.notifications = [];
    this.subscribers = [];
  }
  addNotification({ notification }) {
    const id = new Date().getTime();
    this.notifications.push({ id, ...notification });
    this.notify();
    return id;
  }
  removeNotification({ id }) {
    this.notifications = this.notifications.filter((notification) => notification.id !== id);
    this.notify();
  }
  notify() {
    this.subscribers.forEach((subscriber) => subscriber());
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}

export default NotificationModel;
