import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 16px;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #FFFFFF;
  padding: 14px 6px;
`
export const Li = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #0E1118;
  padding: 6px 10px;
  border: 1px solid #989EA4;
  border-radius: 4px;
  margin-right: 6px;
  cursor: pointer;
  :last-child {
    border: none;
    padding-top:0;
    padding-bottom: 0;
    margin-right: 0;
    cursor: pointer;
   
  }
  :first-child {
    border:none;
    padding-top:0;
    padding-bottom: 0;
    margin-right: 0;
    cursor: pointer;
  }
  &.dots {
    border:none;
  }
  &.pageNumber {
    transition: all 0.3s ease;
    :hover {
      transition: all 0.3s ease;
      border:1px solid #00438B;
      color: #00438B;
    }

  }
  &.active {
    border:1px solid #00438B;
    color: #00438B;
  }
  .arrow-left {
    transform: rotate(180deg);
  }
  &.disable-arrow {
    svg path {
      fill: #3E464F;
    }
  }
`;