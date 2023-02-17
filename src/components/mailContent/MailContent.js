import InboxMail from './inbox/InboxMail';
import InboxSideMenu from './inbox/InboxSideMenu';

export default function MailContent() {
  return (
    <>
      <div>
        <InboxSideMenu />
        <InboxMail />
      </div>
    </>
  );
}
