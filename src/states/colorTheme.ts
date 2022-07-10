import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from 'store';

import { RootState } from 'states';
import { IColorTheme, ColorThemeType } from 'types/colorTheme';

const INIT_THEME: IColorTheme = {
  color: 'theme-sunrise',
};

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState: INIT_THEME,
  reducers: {
    setTheme: (state: IColorTheme, action: PayloadAction<ColorThemeType>) => {
      state.color = action.payload;
      document.documentElement.setAttribute('color-theme', action.payload);
      store.set('colorTheme', action.payload);
    },
    toggleTheme: (state: IColorTheme) => {
      let newColorTheme: ColorThemeType;
      switch (state.color) {
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
      state.color = newColorTheme;
      document.documentElement.setAttribute('color-theme', newColorTheme);
      store.set('colorTheme', newColorTheme);
    },
  },
});

export const { setTheme, toggleTheme } = colorThemeSlice.actions;

export default colorThemeSlice.reducer;

export const getColorTheme = (state: RootState): IColorTheme => state.colorTheme;
