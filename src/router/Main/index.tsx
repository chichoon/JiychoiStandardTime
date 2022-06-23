import cx from 'classnames';

import { PlayerComponent } from 'components';
import { useFetchLatestSong } from 'hooks';

const Main = () => {
  const todaySong = useFetchLatestSong();
  return (
    <div className={cx('innerContainer')}>
      <PlayerComponent song={todaySong} loop />
    </div>
  );
};

export default Main;
