import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "redux/actions/coinsActions";

interface CoinsState<T> {
  allCoins: T[];
  loading: boolean;
  error: string | null;
  allCoinsListCount: number;
}

const initialState: CoinsState<any> = {
  allCoins: [],
  loading: false,
  error: null,
  allCoinsListCount: 0,
};

const coinsSlice = createSlice({
  name: "coins",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.allCoins = action.payload.coins.sort((a: any, b: any) => {
        return parseFloat(b.price) - parseFloat(a.price);
      });
      state.allCoinsListCount = action.payload.coins.length;
    });
    builder.addCase(getAll.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });
  },
});

export default coinsSlice.reducer;
