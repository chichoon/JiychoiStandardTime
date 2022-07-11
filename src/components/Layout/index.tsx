import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHoverDirty } from 'react-use';
import { Outlet } from 'react-router-dom';

import { getIsPlaying } from 'states/isPlaying';
import NavSection from './NavSection';
import HoverButton from './HoverButton';

import styles from './layout.module.scss';

const Layout = () => {
  const imageRef = useRef(null);
  const isPlaying = useSelector(getIsPlaying);
  const isHovering = useHoverDirty(imageRef);

  const playerImage = () => {
    if (isHovering) return 'images/question-image.png';
    if (isPlaying) return 'images/playing-image.gif';
    return 'images/main-image.gif';
  };

  return (
    <div className={styles.layoutBackground}>
      <HoverButton />
      <div className={styles.layoutWrapper}>
        <img ref={imageRef} src={playerImage()} alt='main-profile' />
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
