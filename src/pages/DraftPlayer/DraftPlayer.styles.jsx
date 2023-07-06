import styled from "styled-components";

export const Wrapper = styled.div`
  &.main-container {
    margin-top: 44px;
  }
`
export const Banner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 24px;
  color: #FFFFFF;
  font-weight: 500;
  background: linear-gradient(0deg, #50647B, #50647B), #FFFFFF;
border-radius: 4px;
  .banner-info {
    display: flex;
    gap: 12px;
    align-items: center;
    &-border {
      border:1px solid #FFFFFF;
      height: 30px;
    }
  }

`
export const DraftView = styled.div`
  margin-top: 24px;
  margin-bottom: 90px;
  display: flex;
  gap: 20px;
`;

export const DraftViewSimulator = styled.div`
flex: 1 0 0;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(96, 106, 117, 0.2);
  border-radius: 4px;
  padding: 24px 18px;
`;
export const RenderCircle = styled.p`
  display: flex;
  align-items: center;
  svg circle {
    fill:  ${props => props.status };
  }
`;