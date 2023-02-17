export default function InboxSideMenu({ emails }) {
  console.log(emails);

  return (
    <>
      <div>
        <div>Inbox</div>
        {emails.map((email, index) => (
          <RenderEmailOption key={index} email={email} />
        ))}
      </div>
    </>
  );
}

function RenderEmailOption({ email }) {
  return (
    <>
      <div>Email</div>
    </>
  );
}
