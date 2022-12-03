import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHoverDirty } from 'react-use';
import { Outlet, useNavigate } from 'react-router-dom';

import { useFetchLatestSong } from 'hooks';
import { getIsPlaying } from 'states/isPlaying';
import NavSection from './NavSection';
import HoverButton from './HoverButton';

import styles from './layout.module.scss';

const Layout = () => {
  const imageRef = useRef(null);
  const isPlaying = useSelector(getIsPlaying);
  const isHovering = useHoverDirty(imageRef);
  const navigate = useNavigate();
  const lastSong = useFetchLatestSong();

  const playerImage = () => {
    if (isHovering) return '/images/question-image.png';
    if (isPlaying) return '/images/playing-image.gif';
    return '/images/main-image.gif';
  };

  const getRandomSong = () => {
    return Math.floor(Math.random() * (lastSong.index + 1));
  };

  const handleRandomButtonClick = () => {
    navigate(`/play/${getRandomSong()}`);
  };

  return (
    <div className={styles.layoutBackground}>
      <HoverButton />
      <div className={styles.layoutWrapper}>
        <button type='button' onClick={handleRandomButtonClick}>
          <img ref={imageRef} src={playerImage()} alt='main-profile' />
        </button>
        <div className={styles.layoutContainer}>
          <header>
            <h1 className={styles.layoutTitle}>#지최표준시</h1>
            <p className={styles.layoutSubTitle}>jiychoi standard time</p>
            <NavSection />
          </header>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
