import styled from 'styled-components';

export const AllContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 90vh;
  min-height: 650px;
  //width: 99vw;

  border: 1px solid #dfdfdf;
  border-radius: 5px;

  margin: 0 10px 20px 10px;

  * {
    font-family: Arial;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 32px;

  height: 100vh;
  width: 100vw;

  div {
    margin-bottom: 50px;
  }
`;
