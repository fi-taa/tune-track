import { createAction } from "@reduxjs/toolkit";

export const fetchSongs = createAction('songList/fetchSongs');
export const displaySong = createAction('songList/displaySong');
export const searchSong = createAction('songList/searchSong');
export const addSong = createAction('songList/addSong');
export const deleteSong = createAction('songList/deleteSong');
export const updateSong = createAction('songList/updateSong');
