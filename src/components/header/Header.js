import { useState } from 'react';
import {
  HeaderDiv,
  HeaderTitle,
  ModalButtons,
  ModalTitle,
  NotificationsButtom,
} from './HeaderStyles';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Header() {
  const [notifications, setNotifications] = useState({
    picked:
      Notification.permission === 'granted' ||
      Notification.permission === 'denied'
        ? true
        : false,
    status:
      Notification.permission === 'granted'
        ? 'granted'
        : Notification.permission === 'denied'
        ? 'denied'
        : 'default',
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const notificationsDict = {
    default: 'Off',
    denied: 'Off',
    granted: 'On',
  };

  return (
    <>
      <HeaderDiv>
        <div>DropMail</div>
        <NotificationsButtom>
          <div onClick={notifications.picked ? handleClose : handleOpen}>
            Notifications: {notificationsDict[notifications.status]}
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <ModalTitle>Turn on notifications?</ModalTitle>
                <ModalButtons>
                  <Button
                    style={{
                      backgroundColor: '#d53654',
                      border: '1px solid #dfdfdf',
                      color: '#000000',
                    }}
                    variant="outlined"
                    onClick={handleClose}
                  >
                    No
                  </Button>
                  <Button
                    style={{
                      backgroundColor: '#36d554',
                      border: '1px solid #dfdfdf',
                      color: '#000000',
                    }}
                    variant="outlined"
                    onClick={() => {
                      askPermission(
                        notifications,
                        setNotifications,
                        handleClose
                      );
                    }}
                  >
                    Yes
                  </Button>
                </ModalButtons>
              </Box>
            </Fade>
          </Modal>
        </NotificationsButtom>
      </HeaderDiv>
    </>
  );
}

async function askPermission(notifications, setNotifications, handleClose) {
  await Notification.requestPermission().then((res) => {
    console.log(res);

    setNotifications({
      picked: true,
      status: res,
    });

    handleClose();
  });
}
