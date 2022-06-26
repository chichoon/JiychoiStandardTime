import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';
import cx from 'classnames';

import { useFetchSongByIndex } from 'hooks';
import { Error, Loading, PlayerComponent } from 'components';

interface IProps {
  index: number;
}

const PlayInner = ({ index }: IProps) => {
  const indexSong = useFetchSongByIndex(index);
  return <PlayerComponent song={indexSong} loop />;
};

const Play = () => {
  const { index } = useParams();
  const handleErrorFallback = () => <Error message='노래를 불러올 수 없어요' />;
  return (
    <div className={cx('innerContainer')}>
      <ErrorBoundary FallbackComponent={handleErrorFallback}>
        <Suspense fallback={<Loading />}>
          <PlayInner index={Number(index)} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Play;
