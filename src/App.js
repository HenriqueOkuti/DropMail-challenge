import { AllContentContainer } from './AppStyles';
import Header from './components/header/Header';
import Info from './components/info/Info';
import MailContent from './components/mailContent/MailContent';
import { createSession } from './services/useDropMail';
import { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SessionProvider } from './contexts/sessionContext';

export default function App() {
  const queryClient = new QueryClient();
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    fetchSession(setToken);
  }, []);

  if (!token) {
    return (
      <>
        <div>Loading App</div>
      </>
    );
  }
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <Header />
          <AllContentContainer>
            <Info />
            <MailContent />
          </AllContentContainer>
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}

async function fetchSession(setToken) {
  let token = localStorage.getItem('token');
  if (!token) {
    const response = await createSession();
    token = response.data.introduceSession.id;
    localStorage.setItem('token', token);
    setToken(token);
    return;
  } else {
    console.log('here');
    const tokenIsValid = false;

    if (!tokenIsValid) {
      localStorage.removeItem('token');
      return await fetchSession(setToken);
    }

    return;
  }
}
