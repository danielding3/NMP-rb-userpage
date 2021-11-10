import styles from './Navbar.module.css';
import logo from 'assets/logo.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

// this is how u can use a image
// add image to assets folder
// import the image from it, name of image is up to u (example in line 2)
// then use it in src attribute like line 14

const Navbar = (): JSX.Element => {
  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.root}>
        <img src={logo} />
        <img src="images/menu.png" />
        <NotificationsNoneIcon className={styles.bellIcon} />
      </div>
    </StyledEngineProvider>
  );
};

export default Navbar;
