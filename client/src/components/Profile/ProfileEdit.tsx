import * as React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  DialogActions,
} from '@mui/material';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import styles from './Profile.module.css';
import Cropper from 'react-easy-crop';
import getCroppedImg from './CropImage';

interface Props {
  open: boolean;
  handleClose: (name: string, pic: string) => void;
}

const ProfileEdit = ({ open, handleClose }: Props): JSX.Element => {
  const [name, setName] = React.useState('');
  const [photo, setPhoto] = React.useState('');
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [croppedImage, setCroppedImage] = React.useState({});
  const [croppedAreaPixels, setCroppedAreaPixels] = React.useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const t = event.target as HTMLInputElement;
    const reader = new FileReader();
    reader.addEventListener('load', () => setPhoto(reader.result as string));
    if (t.files) {
      reader.readAsDataURL(t.files[0]);
    }
  };

  const handleClick = (): void => {
    document.getElementById('getFile')?.click();
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const onCropComplete = React.useCallback((croppedArea, areaPixels) => {
    setCroppedAreaPixels(areaPixels);
  }, []);

  const getCroppedImage = React.useCallback(async () => {
    try {
      const imgSelected = await getCroppedImg(photo, croppedAreaPixels, 0);
      console.log('donee', { croppedImage });
      setCroppedImage(imgSelected);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  const updateProfile = (): void => {
    getCroppedImage();
    handleClose(name, photo);
    setName('');
    setPhoto('');
  };

  const handleCancel = (): void => {
    if (name || photo) {
      alert('Your changes has not been saved.');
    } else {
      handleClose(name, photo);
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      <Dialog
        open={open}
        onClose={handleClose}
        keepMounted
        aria-describedby="edit profile"
        fullWidth
        maxWidth="xs"
        className={styles.container}
        PaperProps={{ elevation: 20 }}
      >
        <DialogTitle className={styles.title}>{'Edit Profile'}</DialogTitle>
        <Divider className={styles.divider} />
        <DialogContent className={styles.content}>
          {/* <TextField
            id="name"
            label="username"
            variant="outlined"
            className={styles.name}
            onChange={handleInput}
            onChange={handleInput}
            fullWidth
          /> */}
          <label htmlFor="nameInput" className={styles.label}>
            Username
          </label>
          <input
            type="text"
            className={styles.name}
            onChange={handleInput}
            id="nameInput"
          />
          <Button variant="contained" onClick={handleClick}>
            Select Profile Picture
            <input
              type="file"
              onChange={handleFileUpload}
              className={styles.inputBtn}
              id="getFile"
              hidden
            />
          </Button>
          {photo && (
            <div className={styles.cropContainer}>
              <Cropper
                image={photo}
                crop={crop}
                zoom={zoom}
                showGrid
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                cropShape="round"
              />
            </div>
          )}
        </DialogContent>
        <DialogActions className={styles.action}>
          <Button onClick={handleCancel} className={styles.actionBtn}>
            cancel
          </Button>
          <Button onClick={updateProfile} className={styles.actionBtn}>
            save
          </Button>
        </DialogActions>
      </Dialog>
      ;
    </StyledEngineProvider>
  );
};

export default ProfileEdit;
