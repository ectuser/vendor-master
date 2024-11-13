import { configureStore } from '@reduxjs/toolkit';
import { authApi, vendorApi } from '@vendor-master/api';
import { authSlice } from '@vendor-master/auth';
import { setupListeners } from '@reduxjs/toolkit/query';
import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

export const store = configureStore({
  reducer: {
    [vendorApi.reducerPath]: vendorApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(vendorApi.middleware)
      .concat(authApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

store.subscribe(() => {
  const state = store.getState();

  const token = state[authSlice.reducerPath].token;

  localStorage.setItem('vndr-token', token ?? '');
});
