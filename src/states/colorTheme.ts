import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from 'store';

import { RootState } from 'states';
import { IColorTheme } from 'types/colorTheme';

const INIT_THEME: IColorTheme = {
  color: 'theme-sunrise',
};

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState: INIT_THEME,
  reducers: {
    setTheme: (state: IColorTheme, action: PayloadAction<string>) => {
      state.color = action.payload;
      document.documentElement.setAttribute('color-theme', action.payload);
      store.set('colorTheme', action.payload);
    },
    toggleTheme: (state: IColorTheme) => {
      const newColorTheme = state.color === 'theme-sunrise' ? 'theme-sunset' : 'theme-sunrise';
      state.color = newColorTheme;
      document.documentElement.setAttribute('color-theme', newColorTheme);
      store.set('colorTheme', newColorTheme);
    },
  },
});

export const { setTheme, toggleTheme } = colorThemeSlice.actions;

export default colorThemeSlice.reducer;

export const getColorTheme = (state: RootState): IColorTheme => state.colorTheme;
