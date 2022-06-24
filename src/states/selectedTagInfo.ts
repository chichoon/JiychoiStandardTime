import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'states';
import { TagType, ITagInfo } from 'types/tags';

const INIT_TAGINFO: ITagInfo = {
  selectableTags: [
    'excited',
    'loud',
    'peaceful',
    'coding',
    'fast',
    'slow',
    'woman',
    'man',
    'both',
    'full',
    'live',
    'band',
    'orchestra',
    'guitar',
    'piano',
    'bass',
    'inst',
  ],
  selectedTags: [],
};

const selectedTagInfoSlice = createSlice({
  name: 'selectedTagInfo',
  initialState: INIT_TAGINFO,
  reducers: {
    selectTag: (state: ITagInfo, action: PayloadAction<TagType>) => {
      state.selectableTags = state.selectableTags.filter((tag) => tag !== action.payload);
      state.selectedTags.push(action.payload);
    },
    deselectTag: (state: ITagInfo, action: PayloadAction<TagType>) => {
      state.selectableTags.push(action.payload);
      state.selectedTags = state.selectedTags.filter((tag) => tag !== action.payload);
    },
    resetTagList: () => INIT_TAGINFO,
  },
});

export const { selectTag, deselectTag, resetTagList } = selectedTagInfoSlice.actions;

export default selectedTagInfoSlice.reducer;

export const getSelectableTags = (state: RootState): TagType[] => state.selectedTagInfo.selectableTags;

export const getSelectedTags = (state: RootState): TagType[] => state.selectedTagInfo.selectedTags;
