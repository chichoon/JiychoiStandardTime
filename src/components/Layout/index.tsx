import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';
import NavSection from './NavSection';

const Layout = () => {
  return (
    <div className={styles.layoutBackground}>
      <div className={styles.layoutWrapper}>
        <img src='/main-image.gif' alt='main-profile' />
        <div className={styles.layoutContainer}>
          <h1 className={styles.layoutHeader}>#지최표준시</h1>
          <p className={styles.layoutSubHeader}>jiychoi standard time</p>
          <NavSection />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
