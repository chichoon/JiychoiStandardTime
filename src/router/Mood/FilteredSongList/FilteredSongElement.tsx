import { ISong } from 'types/musics';
import styles from './filteredSongList.module.scss';

interface IProps {
  song: ISong;
}

const FilteredSongElement = ({ song }: IProps) => {
  return <li className={styles.filteredSongElement}>{song.title}</li>;
};

export default FilteredSongElement;
