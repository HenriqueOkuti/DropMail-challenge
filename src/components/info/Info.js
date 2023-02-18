import {
  AutoRefreshDiv,
  AuxDiv,
  EmailField,
  IconDiv,
  InfoDiv,
  InputDiv,
  InputDivButtom,
  ManualRefreshDiv,
  RefreshContainer,
  TempText,
} from './InfoStyles';

import { MdContentCopy } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';

import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../../contexts/sessionContext';
import { refreshMailList } from '../../services/useDropMail';
import { MailContext } from '../../contexts/mailContext';

export default function Info() {
  const [update, setUpdate] = useState(false);
  const [timer, setTimer] = useState(0);
  const sessionInfo = useContext(SessionContext);
  const currentEmail = JSON.parse(sessionInfo.session).address;
  const { setMail } = useContext(MailContext);

  useEffect(() => {
    if (timer <= 0 || update) {
      console.log('sending request');
      refreshMailList(JSON.parse(sessionInfo.session).token, setMail).then(
        () => {
          setTimer(15);
        }
      );

      if (update) {
        setUpdate(!update);
      }
    } else {
      const interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, update]);

  //Change InputDivButtom to MUI equivalent

  return (
    <InfoDiv>
      <AuxDiv>
        <TempText>Your temporary email address</TempText>
        <InputDiv>
          <EmailField>{currentEmail}</EmailField>
          <InputDivButtom onClick={() => copyToClipboard(currentEmail)}>
            <IconDiv>
              <MdContentCopy />
            </IconDiv>
            <div>Copy</div>
          </InputDivButtom>
        </InputDiv>
      </AuxDiv>
      <RefreshContainer>
        <AutoRefreshDiv>
          <p>Autorefresh in</p>
          <IconDiv>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                {...{ value: (timer * 100) / 15 }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                  textAlign={'center'}
                  fontSize={16}
                >
                  {timer}
                </Typography>
              </Box>
            </Box>
          </IconDiv>
        </AutoRefreshDiv>
        <ManualRefreshDiv onClick={() => setUpdate(!update)}>
          <IconDiv>
            <HiOutlineRefresh />
          </IconDiv>
          <p>Refresh</p>
        </ManualRefreshDiv>
      </RefreshContainer>
    </InfoDiv>
  );
}

function copyToClipboard(email) {
  navigator.clipboard.writeText(email);

  //trigger notification HERE
}
