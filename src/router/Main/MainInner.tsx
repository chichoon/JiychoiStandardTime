import { PlayerComponent } from 'components';
import { useFetchLatestSong } from 'hooks';

const MainInner = () => {
  const todaySong = useFetchLatestSong();
  return <PlayerComponent song={todaySong} loop />;
};

export default MainInner;
