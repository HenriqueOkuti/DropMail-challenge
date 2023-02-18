import { createContext, useContext, useState } from 'react';

const MailContext = createContext();

const DefaultEmail = {
  toAddr: '',
  text: 'Your temp e-mail address is ready\nIf you need help read the information below and do not hesitate to contact us.\n\nAll the best,\nDropMail',
  rawSize: 9,
  headerSubject: 'Welcome',
  fromAddr: 'Hello',
  downloadUrl:
    'https://dropmail.me/download/mail/gql:anonym-0123456789abcdefg:3d869497-3383-4884-aa7c-94c34f2e6ec4/20230217zqwd3128fwbnvdtv7fjmte2tx9cqp49d',
};

function MailProvider({ children }) {
  const [mail, setMail] = useState(
    localStorage.getItem('mail') ? localStorage.getItem('mail') : [DefaultEmail]
  );

  return (
    <MailContext.Provider value={{ mail, setMail }}>
      {children}
    </MailContext.Provider>
  );
}

export { MailContext, MailProvider, DefaultEmail };
