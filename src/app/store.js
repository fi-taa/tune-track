import { configureStore } from '@reduxjs/toolkit';
import songListReducer from '../features/songList/songListSlice'; // Import your specific reducer

export const store = configureStore({
  reducer: {
    songList: songListReducer // Add your specific reducer here
    // Add other reducers here if you have more
  },
});
