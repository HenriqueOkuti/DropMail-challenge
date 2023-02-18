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
import { useEffect, useState } from 'react';
import { createSession } from '../../services/useDropMail';

export default function Info() {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    if (timer <= 0) {
      //createSession();
      setTimer(15);
    } else {
      const interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 500);

      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <InfoDiv>
      <AuxDiv>
        <TempText>Your temporary email address</TempText>
        <InputDiv>
          <EmailField>{mockedData.email}</EmailField>
          <InputDivButtom>
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
        <ManualRefreshDiv>
          <IconDiv>
            <HiOutlineRefresh />
          </IconDiv>
          <p>Refresh</p>
        </ManualRefreshDiv>
      </RefreshContainer>
    </InfoDiv>
  );
}

const mockedData = {
  email: 'email@mail.com',
};
