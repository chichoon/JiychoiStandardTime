import { configureStore } from '@reduxjs/toolkit';

import selectedTagInfo from './selectedTagInfo';
import colorTheme from './colorTheme';

export const store = configureStore({
  reducer: {
    selectedTagInfo,
    colorTheme,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
