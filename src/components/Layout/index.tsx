import { Suspense, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHoverDirty } from 'react-use';
import { Outlet, useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback, LoadingFallback } from 'components';
import { useFetchAllSongs } from 'hooks';
import { getIsPlaying } from 'states/isPlaying';
import { NavSection } from './NavSection';
import { FloatingButton } from './FloatingButton';

import styles from './layout.module.scss';

export const Layout = () => {
  const imageRef = useRef(null);
  const isPlaying = useSelector(getIsPlaying);
  const isHovering = useHoverDirty(imageRef);
  const navigate = useNavigate();
  const songList = useFetchAllSongs();

  function playerImage() {
    if (isHovering) return '/images/question-image.png';
    if (isPlaying) return '/images/playing-image.gif';
    return '/images/main-image.gif';
  }

  function handleRandomButtonClick() {
    const randomValue = Math.floor(Math.random() * (songList.length ?? 0));
    navigate(`/play/${randomValue}`);
  }

  return (
    <div className={styles.layoutBackground}>
      <div className={styles.layoutWrapper}>
        <button type='button' onClick={handleRandomButtonClick}>
          <img ref={imageRef} src={playerImage()} alt='main-profile' />
        </button>
        <div className={styles.layoutContainer}>
          <header>
            <h1 className={styles.layoutTitle}>#지최표준시</h1>
            <h2 className={styles.layoutSubTitle}>jiychoi standard time</h2>
            <NavSection />
          </header>
          <Suspense fallback={<LoadingFallback />}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Outlet />
            </ErrorBoundary>
          </Suspense>
        </div>
      </div>
      <FloatingButton />
    </div>
  );
};
