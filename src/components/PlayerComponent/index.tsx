import { useRef } from 'react';
import { useHoverDirty } from 'react-use';
import ReactPlayer from 'react-player/lazy';
import dayjs from 'dayjs';
import cx from 'classnames';

import { ISong } from 'types/musics';

import styles from './playerComponent.module.scss';
import TagBox from './TagBox';

interface IProps {
  song: ISong;
  onEnded?: () => void;
  loop: boolean;
}

const PlayerComponent = ({ song, onEnded, loop }: IProps) => {
  const titleRef = useRef(null);
  const isHovering = useHoverDirty(titleRef);

  return (
    <div className={styles.playerComponentWrapper}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${song.id}`}
        loop={loop}
        onEnded={onEnded}
        width='100%'
        height='40%'
      />
      <div className={styles.playerInformation}>
        <p className={styles.playerDate}>{`#${song.index} ${dayjs(song.date).format('YYYY년 MM월 DD일')}`}</p>
        <dl className={styles.playerSongInfo}>
          <dt ref={titleRef}>{song.title}</dt>
          <dd>{song.artist}</dd>
          <div
            className={cx(styles.tooltip, { [styles.isShown]: isHovering })}
          >{`${song.title} - ${song.artist} `}</div>
        </dl>
        <p className={styles.playerComment}>{song.comment}</p>
        <TagBox tagList={song.tagList} />
      </div>
    </div>
  );
};

export default PlayerComponent;
