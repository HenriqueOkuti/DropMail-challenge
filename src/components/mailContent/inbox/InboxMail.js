import {
  BlankRow,
  EmailBody,
  EmailTitle,
  InboxMailContainer,
} from './InboxMailStyles';

export default function InboxMail({ email }) {
  //console.log(email);

  return (
    <InboxMailContainer>
      <BlankRow />
      <EmailTitle>Email Title</EmailTitle>
      <EmailBody>Email Body</EmailBody>
    </InboxMailContainer>
  );
}
