import * as React from 'react';

import './style.less';
import ReactDOM from 'react-dom';
import { useState } from 'react';
export interface IRcVideoModal extends React.VideoHTMLAttributes<HTMLVideoElement> {
  title?: string;
  width?: number | string;
  onClose?: () => void;
  children: React.ReactNode;
  src: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  showClose?: boolean;
  closeOnClickMask?: boolean;
}

const VideoModal = (props: IRcVideoModal) => {
  const {
    title = '视频',
    width = 800,
    src,
    autoPlay = false,
    controls = false,
    loop = false,
    muted = false,
    closeOnClickMask = true,
    showClose = true,
    onClose,
    ...otherProps
  } = props;
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setVisible(false);
    }, 300);
    onClose?.();
  }
  const renderModal = () => {
    return <>
      {visible && <>
        <div className={`rc-vmodal__mask ${show ? 'visible' : ''}`}
          onClick={() => closeOnClickMask && handleClose()}></div>
        <div className={`rc-vmodal__dialog ${show ? 'visible' : ''}`}
          style={{
            width,
          }}>
          <h3>
            {title}
            {showClose && <button onClick={() => handleClose()} className='close'></button>}
          </h3>
          <div className='video-area'>
            <video
              {...otherProps}
              autoPlay={autoPlay}
              loop={loop}
              controls={controls}
              muted={muted}
              preload="metadata"
              src={src}></video>
          </div>
        </div>
      </>}
    </>;
  };
  return <>
    {ReactDOM.createPortal(renderModal(), document.body)}
    {React.cloneElement(props.children as React.ReactElement, {
      onClick: () => {
        setVisible(true);
        setTimeout(() => {
          setShow(true);
        }, 100);
      },
    })}
  </>;
};
export default VideoModal;
