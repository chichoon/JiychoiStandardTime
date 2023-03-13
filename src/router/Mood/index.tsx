import cx from 'classnames';

import FilteredSongList from './FilteredSongList';
import TagSelector from './TagSelector';

export const Mood = () => {
  return (
    <main className={cx('innerContainer')}>
      <TagSelector />
      <FilteredSongList />
    </main>
  );
};
