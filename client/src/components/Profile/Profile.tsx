import styles from './Profile.module.css';
import pic from 'assets/profile.png';
import Button from '@mui/material/Button';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

const Profile = (): JSX.Element => {
  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.root}>
        <div className={styles.picContainer}>
          <img src={pic} alt="profile picture" className={styles.pic} />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.username}>Jane Doe</div>
          <div className={styles.updateProfile}>
            <Button variant="text" className={styles.settingBtn}>
              Profile Settings
            </Button>
          </div>
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default Profile;
