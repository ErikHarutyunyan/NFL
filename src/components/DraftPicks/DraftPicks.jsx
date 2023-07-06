import React from 'react'
import { DraftPicksBlock, DraftPicksBlocks, DraftPicksWrap } from './DraftPicks.styles'




const DraftPicksItem = ({roundData}) => {
  return (
  <DraftPicksBlock>
    <p>{roundData.round}</p>
    <p>{roundData.roundValue.join(' ')}</p>
    
  </DraftPicksBlock>
  )
}


const DraftPicks = ({title,dataRound}) => {
  
  return (
    <DraftPicksWrap>
      <h6>{title}</h6>
      <DraftPicksBlocks>
        {Object.keys(dataRound).map((item, idx) => {
          const pickInfo = {round : item, roundValue: dataRound[item]}
          
          return <DraftPicksItem key={idx} roundData={pickInfo} />;
        })}
      </DraftPicksBlocks>
    </DraftPicksWrap>
  );
}

export default DraftPicks