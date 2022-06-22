import ReactPlayer from 'react-player/lazy';
import dayjs from 'dayjs';

import { ISong } from 'types/musics';

import styles from './playerComponent.module.scss';

interface IProps {
  song: ISong;
  onEnded?: () => void;
  loop: boolean;
}

const PlayerComponent = ({ song, onEnded, loop }: IProps) => {
  return (
    <div className={styles.playerComponentWrapper}>
      <h3 className={styles.playerComponentDate}>{`#${song.index} ${dayjs(song.date).format('YYYY년 MM월 DD일')}`}</h3>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${song.id}`}
        loop={loop}
        onEnded={onEnded}
        width='100%'
        height='50%'
      />
    </div>
  );
};

export default PlayerComponent;
