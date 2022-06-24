import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'states';

const selectedTagsSlice = createSlice({
  name: 'selectedTags',
  initialState: [] as string[],
  reducers: {
    addTags: (state: string[], action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    deleteTags: (state: string[], action: PayloadAction<string>) => state.filter((tag) => tag !== action.payload),
    resetTags: () => [],
  },
});

export const { addTags, deleteTags, resetTags } = selectedTagsSlice.actions;

export default selectedTagsSlice.reducer;

export const getSelectedTags = (state: RootState): string[] => state.selectedTags;
