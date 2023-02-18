import { useContext, useEffect, useState } from 'react';
import { MailContext } from '../../contexts/mailContext';
import { SessionContext } from '../../contexts/sessionContext';
import InboxMail from './inbox/InboxMail';
import InboxSideMenu from './inbox/InboxSideMenu';
import { MailContentContainer } from './MailContentStyles';

export default function MailContent() {
  const [emails, setEmails] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { mail } = useContext(MailContext);

  useEffect(() => {
    if (mail) {
      setEmails([...mail]);
    }
  }, [mail]);

  return (
    <>
      <MailContentContainer>
        <InboxSideMenu
          emails={emails}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        {emails[0] ? <InboxMail email={emails[selectedIndex]} /> : <></>}
      </MailContentContainer>
    </>
  );
}
