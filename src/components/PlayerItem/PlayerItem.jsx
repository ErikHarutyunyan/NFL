
import React from 'react'


// Styles
import { Table, Td, Th, Tr, Wrapper } from './PlayerItem.styles'



const PlayerItem = ({player}) => {

  return (
    <Wrapper>
      <Table>
      <thead>
      <Tr>
        <Th className='player-name'>Name</Th>
        <Th className='player-possition'>Possition</Th>
        <Th className='player-college'>College</Th>
        <Th className='player-rating'>Rating</Th>
      </Tr>
      </thead>
      <tbody>
      <Tr>
        <Td>{player?.player}</Td>
        <Td>{player?.position}</Td>
        <Td>{player?.school}</Td>
        <Td>
          <span>78</span>
          <span>95</span>
        </Td>
      </Tr>
      </tbody>
     
    </Table>
    </Wrapper>
  )
}

export default PlayerItem