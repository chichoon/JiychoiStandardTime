import { configureStore } from '@reduxjs/toolkit';

import selectedTagInfo from './selectedTagInfo';

export const store = configureStore({
  reducer: {
    selectedTagInfo,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
