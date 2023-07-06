import styled from "styled-components";

export const DraftPicksWrap = styled.div`
  width: 100%;
  max-width: 858px;
  margin: 0 auto;
  text-align: center;
  h6 {
    padding: 24px 36px;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #022142;

  }
`

export const DraftPicksBlock = styled.div`
 
  padding: 41px 0;
    background: #004EA3;
    border-radius: 4px;
    max-width: 120px;
    width: 100%;
    p:last-child {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      justify-content: center;
    }

`

export const DraftPicksBlocks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #FFFFFF;
  gap:10px;
    p {
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
    }
    p:last-child {
     
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 27px;
      
    }
    
`