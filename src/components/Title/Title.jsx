import React from "react";
import styled from "styled-components";

const Title = ({ titleText = "", titleClassName = "" }) => {
  return <TitleWrap className={titleClassName}>{titleText}</TitleWrap>;
};

const TitleWrap = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 57px;
    color: #022142;
    margin-bottom: 80px;
`;
export default Title