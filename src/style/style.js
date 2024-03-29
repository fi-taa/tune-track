import styled from "@emotion/styled";
import { Flex, Box, Button, Text } from "rebass";

export const SongListContainer = styled(Flex)`
  font-family: "Montserrat", sans-serif;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0;
  width: 100%;
  background-color: #27323e;
`;

export const InputContainer = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const AddSongContainer = styled(Flex)`
margin-top: 20px;
  width: 100%;
`;

export const AddButton = styled(Button)`
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #27323e;
  }
`;

export const SearchShowContainer = styled(Flex)`
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const SearchContainer = styled(Box)`
  width: 40%;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #a3a3a3;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }
`;

export const EditableInput = styled.input`
  padding: 12px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  margin-right: 10px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #a3a3a3;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }
`;

export const AddSongInput = styled.input`
  width: 40%;
  padding: 12px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #a3a3a3;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }
`;

export const ShowMoreContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const ShowMoreButton = styled(Button)`
  padding: 12px 24px;
  font-size: 16px;
  background-color: #7e8daf;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  opacity: 0.2;
  &:hover {
    background-color: #ffffff;
    color: #27323e;
    opacity: 1;
  }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
`;

export const RippleDiv = styled.div`
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

export const TitleButtonContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SongListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

export const SongItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 10px;
`;

export const ButtonsContainer = styled(Flex)`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export const UpdateButton = styled(Button)`
  border: 1px solid white;
  color: white;
  background-color: #27323e;
  opacity: 0.6;
  width: 100px;
  margin: 5px;
  &:hover {
    border: 1px solid #008cba;
    color: #008cba;
    background-color: #000000;
  }
`;
export const DeleteButton = styled(Button)`
  border: 1px solid white;
  color: white;
  background-color: #27323e;
  opacity: 0.6;
  width: 100px;
  margin: 5px;
  &:hover {
    border: 1px solid #f44336;
    color: #f44336;
    background-color: #000000;
  }
`;

export const Overlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContainer = styled(Box)`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

// Media queries for responsiveness
const media = {
  mobile: "@media (max-width: 600px)",
  tablet: "@media (min-width: 601px) and (max-width: 960px)",
  desktop: "@media (min-width: 961px)",
};

export const SongTitle = styled(Text)`
  color: white;
  width: 100%;
  text-align: center;
  ${media.tablet} {
    width: 80%;
  }
`;

export const AdjustedSongListUl = styled(SongListUl)`
  ${media.desktop} {
    width: 60%;
  }
`;

export const AdjustedButtonsContainer = styled(ButtonsContainer)`
  ${media.mobile} {
    width: 100%;
    justify-content: center;
  }
  ${media.tablet} {
    width: 50%;
  }
  ${media.desktop} {
    width: 30%;
  }
`;
