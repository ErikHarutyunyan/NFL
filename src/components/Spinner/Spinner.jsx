import { CircularProgress } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Spinner = ({size="75px",marginVert="80px"}) => {
  return (
    <SpinWrap marginVert={marginVert}>
      <CircularProgress size={size} />
    </SpinWrap>
  );
}

const SpinWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => (props.marginVert)} 0;
`;
export default Spinner