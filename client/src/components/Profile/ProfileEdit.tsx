import * as React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  DialogActions,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import styles from './Profile.module.css';

interface Props {
  open: boolean;
  handleClose: () => void;
}

const ProfileEdit = ({ open, handleClose }: Props): JSX.Element => {
  return (
    <StyledEngineProvider injectFirst>
      <Dialog
        open={open}
        onClose={handleClose}
        keepMounted
        aria-describedby="edit profile"
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle className={styles.title}>{'Edit Profile'}</DialogTitle>
        <Divider className={styles.divider} />
        <DialogContent className={styles.content}>
          <TextField
            id="name"
            label="username"
            variant="outlined"
            className={styles.name}
            fullWidth
          />
          <Button variant="contained">
            Select Profile Picture
            <input type="file" hidden />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleClose}>save</Button>
        </DialogActions>
      </Dialog>
      ;
    </StyledEngineProvider>
  );
};

export default ProfileEdit;
