import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Notification {
  id: number;
  name: string;
  country: string;
  product: string;
  visible: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, name: 'Ethan', country: 'USA', product: 'Sonora Ultra', visible: true },
    { id: 2, name: 'Sophie', country: 'UK', product: 'Sonora Pro Max', visible: true },
    { id: 3, name: 'Marco', country: 'Italy', product: 'Sonora Ultra', visible: true }
  ]);

  // Автоматическое исчезновение уведомлений через 5 секунд
  useEffect(() => {
    notifications.forEach((notification) => {
      if (notification.visible) {
        const timer = setTimeout(() => {
          setNotifications(prev => 
            prev.map(n => 
              n.id === notification.id ? { ...n, visible: false } : n
            )
          );
        }, 5000);

        return () => clearTimeout(timer);
      }
    });
  }, [notifications]);

  // Показать уведомление снова через некоторое время
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(prev => {
        const hiddenNotifications = prev.filter(n => !n.visible);
        if (hiddenNotifications.length > 0) {
          const randomNotification = hiddenNotifications[Math.floor(Math.random() * hiddenNotifications.length)];
          return prev.map(n => 
            n.id === randomNotification.id ? { ...n, visible: true } : n
          );
        }
        return prev;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const hideNotification = (id: number) => {
    setNotifications(prev => 
      prev.map(n => 
        n.id === id ? { ...n, visible: false } : n
      )
    );
  };

  return (
    <>
      {notifications.map((notification) => (
        notification.visible && (
          <div key={notification.id} className="notification animate-fade-in">
            <div className="notification__content">
              <div className="notification__image">
                <img 
                  src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Product" 
                />
              </div>
              <div className="notification__text">
                <p className="notification__text-name">{notification.name} from {notification.country}</p>
                <p className="notification__text-product">purchased {notification.product}</p>
              </div>
              <button
                onClick={() => hideNotification(notification.id)}
                className="notification__close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )
      ))}
    </>
  );
};

export default Notifications;