import {
  EmailContainer,
  EmailsContainer,
  EmailSender,
  EmailSimplifiedText,
  EmailTitle,
  SideMenuContainer,
  SideMenuHeader,
} from './InboxSideMenuStyles';

export default function InboxSideMenu({ emails }) {
  return (
    <>
      <SideMenuContainer>
        <SideMenuHeader>
          <p>Inbox</p>
        </SideMenuHeader>
        <EmailsContainer>
          {emails[0] ? (
            emails.map((email, index) => (
              <RenderEmailOption key={index} email={email} />
            ))
          ) : (
            <></>
          )}
        </EmailsContainer>
      </SideMenuContainer>
    </>
  );
}

function RenderEmailOption({ email }) {
  const simplifiedText = email.text.slice(0, 50);

  return (
    <EmailContainer onClick={() => console.log('selected e-mail')}>
      <EmailSender>{email.fromAddr}</EmailSender>
      <EmailTitle>{email.headerSubject}</EmailTitle>
      <EmailSimplifiedText>{simplifiedText}</EmailSimplifiedText>
    </EmailContainer>
  );
}
