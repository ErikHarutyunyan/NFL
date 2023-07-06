import React from 'react'
import { SearchIcon } from '../Icons/Icons';
import { InputWrap } from './PlayersSelected.styles';

const PlayerSearch = ({ value, placeholder, handleChange }) => {
  return (
    <InputWrap>
      <label>
        <SearchIcon />
      </label>
      <input value={value} placeholder={placeholder} onChange={handleChange} />{" "}
    </InputWrap>
  );
};

export default PlayerSearch