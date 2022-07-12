import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import cx from 'classnames';

import { Error, Loading } from 'components';
import FilteredSongList from './FilteredSongList';
import TagSelector from './TagSelector';

const Mood = () => {
  const handleErrorFallback = () => <Error message='리스트를 불러올 수 없어요' />;
  return (
    <main className={cx('innerContainer')}>
      <TagSelector />
      <ErrorBoundary FallbackComponent={handleErrorFallback}>
        <Suspense fallback={<Loading />}>
          <FilteredSongList />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};

export default Mood;
