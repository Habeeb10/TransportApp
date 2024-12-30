// /src/utils/notificationService.ts
import * as Notifications from "expo-notifications";

export const triggerLocalNotification = (title: string, message: string) => {
  Notifications.scheduleNotificationAsync({
    content: {
      title,
      body: message,
    },
    trigger: { seconds: 1 }, // Trigger immediately for demo purposes
  });
};
