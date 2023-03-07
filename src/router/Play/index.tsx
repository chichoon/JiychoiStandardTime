import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';
import cx from 'classnames';

import { Error, Loading, PlayerComponent } from 'components';
import { INIT_DATA } from 'utils/constants';

interface Props {
  index: number;
}

const PlayInner = ({ index }: Props) => {
  const indexSong = INIT_DATA; // TODO: 수정
  return <PlayerComponent song={indexSong} />;
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
