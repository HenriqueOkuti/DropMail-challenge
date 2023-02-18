import { createContext, useContext, useState } from 'react';

const SessionContext = createContext();

function SessionProvider({ children }) {
  const [session, setSession] = useState(localStorage.getItem('userInfo'));

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
}

export { SessionContext, SessionProvider };
