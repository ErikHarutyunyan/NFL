import React from 'react'
import { SearchIcon } from '../Icons/Icons'
import { InputWrap } from './Search.styles'

const Search = ({placeholder="Search", icon="",value,handleChange}) => {
  return (
    <InputWrap>
      <label><SearchIcon /></label>
      <input type="text" value={value} placeholder={placeholder} onChange={handleChange}/> 
    </InputWrap>
  )
}

export default Search