import {
  BlankRow,
  EmailBody,
  EmailTitle,
  InboxMailContainer,
} from './InboxMailStyles';

export default function InboxMail({ email }) {
  console.log(email);

  const formattedText = email.text.replace(/(?:\r\n|\r|\n)/g, '<br />');

  return (
    <InboxMailContainer>
      <BlankRow />
      <EmailTitle>{email.headerSubject}</EmailTitle>
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
