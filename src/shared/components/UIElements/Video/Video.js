import React from 'react';

import './Video.scss';

const Video = ({
  width,
  height,
  controls,
  autoPlay,
  loop,
  className,
  src,
  type,
}) => (
  <video
    className="video"
    width={width}
    height={height}
    controls={controls}
    autoPlay={autoPlay}
    loop={loop}
    muted
  >
    <source className={`video__source ${className}`} src={src} type={type} />
    Sorry, your browser doesn't support embedded videos.
  </video>
);

export default Video;
