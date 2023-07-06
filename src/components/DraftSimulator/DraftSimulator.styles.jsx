import styled from "styled-components";

export const DraftSimulatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top:100px;
  padding-top: 100px;
`;
export const DraftStart = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  p {
    color: #000000;
    font-weight: 400;
  }
  p:first-child {
    font-size: 40px;
    line-height: 60px;
    
  }
  p:last-child {
    font-size: 20px;
    line-height: 31px;
  }
`;
export const DraftStartBtn = styled.button`
  display: flex;
  align-items: center;
  color: #fff;
  gap:16px;
  border:none;
  background: #004EA3;
  border-radius: 4px;
  font-weight: 400;
  font-size:20px;
  line-height: 31px;
  padding: 8px 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    opacity: 0.9;
    transition: all 0.3s ease;
  }
  
`;
