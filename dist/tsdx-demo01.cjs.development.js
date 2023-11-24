'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var ReactDOM = _interopDefault(require('react-dom'));

var VideoModal = function VideoModal(props) {
  var _props$title = props.title,
    title = _props$title === void 0 ? '视频' : _props$title,
    _props$width = props.width,
    width = _props$width === void 0 ? 800 : _props$width,
    src = props.src,
    _props$autoPlay = props.autoPlay,
    autoPlay = _props$autoPlay === void 0 ? false : _props$autoPlay,
    _props$controls = props.controls,
    controls = _props$controls === void 0 ? false : _props$controls,
    _props$loop = props.loop,
    loop = _props$loop === void 0 ? false : _props$loop,
    _props$muted = props.muted,
    muted = _props$muted === void 0 ? false : _props$muted,
    _props$closeOnClickMa = props.closeOnClickMask,
    closeOnClickMask = _props$closeOnClickMa === void 0 ? true : _props$closeOnClickMa,
    _props$showClose = props.showClose,
    showClose = _props$showClose === void 0 ? true : _props$showClose,
    onClose = props.onClose;
  var videoRef = React.useRef(null);
  var _useState = React.useState(false),
    visible = _useState[0],
    setVisible = _useState[1];
  var _useState2 = React.useState(false),
    show = _useState2[0],
    setShow = _useState2[1];
  var handleClose = function handleClose() {
    setShow(false);
    setTimeout(function () {
      setVisible(false);
    }, 300);
    onClose == null || onClose();
  };
  var renderModal = function renderModal() {
    return React.createElement(React.Fragment, null, visible && React.createElement(React.Fragment, null, React.createElement("div", {
      className: "rc-vmodal__mask " + (show ? 'visible' : ''),
      onClick: function onClick() {
        return closeOnClickMask && handleClose();
      }
    }), React.createElement("div", {
      className: "rc-vmodal__dialog " + (show ? 'visible' : ''),
      style: {
        width: width
      }
    }, React.createElement("h3", null, title, showClose && React.createElement("button", {
      onClick: function onClick() {
        return handleClose();
      },
      className: 'close'
    })), React.createElement("div", {
      className: 'video-area'
    }, React.createElement("video", {
      ref: videoRef,
      autoPlay: autoPlay,
      loop: loop,
      controls: controls,
      muted: muted,
      preload: "metadata",
      src: src
    })))));
  };
  return React.createElement(React.Fragment, null, ReactDOM.createPortal(renderModal(), document.body), React.cloneElement(props.children, {
    onClick: function onClick() {
      setVisible(true);
      setTimeout(function () {
        setShow(true);
      }, 100);
    }
  }));
};

exports.default = VideoModal;
//# sourceMappingURL=tsdx-demo01.cjs.development.js.map
