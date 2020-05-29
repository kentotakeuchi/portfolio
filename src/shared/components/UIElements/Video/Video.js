import React from 'react';

import './Video.scss';

const Video = ({
  width,
  height,
  controls,
  className,
  directory,
  filename,
  type,
}) => (
  <video
    className="video"
    width={width}
    height={height}
    controls={controls}
    muted
  >
    <source
      className={`video__source ${className}`}
      src={`${process.env.REACT_APP_ASSET_URL}/video/${directory}/${filename}`}
      type={type}
    />
    Sorry, your browser doesn't support embedded videos.
  </video>
);

export default Video;
