import { useRef } from 'react';
import { useHoverDirty } from 'react-use';
import ReactPlayer from 'react-player/lazy';
import dayjs from 'dayjs';
import cx from 'classnames';

import Tooltip from 'components/Tooltip';
import { ISong } from 'types/musics';
import TagBox from './TagBox';

import styles from './playerComponent.module.scss';

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
        <div ref={titleRef} className={cx(styles.playerSongInfo, 'currentSongInfo')}>
          <dt>{song.title}</dt>
          <dd>{song.artist}</dd>
          <Tooltip tooltipString={`${song.title} - ${song.artist} `} position='bottomLeft' isShown={isHovering} />
        </div>
        <p className={styles.playerComment}>{song.comment}</p>
        <TagBox tagList={song.tagList} />
        {song.recommended && (
          <div className={styles.recommended}>
            <span className={styles.recommendedName}>{song.recommended}</span>
            <span className={styles.recommendedStr}>님의 추천곡입니다 😉</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerComponent;
