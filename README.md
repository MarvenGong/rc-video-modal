# rc-video-modal

react 视频弹窗播放组件

## github 仓库地址

[点击前往 rc-video-modal github 地址](https://github.com/MarvenGong/rc-video-modal)

> rc-video-modal 可以方便的实现点击某个按钮或者区域来弹窗播放视频的效果

## 演示地址

[戳这里前往 rc-video-modal 演示地址>>](https://marvengong.github.io/rc-video-modal/example/dist/)

## 版本说明

- 0.2.0 第一个版本

## 使用文档

#### 安装

```javascript
npm install --save rc-video-modal
```

#### 在需要使用的地方导入使用

```ts
import VideoModal from 'rc-video-modal';
const App = () => {
  return (
    <div>
      <VideoModal
        autoPlay={false}
        controls
        loop={false}
        muted
        width={'50%'}
        src="https://fastmock.cn-bj.ufileos.com/video/video_fastmock-1.mp4"
      >
        <button
          style={{
            background: 'blue',
            color: '#fff',
            height: 40,
            border: 'none',
            borderRadius: '5px',
            padding: '0 12px',
          }}
        >
          播放视频
        </button>
      </VideoModal>
    </div>
  );
};
```

#### props

|       参数       |               说明               |  类型   | 必须  |
| :--------------: | :------------------------------: | :-----: | :---: |
|      title       | 视频的名称，显示在视频弹窗左上角 | string  | true  |
|       src        |             视频地址             | string  | true  |
|      width       |             视频宽度             | string  | false |
|     children     |   用于打开视频的按钮或其他内容   | string  | false |
|     autoPlay     |         视频是否自动播放         | boolean | false |
|     controls     |         是否显示视频控件         | boolean | false |
|       loop       |           是否循环播放           | boolean | false |
|      muted       |           视频是否静音           | boolean | false |
|    showClose     |     是否需要右上角的关闭按钮     | boolean | false |
| closeOnClickMask |     点击阴影部分是否关闭视频     | boolean | false |

示例：

```ts
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import VideoModal from 'rc-video-modal';

const App = () => {
  return (
    <div>
      <VideoModal
        autoPlay={false}
        controls
        loop={false}
        muted
        width={'50%'}
        src="https://fastmock.cn-bj.ufileos.com/video/video_fastmock-1.mp4"
      >
        <button
          style={{
            background: 'blue',
            color: '#fff',
            height: 40,
            border: 'none',
            borderRadius: '5px',
            padding: '0 12px',
          }}
        >
          播放视频
        </button>
      </VideoModal>
    </div>
  );
};

export { App };
```
