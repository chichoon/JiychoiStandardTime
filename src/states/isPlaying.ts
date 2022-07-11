import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'states';

const isPlayingSlice = createSlice({
  name: 'isPlaying',
  initialState: false,
  reducers: {
    setOnPlay: (_) => true,
    setOnPause: (_) => false,
  },
});

export const { setOnPlay, setOnPause } = isPlayingSlice.actions;

export default isPlayingSlice.reducer;

export const getIsPlaying = (state: RootState): boolean => state.isPlaying;
