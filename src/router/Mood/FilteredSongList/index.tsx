import { useFetchFilteredSongs } from 'hooks';
import FilteredSongElement from './FilteredSongElement';

import styles from './filteredSongList.module.scss';

const FilteredSongList = () => {
  const songList = useFetchFilteredSongs();
  return (
    <ul className={styles.filteredSongListWrapper}>
      {songList?.map((song) => (
        <FilteredSongElement key={`filtered-${song.index}`} song={song} />
      ))}
    </ul>
  );
};

export default FilteredSongList;
