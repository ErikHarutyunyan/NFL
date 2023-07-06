import styled from "styled-components";

export const BannerWrap = styled.div`
  display: flex;
  padding: 15px 0;
  justify-content: center;
  background: linear-gradient(
    97.81deg,
    #00438b 0%,
    #07c93e 0.01%,
    #1da945 13.54%,
    #20a446 15.63%,
    #3c7b4e 32.81%,
    #00438b 58.85%,
    rgba(0, 67, 139, 0.76) 94.27%
  );
`;
export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  h2 {
    font-size: 36px;
    line-height: 54px;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 600;
    color: white;
  }
  img {
    max-width: 50px;
    height: auto;
  }
`;