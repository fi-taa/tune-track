import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
};

const songListSlice = createSlice({
  name: 'songList',
  initialState,
  reducers: {
    displaySong: (state, action) => {
      state.songs = action.payload;
    },
    searchSong: (state, action) => {
      const searchQuery = action.payload.toLowerCase();
      state.songs = state.songs.filter(song => song.title.toLowerCase().includes(searchQuery));
    },
    addSong: (state, action) => {
      state.songs.push(action.payload);
    },
    deleteSong: (state, action) => {
      state.songs = state.songs.filter(song => song.id !== action.payload);
    },
    updateSong: (state, action) => {
      const updatedSong = action.payload;
      state.songs = state.songs.map(song => (song.id === updatedSong.id ? updatedSong : song));
    },
  },
});

export const fetchSongs = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const json = await response.json();
      dispatch(displaySong(json));
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };
};

export const { displaySong, searchSong, addSong, deleteSong, updateSong } = songListSlice.actions;
export default songListSlice.reducer;
