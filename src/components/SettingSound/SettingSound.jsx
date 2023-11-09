import React from 'react'
// Styles
import {Wrapper} from "./SettingSound.styles"
import { Switch } from '@mui/material';
import useAudio from '../../hooks/useAudio';
const SettingSound = () => {
  const {isPlaying,setIsPlaying, play, stop} = useAudio()
  return (
    <Wrapper>
      <p>Sound</p>
      <Switch
        onChange={() => {
          !isPlaying ? play() : stop();
          setIsPlaying(!   isPlaying);
        }}
      />
      <p>{isPlaying ? "ON" : "OFF"}</p>
    </Wrapper>
  );
}

export default SettingSound