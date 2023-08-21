import { createSlice } from "@reduxjs/toolkit";

interface userAuth {
  loggedIn: boolean;
  name: string;
}

const initialState: userAuth = {
  loggedIn: false,
  name: '',
}

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    login(state: userAuth, action: { payload: string }) {
      const name = action.payload;
      state.loggedIn = true;
      state.name = name;
    },
    logout(state: userAuth) {
      state.loggedIn = false;
      state.name = '';
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;