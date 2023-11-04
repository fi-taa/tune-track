import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  displaySong,
  fetchSongs,
} from "./songListSlice";
import NavBar from "../../components/NavBar";
import {
  SongListContainer,
  InputContainer,
  AddSongContainer,
  AddButton,
  SearchShowContainer,
  SearchContainer,
  StyledInput,
  EditableInput,
  AddSongInput,
  ShowMoreContainer,
  ShowMoreButton,
  TitleButtonContainer,
  SongTitle,
  SongItem,
  UpdateButton,
  DeleteButton,
  AdjustedSongListUl,
  AdjustedButtonsContainer,
} from "../../style/style";

import ConfirmationModal from "../../components/ConfirmationModal";



const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songList.songs);
  const [newSong, setNewSong] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songs.slice(0, 10));
  const [editableSong, setEditableSong] = useState(null);
  const [editedTitle, setEditedTitle] = useState({ id: null, title: "" });
  const [visibleCount, setVisibleCount] = useState(10);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [songToDelete, setSongToDelete] = useState(null);
  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  useEffect(() => {
    setFilteredSongs(
      songs
        .slice(0, visibleCount)
        .filter((song) =>
          song.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  }, [searchQuery, songs, visibleCount]);

  const handleShowMore = () => {
    setVisibleCount(visibleCount + 10);
  };

  const handleAddSong = () => {
    const newSongObject = {
      id: Math.floor(Math.random() * 1000),
      title: newSong,
    };
    const updatedSongs = [newSongObject, ...songs];
    dispatch(displaySong(updatedSongs));
    setNewSong("");
  };

  const handleDeleteSong = (id) => {
    const updatedSongs = songs.filter((song) => song.id !== id);
    dispatch(displaySong(updatedSongs));
  };

  const handleUpdateSong = (id, updatedTitle) => {
    const updatedSongs = songs.map((song) =>
      song.id === id ? { ...song, title: updatedTitle } : song
    );
    dispatch(displaySong(updatedSongs));
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleEdit = (id, originalTitle) => {
    setEditableSong(id);
    setEditedTitle({ id: id, title: originalTitle });
  };

  const handleDoneEdit = (id) => {
    if (editedTitle.id === id) {
      handleUpdateSong(editedTitle.id, editedTitle.title);
      setEditedTitle({ id: null, title: "" });
      setEditableSong(null);
    }
  };

  const handleEditChange = (id, title) => {
    setEditedTitle({ id, title });
  };

  const handleDeleteConfirmation = (id) => {
    setSongToDelete(id);
    setShowDeleteModal(true);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const handleDeleteConfirmed = () => {
    handleDeleteSong(songToDelete);
    setShowDeleteModal(false);
  };

  return (
    <SongListContainer>
      <NavBar />
      <AddSongContainer>
        <InputContainer>
          <AddSongInput
            value={newSong}
            onChange={(e) => setNewSong(e.target.value)}
            placeholder="Enter new song title"
          />
          <AddButton onClick={handleAddSong}>Add Song</AddButton>
        </InputContainer>
      </AddSongContainer>
      <SearchShowContainer>
        <SearchContainer>
          <StyledInput
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for a song"
          />
        </SearchContainer>
        <AdjustedSongListUl>
          {filteredSongs.map((song) => (
            <SongItem key={song.id}>
              {editableSong === song.id ? (
                <div>
                  <EditableInput
                    value={editedTitle.title}
                    onChange={(e) => handleEditChange(song.id, e.target.value)}
                  />
                  <AddButton onClick={() => handleDoneEdit(song.id)}>
                    Done
                  </AddButton>
                </div>
              ) : (
                <TitleButtonContainer>
                  <SongTitle>{song.title}</SongTitle>
                  <AdjustedButtonsContainer>
                    <UpdateButton
                      onClick={() => handleEdit(song.id, song.title)}
                    >
                      Update
                    </UpdateButton>
                    <DeleteButton onClick={() => handleDeleteConfirmation(song.id)}>
                  Delete
                </DeleteButton>
                  </AdjustedButtonsContainer>
                </TitleButtonContainer>
              )}
            </SongItem>
          ))}
        </AdjustedSongListUl>
        {filteredSongs.length < songs.length && (
          <ShowMoreContainer>
            <ShowMoreButton onClick={handleShowMore}>Show More</ShowMoreButton>
          </ShowMoreContainer>
        )}
      </SearchShowContainer>

      {showDeleteModal && (
        <ConfirmationModal
          isOpen={showDeleteModal}
          onCancel={() => handleDeleteCancel(false)}
          onConfirm={() => {
            handleDeleteConfirmed();
            setShowDeleteModal(false);
          }}
        />
      )}
    </SongListContainer>
  );
};

export default SongList;
