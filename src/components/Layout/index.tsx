import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback, LoadingFallback } from 'components';
import { NavSection } from './NavSection';
import { FloatingButton } from './FloatingButton';

import styles from './layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.layoutBackground}>
      <div className={styles.layoutWrapper}>
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
