import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import VideoModal from '../.';
// import '../dist/tsdx-demo01.cjs.development.css'

const App = () => {
  return (
    <div>
      <VideoModal
        autoPlay
        controls
        loop={false}
        muted
        width={'50%'}
        src="https://ecs-dev-public-1258344699.cos.ap-nanjing.myqcloud.com/static/video/ecs-home-banner-video-1.mp4">
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

ReactDOM.render(<App />, document.getElementById('root'));
