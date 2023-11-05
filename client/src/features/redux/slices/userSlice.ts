// import { createSlice } from '@reduxjs/toolkit';
// import type { UserStatusType } from 'src/types/userTypes';

// // import {
// //   logoutUserThunk,
// //   submitSigninThunk,
// //   submitSignupThunk,
// // } from '../thunkActions/

// const userSlice = createSlice({
//   name: 'user',
//   initialState: { status: 'loading' } as UserStatusType,
//   reducers: {},

//   extraReducers: (builder) => {
//     // builder.addCase(checkUserThunk.pending, () => ({ status: 'loading' }));
//     // builder.addCase(checkUserThunk.fulfilled, (_, action) => ({
//     //   status: 'success',
//     //   user: action.payload,
//     // }));
//     // builder.addCase(checkUserThunk.rejected, () => ({ status: 'guest' }));
//     builder.addCase(submitSignupThunk.fulfilled, (_, action) => ({
//       status: 'success',
//       user: action.payload,
//     }));

//     builder.addCase(submitSigninThunk.fulfilled, (_, action) => ({
//       status: 'success',
//       user: action.payload,
//     }));

//     builder.addCase(logoutUserThunk.fulfilled, () => ({ status: 'guest' }));
//   },
// });

// export default userSlice.reducer;
