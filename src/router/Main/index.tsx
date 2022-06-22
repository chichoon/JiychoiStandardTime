import cx from 'classnames';

import { PlayerComponent } from 'components';
import styles from './main.module.scss';

const TEST_SONG = {
  index: 0,
  title: '맞은편 미래',
  artist: 'achime',
  comment: '좋은achime입니다 🌄',
  id: '3oBPGdOwbbc',
  date: '2021-08-29 07:10',
  tagList: ['excited', 'sad'],
};

const Main = () => {
  return (
    <div className={cx('innerContainer')}>
      <PlayerComponent song={TEST_SONG} loop />
    </div>
  );
};

export default Main;
