import { PlayerComponent } from 'components';
import { useFetchSongByIndex } from 'hooks';

interface IProps {
  index: number;
}

const PlayInner = ({ index }: IProps) => {
  const indexSong = useFetchSongByIndex(index);
  return <PlayerComponent song={indexSong} loop />;
};

export default PlayInner;
