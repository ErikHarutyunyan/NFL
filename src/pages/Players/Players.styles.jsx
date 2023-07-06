import styled from "styled-components";
import { device } from "../../themes/Breakpoints";

export const Wrapper = styled.section`
  &.main-container {
    margin-top: 40px;
    margin-bottom: 68px;
  }
`;

export const  PlayerSetting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const TableWrap = styled.div`
  @media ${device.tabletL} {
    overflow-y: scroll;
  }
`;
export const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  gap:24px;

`

export const SearchWrap = styled.div`
  width: 100%;
  max-width: 800px;
  @media ${device.laptopL} {
   max-width: 600px;
  }
  @media ${device.laptop} {
   max-width: 500px;
  }
  @media ${device.tabletL} {
   max-width: 100%;
   margin-top: 15px;
  }
`;
