import React from 'react';
import { Box, Button, Flex, Text } from 'rebass';
import styled from '@emotion/styled';

const Overlay = styled(Box)`
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

const ModalContainer = styled(Box)`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

const UpdateButton = styled(Button)`
  border: 1px solid #008cba;
  color: #008cba;
  opacity: 1;
  &:hover {
    color: #ffffff;
    background-color: #008cba;
  }
`;

const DeleteButton = styled(Button)`
  border: 1px solid #f44336;
  color: #f44336;
  opacity: 1;
  &:hover {
    color: #ffffff;
    background-color: #f44336;
  }
`;

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Text fontSize={3} fontWeight="bold" mb={3} color="red">
          Are you sure you want to delete this song?
        </Text>
        <Flex justifyContent="center">
          <DeleteButton onClick={onConfirm} mr={2}>
            Confirm
          </DeleteButton>
          <UpdateButton onClick={onCancel}>Cancel</UpdateButton>
        </Flex>
      </ModalContainer>
    </Overlay>
  );
};

export default ConfirmationModal;
