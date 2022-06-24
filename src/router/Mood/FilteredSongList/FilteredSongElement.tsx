import cx from 'classnames';

import { ISong } from 'types/musics';
import styles from './filteredSongList.module.scss';

interface IProps {
  song: ISong;
}

const FilteredSongElement = ({ song }: IProps) => {
  return (
    <li className={styles.filteredSongElement}>
      <dl className={cx('currentSongInfo')}>
        <dt>{song.title}</dt>
        <dd>{song.artist}</dd>
      </dl>
    </li>
  );
};

export default FilteredSongElement;
