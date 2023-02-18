import { AllContentContainer, LoadingContainer } from './AppStyles';
import Header from './components/header/Header';
import Info from './components/info/Info';
import MailContent from './components/mailContent/MailContent';
import { createSession, verifySession } from './services/useDropMail';
import { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SessionProvider } from './contexts/sessionContext';
import { MailProvider } from './contexts/mailContext';
import { BallTriangle } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';
import { NotificationProvider } from './contexts/notificationContext';

export default function App() {
  const queryClient = new QueryClient();
  const [userInfo, setUserInfo] = useState(localStorage.getItem('userInfo'));

  useEffect(() => {
    fetchSession(setUserInfo);
  }, []);

  if (!userInfo) {
    return (
      <>
        <LoadingContainer>
          <div>Loading App</div>
          <BallTriangle
            height={150}
            width={150}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </LoadingContainer>
      </>
    );
  }
  return (
    <>
      <ToastContainer
        toastStyle={{ backgroundColor: '#dbdbdb', color: '#000000' }}
      />
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <MailProvider>
            <NotificationProvider>
              <Header />
              <AllContentContainer>
                <Info />
                <MailContent />
              </AllContentContainer>
            </NotificationProvider>
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
    const tokenIsValid = await verifySession(token);

    if (!tokenIsValid) {
      localStorage.removeItem('userInfo');
      return await fetchSession(setUserInfo);
    }

    return;
  }
}
