import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';
import cx from 'classnames';

import { Error, Loading, PlayerComponent } from 'components';
import { useFetchSongByIndex } from 'hooks';

interface IProps {
  index: number;
}

const PlayInner = ({ index }: IProps) => {
  const indexSong = useFetchSongByIndex(index);
  return <PlayerComponent song={indexSong} />;
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
