import styles from './Navbar.module.css';
import logo from 'assets/logo.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

// this is how u can use a image
// add image to assets folder
// import the image from it, name of image is up to u (example in line 2)
// then use it in src attribute like line 14

const Navbar = (): JSX.Element => {
  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.root}>
      <MenuIcon className={styles.menuIcon} />
        <img src={logo} />
        <div className={styles.searchBar}>
          <p>
            Search
          </p>
        </div>
        <div className={styles.icons}>
          <NotificationsNoneIcon className={styles.bellIcon} />
          <DirectionsCarFilledOutlinedIcon className={styles.carIcon} />
          <PersonOutlineOutlinedIcon className={styles.personIcon} />
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default Navbar;
