import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHoverDirty, useUnmount } from 'react-use';
import ReactPlayer from 'react-player/lazy';
import dayjs from 'dayjs';
import cx from 'classnames';

import Tooltip from 'components/Tooltip';
import { setOnPause, setOnPlay } from 'states/isPlaying';
import { SongType } from 'types/musics';
import TagBox from './TagBox';

import styles from './playerComponent.module.scss';

interface Props {
  song: SongType;
}

export const PlayerComponent = ({ song }: Props) => {
  const titleRef = useRef(null);
  const isHovering = useHoverDirty(titleRef);
  const dispatch = useDispatch();

  function handlePlaySong() {
    dispatch(setOnPlay());
  }

  function handlePauseSong() {
    dispatch(setOnPause());
  }

  useUnmount(() => {
    dispatch(setOnPause());
  });

  return (
    <div className={styles.playerComponentWrapper}>
      <ReactPlayer
        key={`player-${song.id}`}
        url={`https://www.youtube.com/watch?v=${song.id}`}
        width='100%'
        height='40%'
        onPlay={handlePlaySong}
        onPause={handlePauseSong}
        onEnded={handlePauseSong}
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
