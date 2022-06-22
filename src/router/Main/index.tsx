import cx from 'classnames';

import { YoutubePlayer } from 'components';
import styles from './main.module.scss';

const TEST_SONG = {
  index: 0,
  title: '맞은편 미래',
  artist: 'achime',
  comment: '좋은achime입니다 🌄',
  id: '3oBPGdOwbbc',
  date: '2021-08-29 07:10',
  tag: ['excited'],
};

const Main = () => {
  return (
    <div className={cx(styles.mainWrapper, 'innerContainer')}>
      <YoutubePlayer id={TEST_SONG.id} loop />
      이곳에선 가장 최근에 올라온 노래를 들려줘요.
    </div>
  );
};

export default Main;
