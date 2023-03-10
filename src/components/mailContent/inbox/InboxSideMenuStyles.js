import styled from 'styled-components';

export const SideMenuContainer = styled.div`
  background-color: #ffffff;

  min-height: 100%;

  width: 33%;
  min-width: 250px;

  border-right: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;

  border-radius: 0 0 0 5px;
`;

export const SideMenuHeader = styled.div`
  display: flex;
  align-items: center;

  height: 45px;

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
  max-height: calc(100% - 45px);
  overflow-y: scroll;
  border-bottom: 1px solid #dfdfdf;
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;

  padding-top: 5px;

  background-color: ${(props) => (props.colors ? '#f7f7f7' : '#ffffff')};

  border-bottom: 1px solid #dfdfdf;

  > div {
    display: flex;
    align-items: center;
    margin: 0 0 5px 15px;
  }

  position: relative;

  -webkit-transition-duration: 0.6s; /* Safari */
  transition-duration: 0.6s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  :after {
    content: '';
    background: #dfdfdf;
    display: block;
    position: absolute;
    padding-top: 200%;
    padding-left: -200%;
    margin-left: -35px !important;
    margin-top: -100%;
    opacity: 0;
    transition: all 1.2s;
  }

  :active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
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
