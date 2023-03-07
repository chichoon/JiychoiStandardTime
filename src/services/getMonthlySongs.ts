import axios from 'axios';
import { SongType } from 'types/musics';

export function getMonthlySongs(year: string, month: string): () => Promise<SongType[]> {
  return async function () {
    const { data } = await axios.get(`/songList/jst-songList-${year}${month}.json`);
    return data;
  };
}
