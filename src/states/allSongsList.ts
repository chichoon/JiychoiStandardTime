import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'states';
import { ISongsList } from 'types/musics.d';

const allSongsListSlice = createSlice({
  name: 'allSongsList',
  initialState: { songs: [] } as ISongsList,
  reducers: {
    setAllSongsList: (_, action: PayloadAction<ISongsList>) => action.payload,
  },
});

export const { setAllSongsList } = allSongsListSlice.actions;

export default allSongsListSlice.reducer;

export const getAllSongsList = (state: RootState): ISongsList => state.allSongsList;
