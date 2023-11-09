import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 466px;
  width: 100%;
  padding: 24px 32px;
  border-radius: 4px;
  border: 1px solid #cad2da;
  font-family: "Saira Semi Condensed";
  color: #0e1118;
`;

export const PlanName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
  }
  h3 {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    text-transform: capitalize;
  }
`;
export const PlanInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0;
  max-width: 402px;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    gap: 12px;
    img {
      width: 24px;
      height: 24px;
      object-fit: cover;
    }
    p {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;
export const PlanPrice = styled.div`
  text-align: center;
  p {
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 62.4px;
  }
  span {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 62.4px;
  }
`;
export const PlanButton = styled.button`
  
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    padding: 8px 0;
    width: 100%;
    border-radius: 4px;
    background: #ffc43a;
    cursor: pointer;
    height: 46px;
    :disabled {
      background-color: gray;
      img {
        filter: opacity(0.5);
      }
    }
    p {
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
    }
    img {
      max-width: 123px;
      width: 100%;
      object-fit: cover;
    }
  
`;
