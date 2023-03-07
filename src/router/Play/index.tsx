import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';
import cx from 'classnames';

import { Error, Loading, PlayerComponent } from 'components';
import { INIT_DATA } from 'utils/constants';
import { useFetchAllSongs } from 'hooks';

interface Props {
  index: number;
}

const PlayInner = ({ index }: Props) => {
  const songList = useFetchAllSongs();
  return <PlayerComponent song={songList[index] ?? INIT_DATA} />;
};

const Play = () => {
  const { index } = useParams();
  function handleErrorFallback() {
    return <Error message='노래를 불러올 수 없어요' />;
  }

  return (
    <main className={cx('innerContainer')}>
      <ErrorBoundary FallbackComponent={handleErrorFallback}>
        <Suspense fallback={<Loading />}>
          <PlayInner index={Number(index)} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};

export default Play;
