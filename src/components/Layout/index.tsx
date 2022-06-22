import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';
import NavSection from './NavSection';

const Layout = () => {
  return (
    <div className={styles.layoutBackground}>
      <div className={styles.layoutWrapper}>
        <img src='/main-image.gif' alt='main-profile' />
        <div className={styles.layoutContainer}>
          <h1 className={styles.layoutHeader}>#지최표준시</h1>{' '}
          <h3 className={styles.layoutSubHeader}>jiychoi standard time</h3>
          <NavSection />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
