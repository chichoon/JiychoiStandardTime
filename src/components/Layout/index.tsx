import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHoverDirty } from 'react-use';
import { Outlet } from 'react-router-dom';

import { toggleTheme } from 'states/colorTheme';
import NavSection from './NavSection';

import { MoonIcon, SunIcon } from 'assets/svgs';
import styles from './layout.module.scss';

const Layout = () => {
  const imageRef = useRef(null);
  const isHovering = useHoverDirty(imageRef);
  const dispatch = useDispatch();

  const handleThemeButtonClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={styles.layoutBackground}>
      <button type='button' className={styles.hoverButton} onClick={handleThemeButtonClick}>
        <div className={styles.buttonSun}>
          <SunIcon />
        </div>
        <div className={styles.buttonMoon}>
          <MoonIcon />
        </div>
      </button>
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
