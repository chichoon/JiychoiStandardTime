import { SongType } from 'types/musics';
import FilteredSongElement from './FilteredSongElement';

import styles from './filteredSongList.module.scss';

const FilteredSongList = () => {
  const songList: SongType[] = []; // TODO: 수정
  return (
    <ul className={styles.filteredSongListWrapper}>
      {songList.map((song) => (
        <FilteredSongElement key={`filtered-${song.index}`} song={song} />
      ))}
    </ul>
  );
};

export default FilteredSongList;
