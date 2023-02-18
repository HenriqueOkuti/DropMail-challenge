import { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(
    Notification.permission === 'granted' ? true : false
  );

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

export { NotificationContext, NotificationProvider };
