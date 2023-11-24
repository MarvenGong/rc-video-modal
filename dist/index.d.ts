import * as React from 'react';
import './style.less';
export interface IRcVideoModal {
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
declare const VideoModal: (props: IRcVideoModal) => React.JSX.Element;
export default VideoModal;
