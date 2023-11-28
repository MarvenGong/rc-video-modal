import { useRef, useState, createElement, Fragment, cloneElement } from 'react';
import ReactDOM from 'react-dom';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".rc-vmodal__mask{background-color:rgba(0,0,0,.9);bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;-webkit-transition:all .3s;transition:all .3s;z-index:9999}.rc-vmodal__mask.visible{opacity:1}.rc-vmodal__dialog{height:auto;left:50%;opacity:0;position:fixed;top:50%;-webkit-transform:translate(-50%,-55%);transform:translate(-50%,-55%);-webkit-transition:all .3s;transition:all .3s;width:800px;z-index:10000}.rc-vmodal__dialog.visible{opacity:1;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.rc-vmodal__dialog *{-webkit-box-sizing:border-box;box-sizing:border-box}.rc-vmodal__dialog h3{color:#fff;font-size:16px;height:22px;line-height:22px;margin-bottom:5px;margin-top:0}.rc-vmodal__dialog h3 .close{background-color:transparent;border:none;cursor:pointer;height:22px;position:absolute;right:0;top:0;-webkit-transition:all .2s;transition:all .2s;width:22px}.rc-vmodal__dialog h3 .close:after,.rc-vmodal__dialog h3 .close:before{background-color:#fff;content:\" \";display:inline-block;height:1px;left:50%;margin-left:-8px;position:absolute;top:50%;-webkit-transform-origin:center;transform-origin:center;width:16px}.rc-vmodal__dialog h3 .close:before{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.rc-vmodal__dialog h3 .close:after{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.rc-vmodal__dialog h3 .close:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.rc-vmodal__dialog .video-area video{width:100%}";
styleInject(css_248z,{"insertAt":"top"});

var _excluded = ["title", "width", "src", "autoPlay", "controls", "loop", "muted", "closeOnClickMask", "showClose", "onClose"];
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
    onClose = props.onClose,
    otherProps = _objectWithoutPropertiesLoose(props, _excluded);
  var videoRef = useRef(null);
  var _useState = useState(false),
    visible = _useState[0],
    setVisible = _useState[1];
  var _useState2 = useState(false),
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
    return createElement(Fragment, null, visible && createElement(Fragment, null, createElement("div", {
      className: "rc-vmodal__mask " + (show ? 'visible' : ''),
      onClick: function onClick() {
        return closeOnClickMask && handleClose();
      }
    }), createElement("div", {
      className: "rc-vmodal__dialog " + (show ? 'visible' : ''),
      style: {
        width: width
      }
    }, createElement("h3", null, title, showClose && createElement("button", {
      onClick: function onClick() {
        return handleClose();
      },
      className: 'close'
    })), createElement("div", {
      className: 'video-area'
    }, createElement("video", Object.assign({
      ref: videoRef
    }, otherProps, {
      autoPlay: autoPlay,
      loop: loop,
      controls: controls,
      muted: muted,
      preload: "metadata",
      src: src
    }))))));
  };
  return createElement(Fragment, null, ReactDOM.createPortal(renderModal(), document.body), cloneElement(props.children, {
    onClick: function onClick() {
      setVisible(true);
      setTimeout(function () {
        setShow(true);
      }, 100);
    }
  }));
};

export default VideoModal;
//# sourceMappingURL=rc-video-modal.esm.js.map
