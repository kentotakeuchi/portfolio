import React, { useState } from 'react';

import './ZoomableImage.scss';
import PlusCursor from '../../../../asset/images/plus_cursor.png';
import Backdrop from '../Backdrop/Backdrop';

const ZoomableImage = ({
  alt,
  src,
  contain,
  left,
  className,
  scale,
  height,
}) => {
  const [isZoom, setIsZoom] = useState(false);

  const openZoomHandler = () => {
    setIsZoom(true);
  };
  const closeZoomHandler = () => {
    setIsZoom(false);
  };

  return (
    <React.Fragment>
      {isZoom && <Backdrop onClick={closeZoomHandler} />}
      <img
        className={`zoomable-image ${className} ${isZoom ? 'zoomed' : ''}`}
        alt={alt}
        src={src}
        style={{
          objectFit: contain ? 'contain' : 'cover',
          backgroundPosition: left ? 'left' : 'center',
          transform: isZoom ? `scale(${scale})` : 'scale(1)',
          cursor: isZoom ? 'initial' : `url(${PlusCursor}), auto`,
          height: height ? '100%' : null,
        }}
        onClick={openZoomHandler}
      />
    </React.Fragment>
  );
};

export default ZoomableImage;
