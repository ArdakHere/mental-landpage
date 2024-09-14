import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video className="video-player" width="800" height="450" controls>
        <source src="./media/demo_video/mental_demo_cut.mp4" type="video/mp4" />
        {/* Fallback to other formats, e.g., mkv, if needed */}
      </video>
    </div>
  );
}

export default VideoPlayer;
