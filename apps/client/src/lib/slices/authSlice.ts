import { authService } from "@/services/authService";
import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";

export interface User {
  id: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: true,
  error: null,
};

export const verifyUser = createAsyncThunk(
  "auth/verifyUser",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("accesstoken");
    if (!token) {
      return rejectWithValue("no token found");
    }
    try {
      const userData = await authService.getProfile();
      return userData;
    } catch (error) {
      localStorage.removeItem("accessToken");
      return rejectWithValue("session expired or invalid");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (buider) => {
    buider.addCase(verifyUser.pending, (state) => {
      state.isLoading = true;
    });
    buider.addCase(
      verifyUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      }
    );
    buider.addCase(verifyUser.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.error = action.payload as string;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
