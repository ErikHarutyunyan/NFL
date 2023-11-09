import React from 'react'
// Styles
import {Wrapper} from "./LiveBody.styles"
import LivePlayerPool from '../LivePlayerPool/LivePlayerPool'
import LiveMyPicks from '../LiveMyPicks/LiveMyPicks'
import LiveOverallPicks from '../LiveOverallPicks/LiveOverallPicks'
const LiveBody = () => {
  return (
    <Wrapper>
      <LivePlayerPool />
      <LiveMyPicks />
      <LiveOverallPicks />
    </Wrapper>
  )
}

export default LiveBody