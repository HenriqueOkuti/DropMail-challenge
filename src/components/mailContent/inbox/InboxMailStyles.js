import styled from 'styled-components';

export const InboxMailContainer = styled.div`
  height: 100%;
  width: 100%;

  border-bottom: 1px solid #dfdfdf;
  border-radius: 0 0 5px 0;
`;

export const BlankRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 45px;
  min-width: 100%;
  font-size: 30px;

  border-bottom: 1px solid #dfdfdf;
`;

export const EmailTitle = styled.div`
  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  color: #000000;

  margin: 5px 0 5px 15px;
`;

export const EmailBody = styled.div`
  height: calc(100% - 45px - 24px - 10px - 2px);

  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 5px;

  margin: 0 5px 0 5px;

  overflow-y: scroll;

  p {
    white-space: break-spaces;
    margin: 10px;
  }
`;
