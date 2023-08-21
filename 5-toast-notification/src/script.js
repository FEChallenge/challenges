import NotificationController from "./controller/NotificationController.js";
import NotificationModel from "./model/NotificationModel.js";
import NotificationView from "./view/NotificationView.js";

const notificationModel = new NotificationModel();
const notificationView = new NotificationView();
const notificationController = new NotificationController({ model: notificationModel, view: notificationView });
