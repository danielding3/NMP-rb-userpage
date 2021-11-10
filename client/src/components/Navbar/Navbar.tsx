import styles from './Navbar.module.css';
import React from 'react';

const Navbar = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div>
        <img src="images/logo.png" />
        <nav>
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">REGION</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
          </ul>
        </nav>
        <img src="images/menu.png" />
      </div>
    </div>
  );
};

export default Navbar;
