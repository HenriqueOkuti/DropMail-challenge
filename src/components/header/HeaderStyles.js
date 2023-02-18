import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    width: 185px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Port Lligat Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;

    margin: 10px;

    background: #b6b6b6;

    border-radius: 5px;
  }
`;

export const NotificationsButtom = styled.div`
  font-family: Arial !important;
`;

export const ModalTitle = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  font-family: Arial !important;
`;

export const ModalButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  font-family: Arial !important;
  color: #000000 !important;
`;
