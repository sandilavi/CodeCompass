import React, { useRef } from 'react';
import YouTube from 'react-youtube';
import "./VideoPlayer.css"

const VideoPlayer = ({ videoId, width = '640', height = '390', autoplay = false }) => {
  const playerRef = useRef(null);

  const _onReady = (event) => {

    if (!autoplay) {
      event.target.pauseVideo();
    }
  };


  const options = {
    height,
    width,
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      controls: 1, // Enable controls
    },
  };

  return (
    <div className="movie-clip">
      <YouTube
        ref={playerRef}
        videoId={videoId}
        onReady={_onReady}
        opts={options} // Use 'opts' for clarity (optional)
      />
    </div>
  );
};

export default VideoPlayer;
