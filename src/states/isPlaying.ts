import { IIsPlaying } from '../types/isPlaying.d';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'states';

const INIT_PLAYING: IIsPlaying = {
  isPlaying: false,
};

const isPlayingSlice = createSlice({
  name: 'isPlaying',
  initialState: INIT_PLAYING,
  reducers: {
    setOnPlay: (state: IIsPlaying) => {
      state.isPlaying = true;
    },
    setOnPause: (state: IIsPlaying) => {
      state.isPlaying = false;
    },
  },
});

export const { setOnPlay, setOnPause } = isPlayingSlice.actions;

export default isPlayingSlice.reducer;

export const getIsPlaying = (state: RootState): IIsPlaying => state.isPlaying;
