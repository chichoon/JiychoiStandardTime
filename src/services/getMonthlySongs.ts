import axios from 'axios';
import { SongType } from 'types/musics';

export function getMonthlySongs(year: string, month: string): () => Promise<SongType[]> {
  return async function () {
    const { data } = await axios.get(`/songlist/jst-songlist-${year}${month}`);
    return data;
  };
}
