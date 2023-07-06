import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {selectDraftConfig, setPauseId, setStatus } from '../../app/features/draftConfig/draftConfigSlice';
// Styles
import { DraftSimulatorWrapper, DraftStart, DraftStartBtn } from './DraftSimulator.styles'
// Img
import pauseImg from "../../assets/img/pause.png";

const DraftSimulator = () => {
  const {
    countRender,
    teamPickIndex,
    fanaticIndexPosition,
    tradeValue,
  } = useSelector(selectDraftConfig);
  const dispatch = useDispatch();
  const count = useMemo(() => countRender, [countRender])
  const index = teamPickIndex[0] ?? fanaticIndexPosition[0] 
 
  return (
    <DraftSimulatorWrapper>
      <DraftStart>
        <p>{!!index ? index - count - 1 : tradeValue.count - count}</p>
        <p>Picks until your turn ...</p>
      </DraftStart>
      <DraftStartBtn
        onClick={() => {
          dispatch(setPauseId(count));
          dispatch(setStatus("red"));
        }}
      >
        <img src={pauseImg} alt="play_pause" />
        <span>Pause</span>
      </DraftStartBtn>
    </DraftSimulatorWrapper>
  );
}

export default DraftSimulator