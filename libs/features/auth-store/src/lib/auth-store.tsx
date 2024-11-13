export const temp = '123';

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { jwtDecode } from 'jwt-decode';

// type AuthState = {
//   token: string | undefined;
// };

// const initialState: AuthState = {
//   token: undefined,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   reducerPath: 'auth',
//   initialState: initialState,
//   reducers: {
//     setCredentials: (
//       state,
//       { payload: { token } }: PayloadAction<{ token: string }>
//     ) => {
//       state.token = token;
//     },
//   },
//   selectors: {
//     currentToken: (state) => state.token,
//     currentRole: (state) => (state.token ? jwtDecode(state.token) : undefined),
//   },
// });

// export const { setCredentials } = authSlice.actions;
