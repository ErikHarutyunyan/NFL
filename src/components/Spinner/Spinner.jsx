import { CircularProgress } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Spinner = () => {
  return (
    <SpinWrap><CircularProgress size="75px" /></SpinWrap>
  )
}

const SpinWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
`;
export default Spinner