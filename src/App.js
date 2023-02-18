import { AllContentContainer } from './AppStyles';
import Header from './components/header/Header';
import Info from './components/info/Info';
import MailContent from './components/mailContent/MailContent';
import { createSession } from './services/useDropMail';
import { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SessionProvider } from './contexts/sessionContext';
import { MailProvider } from './contexts/mailContext';

export default function App() {
  const queryClient = new QueryClient();
  const [userInfo, setUserInfo] = useState(localStorage.getItem('userInfo'));

  useEffect(() => {
    fetchSession(setUserInfo);
  }, []);

  if (!userInfo) {
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
          <MailProvider>
            <Header />
            <AllContentContainer>
              <Info />
              <MailContent />
            </AllContentContainer>
          </MailProvider>
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}

async function fetchSession(setUserInfo) {
  let token = JSON.parse(localStorage.getItem('userInfo'))?.token;
  if (!token) {
    const response = await createSession();
    token = response.data.introduceSession.id;
    const address = response.data.introduceSession.addresses[0].address;
    localStorage.setItem(
      'userInfo',
      JSON.stringify({ token: token, address: address })
    );
    setUserInfo({ token: token, address: address });
    return;
  } else {
    console.log('here');
    // fetch emails, if fetch return error, tokenIsValid = false (session expired);

    const tokenIsValid = true;

    if (!tokenIsValid) {
      localStorage.removeItem('userInfo');
      return await fetchSession(setUserInfo);
    }

    return;
  }
}
