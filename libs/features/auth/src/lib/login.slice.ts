import { createSlice } from '@reduxjs/toolkit';
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
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.token = undefined;
    },
  },
  selectors: {
    currentToken: (state) => state.token,
    currentRole: (state) =>
      state.token ? jwtDecode<JwtAuthPayload>(state.token).role : undefined,
    isLoggedIn: (state) => !!state.token,
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
