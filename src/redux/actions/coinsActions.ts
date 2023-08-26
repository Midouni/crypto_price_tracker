import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCoinsApi } from "services/api";

export const getAll = createAsyncThunk("coins/getall", async (payload) => {
  let response: any = await getAllCoinsApi();
  return response;
});
