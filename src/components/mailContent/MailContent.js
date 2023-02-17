import { useEffect, useState } from 'react';
import InboxMail from './inbox/InboxMail';
import InboxSideMenu from './inbox/InboxSideMenu';
import { MailContentContainer } from './MailContentStyles';

export default function MailContent() {
  const [emails, setEmails] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setEmails([...response.data.sessions[0].mails]);
  }, []);

  return (
    <>
      <MailContentContainer>
        <InboxSideMenu emails={emails} />
        <InboxMail email={emails[selectedIndex]} />
      </MailContentContainer>
    </>
  );
}

const response = {
  data: {
    sessions: [
      {
        mails: [
          {
            toAddr: 'fpkzgcshf@emltmp.com',
            text: 'TEST 2\r\n\r\nOn Fri, Feb 17, 2023 at 12:54 PM Henrique Krastins Okuti <\r\nhenrique.okuti@usp.br> wrote:\r\n\r\n> id: U2Vzc2lvbjo4VUdAU85KcokNcoFpl409\r\n>\r\n> --\r\n> *Henrique Krastins Okuti*\r\n>\r\n\r\n\r\n-- \r\n*Henrique Krastins Okuti*\r\n',
            rawSize: 3804,
            headerSubject: 'Re: TEST',
            fromAddr: 'henrique.okuti@usp.br',
            downloadUrl:
              'https://dropmail.me/download/mail/gql:anonym-01234567_test:38554740-53ce-4a72-890d-728169978d3d/20230217bsa7my4m5ytd6hvrb51g18n2m9eh4yxc',
          },
          {
            toAddr: 'fpkzgcshf@emltmp.com',
            text: 'id: U2Vzc2lvbjo4VUdAU85KcokNcoFpl409\r\n\r\n-- \r\n*Henrique Krastins Okuti*\r\n',
            rawSize: 2879,
            headerSubject: 'TEST',
            fromAddr: 'henrique.okuti@usp.br',
            downloadUrl:
              'https://dropmail.me/download/mail/gql:anonym-01234567_test:38554740-53ce-4a72-890d-728169978d3d/20230217ny4j54p2jgrsdh5mjtcp99t23jctmckk',
          },
        ],
        id: 'U2Vzc2lvbjo4VUdAU85KcokNcoFpl409',
        expiresAt: '2023-02-17T16:06:02+00:00',
      },
    ],
  },
};

//- create email:
//query: mutation {introduceSession {id, expiresAt, addresses {address}}}

//- fetch everything:
//query: query {sessions {id, expiresAt, mails {rawSize, fromAddr, toAddr, downloadUrl, text, headerSubject}}}

//- fetch emails from specific id:
//query: query { session(id: "U2Vzc2lvbjo4VUdAU85KcokNcoFpl409") { mails{ rawSize, fromAddr, toAddr, downloadUrl, text, headerSubject } } }
