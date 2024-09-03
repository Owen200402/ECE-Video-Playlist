// A child component of PhotoList

import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
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
