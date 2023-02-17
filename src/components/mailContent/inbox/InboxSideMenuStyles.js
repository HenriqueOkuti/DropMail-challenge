import styled from 'styled-components';

export const SideMenuContainer = styled.div`
  background-color: #ffffff;

  min-height: 100%;
  min-width: 20%;
  width: 33%;
  min-width: 250px;

  border-right: 1px solid #dfdfdf;
`;

export const SideMenuHeader = styled.div`
  display: flex;
  align-items: center;

  height: 45px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #000000;

  border-bottom: 1px solid #dfdfdf;
  border-radius: 0px;

  p {
    margin-left: 15px;
  }
`;

export const EmailsContainer = styled.div`
  overflow-y: scroll;
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;

  margin-top: 5px;

  border-bottom: 1px solid #dfdfdf;

  > div {
    display: flex;
    align-items: center;
    margin: 0 0 5px 15px;
  }
`;

export const EmailSender = styled.div`
  color: #000000;
`;

export const EmailTitle = styled.div`
  color: #0c81db;
`;

export const EmailSimplifiedText = styled.div`
  color: #b2adab;
`;
