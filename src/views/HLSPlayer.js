import React from 'react'
import ReactHlsPlayer from 'react-hls-player';

export default function HLSPlayer() {
    return (
      <ReactHlsPlayer
        url="https://baderphotography.co.uk/live/rnlive/index.m3u8"
        controls={true}
        style={{width: '100vw', height: '100vh'}}
      />
    );
}
