import React from 'react';
import styles from './Profile.module.css';
import pic from 'assets/profile.png';
import Button from '@mui/material/Button';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import ProfileEdit from './ProfileEdit';

const Profile = (): JSX.Element => {
  const [isEditProfile, setIsEditProfile] = React.useState(false);

  const handleOpen = (): void => {
    setIsEditProfile(true);
  };

  const handleClose = (): void => {
    setIsEditProfile(false);
  };

  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.root}>
        <div className={styles.picContainer}>
          <img src={pic} alt="profile picture" className={styles.pic} />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.username}>Jane Doe</div>
          <div className={styles.updateProfile}>
            <Button
              variant="text"
              className={styles.settingBtn}
              onClick={handleOpen}
            >
              Profile Settings
            </Button>
            <ProfileEdit open={isEditProfile} handleClose={handleClose} />
          </div>
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default Profile;
