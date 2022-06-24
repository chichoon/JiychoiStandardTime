import { configureStore } from '@reduxjs/toolkit';

import selectedTags from './selectedTags';

export const store = configureStore({
  reducer: {
    selectedTags,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
