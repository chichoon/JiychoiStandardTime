import { ISong } from 'types/musics';
import axios from 'axios';

const INIT_DATA: ISong = {
  index: 0,
  title: '',
  artist: '',
  comment: '',
  id: '',
  date: '',
  tagList: [],
};

const getLatestSong = () =>
  axios.get('jst-songlist.json').then((response) => {
    return response.data.songs[0] ?? INIT_DATA;
  });

export default getLatestSong;
