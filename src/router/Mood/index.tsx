import { Suspense } from 'react';

import { Error, Loading } from 'components';
import FilteredSongList from './FilteredSongList';
import TagSelector from './TagSelector';

import styles from './mood.module.scss';
import { ErrorBoundary } from 'react-error-boundary';

const Mood = () => {
  const handleErrorFallback = () => <Error message='리스트를 불러올 수 없어요' />;
  return (
    <div className={styles.moodWrapper}>
      <TagSelector />
      <ErrorBoundary FallbackComponent={handleErrorFallback}>
        <Suspense fallback={<Loading />}>
          <FilteredSongList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Mood;
