import {
  createDraftSafeSelectorCreator,
  createSlice,
  weakMapMemoize,
} from '@reduxjs/toolkit';
import { authApi } from '@vendor-master/api';
import { jwtDecode, JwtPayload } from 'jwt-decode';

type AuthState = {
  token: string | undefined;
};

type JwtAuthPayload = JwtPayload & {
  role: string;
};

const initialState: AuthState = {
  token: localStorage.getItem('vndr-token') || undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  reducerPath: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
      }
    );
  },
});

const createWeakMapDraftSafeSelector =
  createDraftSafeSelectorCreator(weakMapMemoize);
const selectSelf = (state: { auth: AuthState }) => state.auth;

export const selectCurrentToken = createWeakMapDraftSafeSelector(
  selectSelf,
  (state) => state.token
);

export const selectCurrentRole = createWeakMapDraftSafeSelector(
  selectSelf,
  (state) =>
    state.token ? jwtDecode<JwtAuthPayload>(state.token).role : undefined
);

export const selectIsLoggedIn = createWeakMapDraftSafeSelector(
  selectSelf,
  (state) => !!state.token
);

export const selectIsAdmin = createWeakMapDraftSafeSelector(
  selectCurrentRole,
  (role) => role === 'admin'
);
