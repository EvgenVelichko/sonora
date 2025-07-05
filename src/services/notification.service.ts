export interface NotificationData {
  id: number;
  name: string;
  country: string;
  product: string;
  visible: boolean;
}

export class NotificationService {
  static getNotifications(): NotificationData[] {
    return [
      { id: 1, name: 'Ethan', country: 'USA', product: 'Sonora Ultra', visible: true },
      { id: 2, name: 'Sophie', country: 'UK', product: 'Sonora Pro Max', visible: true },
      { id: 3, name: 'Marco', country: 'Italy', product: 'Sonora Ultra', visible: true },
      { id: 4, name: 'Anna', country: 'Germany', product: 'Sonora Pro Max', visible: false },
      { id: 5, name: 'Carlos', country: 'Spain', product: 'Sonora Ultra', visible: false }
    ];
  }

  static hideNotification(notifications: NotificationData[], id: number): NotificationData[] {
    return notifications.map(n => 
      n.id === id ? { ...n, visible: false } : n
    );
  }

  static showRandomNotification(notifications: NotificationData[]): NotificationData[] {
    const hiddenNotifications = notifications.filter(n => !n.visible);
    if (hiddenNotifications.length > 0) {
      const randomNotification = hiddenNotifications[Math.floor(Math.random() * hiddenNotifications.length)];
      return notifications.map(n => 
        n.id === randomNotification.id ? { ...n, visible: true } : n
      );
    }
    return notifications;
  }
}