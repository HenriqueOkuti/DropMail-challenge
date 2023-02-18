import styled from 'styled-components';

export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  border-bottom: 1px solid #dfdfdf;

  max-height: 30%;
  min-height: 200px;

  min-width: 100%;

  //padding-bottom: 45px;
`;

export const AuxDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 75%;
`;

export const TempText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  color: #aeb0b4;

  margin-top: 25px;
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;

  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
`;

export const EmailField = styled.div`
  display: flex;
  align-items: center;

  width: 80%;
  height: 100%;
  padding: 0 0 0 15px;

  line-break: anywhere;

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  color: #4c4c4c;

  overflow-y: scroll;
`;

export const InputDivButtom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20%;
  height: 100%;

  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 0px 5px 5px 0px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;

  position: relative;

  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  color: #979797;

  :after {
    content: '';
    background: #dfdfdf;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  :active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;

export const IconDiv = styled.div`
  font-size: 20px;
`;

export const RefreshContainer = styled.div`
  display: flex;
  align-items: center;

  width: 360px;
  height: 45px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #2c2c2c;

  margin-top: 25px;
`;

export const AutoRefreshDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 50%;
  height: 100%;

  > p,
  div {
    display: flex;
    align-items: center;
    line-height: inherit;
  }

  p {
    margin-right: 5px;
  }

  margin-right: 5px;
`;

export const ManualRefreshDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 50%;
  height: 100%;

  p,
  div {
    display: flex;
    align-items: center;

    margin-left: 5px;
  }

  position: relative;

  -webkit-transition-duration: 0.2s; /* Safari */
  transition-duration: 0.2s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  :after {
    content: '';
    background: #dfdfdf;
    display: block;
    position: absolute;
    padding-top: 1000%;
    padding-left: 400%;
    margin-left: -35px !important;
    margin-top: -100%;
    opacity: 0;
    transition: all 0.8s;
  }

  :active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;

//
