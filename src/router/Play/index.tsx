import { useParams } from 'react-router-dom';
import cx from 'classnames';

import { PlayerComponent } from 'components';
import { INIT_DATA } from 'utils/constants';
import { useFetchAllSongs } from 'hooks';

export const Play = () => {
  const { index = '0' } = useParams();
  const songList = useFetchAllSongs();

  return (
    <main className={cx('innerContainer')}>
      <PlayerComponent song={songList[Number(index)] ?? INIT_DATA} />
    </main>
  );
};

export default Play;
