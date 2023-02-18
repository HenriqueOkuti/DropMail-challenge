import { AllContentContainer } from './AppStyles';
import Header from './components/header/Header';
import Info from './components/info/Info';
import MailContent from './components/mailContent/MailContent';

export default function App() {
  return (
    <>
      <div>
        <Header />
        <AllContentContainer>
          <Info />
          <MailContent />
        </AllContentContainer>
      </div>
    </>
  );
}
