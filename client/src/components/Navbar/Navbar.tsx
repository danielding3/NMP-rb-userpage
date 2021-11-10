import styles from './Navbar.module.css';
import logo from 'assets/logo.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

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
