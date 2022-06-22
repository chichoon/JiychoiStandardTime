import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';
import NavSection from './NavSection';

const Layout = () => {
  return (
    <div className={styles.layoutBackground}>
      <div className={styles.layoutWrapper}>
        <img src='/main-image.gif' alt='main-profile' />
        <div className={styles.layoutContainer}>
          <h3 className={styles.layoutHeader}>Jiychoi Standard Time</h3>
          <NavSection />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
