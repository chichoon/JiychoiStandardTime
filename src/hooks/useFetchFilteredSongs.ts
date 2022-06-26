import { getSelectedTags } from 'states/selectedTagInfo';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { getSongsListFiltered } from 'services';

const useFetchFilteredSongs = () => {
  const selectedTags = useSelector(getSelectedTags);
  const { data } = useQuery(['filteredSong', ...selectedTags], () => getSongsListFiltered(selectedTags), {
    refetchOnWindowFocus: false,
    useErrorBoundary: true,
    suspense: true,
  });

  return data;
};

export default useFetchFilteredSongs;
