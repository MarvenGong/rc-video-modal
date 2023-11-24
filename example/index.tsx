import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import VideoModal from '../.';

const App = () => {
  return (
    <div>
      <VideoModal
        autoPlay={false}
        controls
        loop={false}
        muted
        width={'50%'}
        src="https://fastmock.cn-bj.ufileos.com/video/video_fastmock-1.mp4">
        <button style={{
          background: 'blue',
          color: '#fff',
          height: 40,
          border: 'none',
          borderRadius: '5px',
          padding: '0 12px'
        }}>播放视频</button>
      </VideoModal>
    </div>
  );
};

export { App };
