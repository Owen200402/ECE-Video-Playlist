import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import './VideoModal.css';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, url }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box className="video-modal">
        <div className="video-wrapper">
          <video
            className="video-player"
            src={url}
            controls
            autoPlay={false}
            preload="auto"
            onCanPlay={() => console.log('Video can play')}
            onError={() => console.error('Error loading video')}
          ></video>
        </div>
        <CloseIcon
            onClick={onClose}
            style={{
              position: "absolute",
              right: "50%",
              bottom: "2.5%",
              fontSize: "2rem",
              color: "white",
              cursor: "pointer",
            }}
          ></CloseIcon>
      </Box>
    </Modal>
  );
};

export default VideoModal;
