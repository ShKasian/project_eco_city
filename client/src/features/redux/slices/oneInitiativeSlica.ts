// import { createSlice } from '@reduxjs/toolkit';
// import type { OneInitiativeType } from 'src/types/oneInitiativeTypes';
// import {
//   addOneInitiativeThunk,
//   deleteOneInitiativeThunk,
//   getOneInitiativeByIdThunk,
// } from '../thunkActions/oneInitiativeThunkActions';

// const initialState: CardOneInitiativeType = {};

// export const newsSlice = createSlice({
//   name: 'initiative',
//   initialState,
//   reducers: {},

//   extraReducers: (builder) => {
//     builder.addCase(getOneInitiativeByIdThunk.fulfilled, (state, action) => {
//         action.payload;
//     });
//     builder.addCase(getOneInitiativeByIdThunk.rejected, (state, action) => []);

//     builder.addCase(addOneInitiativeThunk.fulfilled, (state, action) => [action.payload, ...state]);
//     builder.addCase(addOneInitiativeThunk.rejected, (state, action) => state);

//     builder.addCase(deleteOneInitiativeThunk.fulfilled, (state, action) =>
//       state.filter((el) => el.id !== action.payload),
//     );
//     builder.addCase(deleteOneInitiativeThunk.rejected, (state, action) => state);
//   },
// });

// export default newsSlice.reducer;
