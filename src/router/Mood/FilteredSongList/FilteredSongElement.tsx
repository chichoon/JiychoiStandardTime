import cx from 'classnames';
import { Link } from 'react-router-dom';

import { ISong } from 'types/musics';

import styles from './filteredSongList.module.scss';

interface IProps {
  song: ISong;
}

const FilteredSongElement = ({ song }: IProps) => {
  return (
    <li className={styles.filteredSongElement}>
      <Link to={`/play/${song.index}`}>
        <dl className={cx(styles.filteredSongInfo, 'currentSongInfo')}>
          <dt>{song.title}</dt>
          <dd>{song.artist}</dd>
        </dl>
      </Link>
    </li>
  );
};

export default FilteredSongElement;
