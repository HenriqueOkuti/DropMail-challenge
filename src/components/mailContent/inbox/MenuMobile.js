import { MenuMobileContainer } from './MenuMobileStyles';
import {
  EmailContainer,
  EmailsContainer,
  EmailSender,
  EmailSimplifiedText,
  EmailTitle,
  SideMenuContainer,
  SideMenuHeader,
} from './InboxSideMenuStyles';

import {
  BlankRow,
  EmailBody,
  EmailTitle as MailTitle,
  InboxMailContainer,
} from './InboxMailStyles';
import { BsArrowCounterclockwise } from 'react-icons/bs';

export function InboxMenuMobile({
  emails,
  selectedIndex,
  setSelectedIndex,
  setShowMail,
}) {
  return (
    <>
      <MenuMobileContainer>
        <SideMenuHeader>
          <p>Inbox</p>
        </SideMenuHeader>
        <EmailsContainer>
          {emails[0] ? (
            emails.map((email, index) => (
              <RenderEmailOption
                key={index}
                email={email}
                index={index}
                selected={selectedIndex === index}
                setSelectedIndex={setSelectedIndex}
                setShowMail={setShowMail}
              />
            ))
          ) : (
            <></>
          )}
        </EmailsContainer>
      </MenuMobileContainer>
    </>
  );
}

export default function InboxMailMobile({ email, setShowMail }) {
  const formattedText = email.text.replace(/(?:\r\n|\r|\n)/g, '<br />');

  return (
    <InboxMailContainer>
      <BlankRow>
        <BsArrowCounterclockwise
          onClick={() => {
            setShowMail(false);
          }}
        />
      </BlankRow>
      <MailTitle>{email.headerSubject}</MailTitle>
      <EmailBody>
        <p
          dangerouslySetInnerHTML={{
            __html: formattedText,
          }}
        />
      </EmailBody>
    </InboxMailContainer>
  );
}

function RenderEmailOption({
  email,
  index,
  selected,
  setSelectedIndex,
  setShowMail,
}) {
  const simplifiedText = email.text.slice(0, 50);

  return (
    <EmailContainer
      colors={selected}
      onClick={() => {
        setSelectedIndex(index);
        setShowMail(true);
      }}
    >
      <EmailSender>{email.fromAddr}</EmailSender>
      <EmailTitle>{email.headerSubject}</EmailTitle>
      <EmailSimplifiedText>{simplifiedText}</EmailSimplifiedText>
    </EmailContainer>
  );
}
