import cx from 'classnames';

import { PlayerComponent } from 'components';
import { useFetchAllSongs } from 'hooks';
import { INIT_DATA } from 'utils/constants';

export const Main = () => {
  const songList = useFetchAllSongs();

  return (
    <main className={cx('innerContainer')}>
      <PlayerComponent song={songList[songList.length - 1] ?? INIT_DATA} />
    </main>
  );
};
