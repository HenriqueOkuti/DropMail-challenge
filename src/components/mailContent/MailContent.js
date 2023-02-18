import { useContext, useEffect, useState } from 'react';
import { MailContext } from '../../contexts/mailContext';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import InboxMail from './inbox/InboxMail';
import InboxMailMobile, { InboxMenuMobile } from './inbox/MenuMobile';
import InboxSideMenu from './inbox/InboxSideMenu';
import { MailContentContainer, MailContentMobile } from './MailContentStyles';

export default function MailContent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [emails, setEmails] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { mail } = useContext(MailContext);
  const [showMail, setShowMail] = useState(false);

  useEffect(() => {
    useWindowWidth(setWindowWidth);
  }, []);

  useEffect(() => {
    if (mail) {
      setEmails([...mail]);
    }
  }, [mail]);

  if (windowWidth >= 800) {
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
  } else {
    return (
      <>
        <MailContentContainer>
          {showMail ? (
            emails[0] ? (
              <InboxMailMobile
                setShowMail={setShowMail}
                email={emails[selectedIndex]}
              />
            ) : (
              <></>
            )
          ) : (
            <InboxMenuMobile
              emails={emails}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              setShowMail={setShowMail}
            />
          )}
        </MailContentContainer>
      </>
    );
  }
}
