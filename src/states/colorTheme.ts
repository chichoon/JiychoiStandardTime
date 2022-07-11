import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from 'store';

import { RootState } from 'states';

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState: 'theme-sunrise',
  reducers: {
    setTheme: (_, action: PayloadAction<string>) => {
      const newColorTheme = action.payload;
      document.documentElement.setAttribute('color-theme', newColorTheme);
      store.set('colorTheme', newColorTheme);
      return newColorTheme;
    },
    toggleTheme: (state: string) => {
      let newColorTheme: string;
      switch (state) {
        case 'theme-sunrise':
          newColorTheme = 'theme-daylight';
          break;
        case 'theme-daylight':
          newColorTheme = 'theme-sunset';
          break;
        case 'theme-sunset':
          newColorTheme = 'theme-night';
          break;
        case 'theme-night':
        default:
          newColorTheme = 'theme-sunrise';
          break;
      }
      document.documentElement.setAttribute('color-theme', newColorTheme);
      store.set('colorTheme', newColorTheme);
      return newColorTheme;
    },
  },
});

export const { setTheme, toggleTheme } = colorThemeSlice.actions;

export default colorThemeSlice.reducer;

export const getColorTheme = (state: RootState): string => state.colorTheme as string;
