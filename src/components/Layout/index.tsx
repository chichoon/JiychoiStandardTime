import { useRef } from 'react';
import { useHoverDirty } from 'react-use';
import { Outlet } from 'react-router-dom';

import NavSection from './NavSection';
import HoverButton from './HoverButton';

import styles from './layout.module.scss';

const Layout = () => {
  const imageRef = useRef(null);
  const isHovering = useHoverDirty(imageRef);

  return (
    <div className={styles.layoutBackground}>
      <HoverButton />
      <div className={styles.layoutWrapper}>
        <img ref={imageRef} src={isHovering ? '/question-image.png' : '/main-image.gif'} alt='main-profile' />
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
