import ReactPlayer from 'react-player/lazy';
import dayjs from 'dayjs';

import { ISong } from 'types/musics';

import styles from './playerComponent.module.scss';
import TagBox from './TagBox';

interface IProps {
  song: ISong;
  onEnded?: () => void;
  loop: boolean;
}

const PlayerComponent = ({ song, onEnded, loop }: IProps) => {
  return (
    <div className={styles.playerComponentWrapper}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${song.id}`}
        loop={loop}
        onEnded={onEnded}
        width='100%'
        height='50%'
      />
      <div className={styles.playerInformation}>
        <p className={styles.playerDate}>{`#${song.index} ${dayjs(song.date).format('YYYY년 MM월 DD일')}`}</p>
        <dl className={styles.playerSongInfo}>
          <dt>{song.title}</dt>
          <dd>{song.artist}</dd>
        </dl>
        <p className={styles.playerComment}>{song.comment}</p>
        <TagBox tagList={song.tagList} />
      </div>
    </div>
  );
};

export default PlayerComponent;
