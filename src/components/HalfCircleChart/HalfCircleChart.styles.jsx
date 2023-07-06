import styled from "styled-components";


export const ChartWrapper = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   max-width: 640px;
   margin: 0 auto;
   justify-content: space-between;
`;

export const ChartDough = styled.div`
  width: 100%;
  max-width: 400px;
`;
export const ChartInfo = styled.div`
 
`;
export const ChartInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap:24px;
  margin-bottom: 19px;
  span {
    width: 24px;
    height: 24px;
    border-radius: 2px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #46484A;
  }
`;
export const InfoTitle = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #022142;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
`;