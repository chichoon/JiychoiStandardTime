import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layoutBackground}>
      <div className={styles.layoutWrapper}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
