// A child component of PhotoList

import { useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import { useState } from "react";
import ReactPlayer from "react-player";

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  z-index: 1000;
  max-width: 90%;
  max-height: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

// Overlay defines the background of the modal
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const VideoModal = ({ isOpen, onClose, url }: Props) => {
  if (!isOpen) return null;

  return (
    <>
      <Overlay>
        <Modal>
          <ReactPlayer
            url={url}
            controls
            width="100%"
            height="100%"
            style={{ margin: "1rem" }}
          />
          <CloseIcon
            onClick={onClose}
            style={{
              position: "absolute",
              right: -20,
              fontSize: "3rem",
              color: "white",
              cursor: "pointer",
            }}
          ></CloseIcon>
        </Modal>
      </Overlay>
    </>
  );
};

export default VideoModal;