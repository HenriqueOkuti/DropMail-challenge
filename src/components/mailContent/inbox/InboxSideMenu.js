import {
  EmailContainer,
  EmailsContainer,
  EmailSender,
  EmailSimplifiedText,
  EmailTitle,
  SideMenuContainer,
  SideMenuHeader,
} from './InboxSideMenuStyles';

export default function InboxSideMenu({
  emails,
  selectedIndex,
  setSelectedIndex,
}) {
  return (
    <>
      <SideMenuContainer>
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
              />
            ))
          ) : (
            <></>
          )}
        </EmailsContainer>
      </SideMenuContainer>
    </>
  );
}

function RenderEmailOption({ email, index, selected, setSelectedIndex }) {
  const simplifiedText = email.text.slice(0, 50);

  return (
    <EmailContainer colors={selected} onClick={() => setSelectedIndex(index)}>
      <EmailSender>{email.fromAddr}</EmailSender>
      <EmailTitle>{email.headerSubject}</EmailTitle>
      <EmailSimplifiedText>{simplifiedText}</EmailSimplifiedText>
    </EmailContainer>
  );
}
