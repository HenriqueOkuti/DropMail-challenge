import { useEffect, useState } from 'react';
import InboxMail from './inbox/InboxMail';
import InboxSideMenu from './inbox/InboxSideMenu';
import { MailContentContainer } from './MailContentStyles';

export default function MailContent() {
  const [emails, setEmails] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setEmails([...response.data.session.mails]);
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
    session: {
      mails: [
        {
          toAddr: 'aefuobwkh@10mail.org',
          text: 'This text should be smaller\r\n',
          rawSize: 3044,
          headerSubject: 'Re: TEST',
          fromAddr: 'henrique.okuti@usp.br',
          downloadUrl:
            'https://dropmail.me/download/mail/gql:anonym-0123456789abcdefg:3d869497-3383-4884-aa7c-94c34f2e6ec4/20230217zqwd3128fwbnvdtv7fjmte2tx9cqp49d',
        },
        {
          toAddr: 'aefuobwkh@10mail.org',
          text: 'You must save: TOKEN to access the email list.\r\n\r\n- create email:\r\nquery: mutation {introduceSession {id, expiresAt, addresses {address}}}\r\n\r\n- fetch everything:\r\nquery: query {sessions {id, expiresAt, mails {rawSize, fromAddr, toAddr,\r\ndownloadUrl, text, headerSubject}}}\r\n\r\n- fetch emails from specific id:\r\nquery: query { session(id: "U2Vzc2lvbjo4VUdAU85KcokNcoFpl409") { mails{\r\nrawSize, fromAddr, toAddr, downloadUrl, text, headerSubject } } }\r\n\r\n{\r\n  "data": {\r\n    "sessions": [\r\n      {\r\n        "mails": [\r\n          {\r\n            "toAddr": "fpkzgcshf@emltmp.com",\r\n            "text": "TEST 2\\r\\n\\r\\nOn Fri, Feb 17, 2023 at 12:54 PM\r\nHenrique Krastins Okuti <\\r\\nhenrique.okuti@usp.br> wrote:\\r\\n\\r\\n> id:\r\nU2Vzc2lvbjo4VUdAU85KcokNcoFpl409\\r\\n>\\r\\n> --\\r\\n> *Henrique Krastins\r\nOkuti*\\r\\n>\\r\\n\\r\\n\\r\\n-- \\r\\n*Henrique Krastins Okuti*\\r\\n",\r\n            "rawSize": 3804,\r\n            "headerSubject": "Re: TEST",\r\n            "fromAddr": "henrique.okuti@usp.br",\r\n            "downloadUrl": "\r\nhttps://dropmail.me/download/mail/gql:anonym-01234567_test:38554740-53ce-4a72-890d-728169978d3d/20230217bsa7my4m5ytd6hvrb51g18n2m9eh4yxc\r\n"\r\n          },\r\n          {\r\n            "toAddr": "fpkzgcshf@emltmp.com",\r\n            "text": "id: U2Vzc2lvbjo4VUdAU85KcokNcoFpl409\\r\\n\\r\\n--\r\n\\r\\n*Henrique Krastins Okuti*\\r\\n",\r\n            "rawSize": 2879,\r\n            "headerSubject": "TEST",\r\n            "fromAddr": "henrique.okuti@usp.br",\r\n            "downloadUrl": "\r\nhttps://dropmail.me/download/mail/gql:anonym-01234567_test:38554740-53ce-4a72-890d-728169978d3d/20230217ny4j54p2jgrsdh5mjtcp99t23jctmckk\r\n"\r\n          }\r\n        ],\r\n        "id": "U2Vzc2lvbjo4VUdAU85KcokNcoFpl409",\r\n        "expiresAt": "2023-02-17T16:06:02+00:00"\r\n      }\r\n    ]\r\n  }\r\n}\r\n\r\nOn Fri, Feb 17, 2023 at 1:03 PM Henrique Krastins Okuti <\r\nhenrique.okuti@usp.br> wrote:\r\n\r\n> You must save: TOKEN to access the email list.\r\n>\r\n> - create email:\r\n> query: mutation {introduceSession {id, expiresAt, addresses {address}}}\r\n>\r\n> - fetch everything:\r\n> query: query {sessions {id, expiresAt, mails {rawSize, fromAddr, toAddr,\r\n> downloadUrl, text, headerSubject}}}\r\n>\r\n> - fetch emails from specific id:\r\n> query: query { session(id: "U2Vzc2lvbjo4VUdAU85KcokNcoFpl409") { mails{\r\n> rawSize, fromAddr, toAddr, downloadUrl, text, headerSubject } } }\r\n>\r\n> {\r\n>   "data": {\r\n>     "sessions": [\r\n>       {\r\n>         "mails": [\r\n>           {\r\n>             "toAddr": "fpkzgcshf@emltmp.com",\r\n>             "text": "TEST 2\\r\\n\\r\\nOn Fri, Feb 17, 2023 at 12:54 PM\r\n> Henrique Krastins Okuti <\\r\\nhenrique.okuti@usp.br> wrote:\\r\\n\\r\\n> id:\r\n> U2Vzc2lvbjo4VUdAU85KcokNcoFpl409\\r\\n>\\r\\n> --\\r\\n> *Henrique Krastins\r\n> Okuti*\\r\\n>\\r\\n\\r\\n\\r\\n-- \\r\\n*Henrique Krastins Okuti*\\r\\n",\r\n>             "rawSize": 3804,\r\n>             "headerSubject": "Re: TEST",\r\n>             "fromAddr": "henrique.okuti@usp.br",\r\n>             "downloadUrl": "\r\n> https://dropmail.me/download/mail/gql:anonym-01234567_test:38554740-53ce-4a72-890d-728169978d3d/20230217bsa7my4m5ytd6hvrb51g18n2m9eh4yxc\r\n> "\r\n>           },\r\n>           {\r\n>             "toAddr": "fpkzgcshf@emltmp.com",\r\n>             "text": "id: U2Vzc2lvbjo4VUdAU85KcokNcoFpl409\\r\\n\\r\\n--\r\n> \\r\\n*Henrique Krastins Okuti*\\r\\n",\r\n>             "rawSize": 2879,\r\n>             "headerSubject": "TEST",\r\n>             "fromAddr": "henrique.okuti@usp.br",\r\n>             "downloadUrl": "\r\n> https://dropmail.me/download/mail/gql:anonym-01234567_test:38554740-53ce-4a72-890d-728169978d3d/20230217ny4j54p2jgrsdh5mjtcp99t23jctmckk\r\n> "\r\n>           }\r\n>         ],\r\n>         "id": "U2Vzc2lvbjo4VUdAU85KcokNcoFpl409",\r\n>         "expiresAt": "2023-02-17T16:06:02+00:00"\r\n>       }\r\n>     ]\r\n>   }\r\n> }\r\n>\r\n> On Fri, Feb 17, 2023 at 12:55 PM Henrique Krastins Okuti <\r\n> henrique.okuti@usp.br> wrote:\r\n>\r\n>> TEST 2\r\n>>\r\n>> On Fri, Feb 17, 2023 at 12:54 PM Henrique Krastins Okuti <\r\n>> henrique.okuti@usp.br> wrote:\r\n>>\r\n>>> id: U2Vzc2lvbjo4VUdAU85KcokNcoFpl409\r\n>>>\r\n>>> --\r\n>>> *Henrique Krastins Okuti*\r\n>>>\r\n>>\r\n>>\r\n>> --\r\n>> *Henrique Krastins Okuti*\r\n>>\r\n>\r\n>\r\n> --\r\n> *Henrique Krastins Okuti*\r\n>\r\n\r\n\r\n-- \r\n*Henrique Krastins Okuti*\r\n',
          rawSize: 17572,
          headerSubject: 'Re: TEST',
          fromAddr: 'henrique.okuti@usp.br',
          downloadUrl:
            'https://dropmail.me/download/mail/gql:anonym-0123456789abcdefg:3d869497-3383-4884-aa7c-94c34f2e6ec4/20230217htt1ag3pkkm3z31vsm0jredj9qqxn3kd',
        },
      ],
    },
  },
};

//- create email:
//query: mutation {introduceSession {id, expiresAt, addresses {address}}}

//- fetch everything:
//query: query {sessions {id, expiresAt, mails {rawSize, fromAddr, toAddr, downloadUrl, text, headerSubject}}}

//- fetch emails from specific id:
//query: query { session(id: "U2Vzc2lvbjo4VUdAU85KcokNcoFpl409") { mails{ rawSize, fromAddr, toAddr, downloadUrl, text, headerSubject } } }
