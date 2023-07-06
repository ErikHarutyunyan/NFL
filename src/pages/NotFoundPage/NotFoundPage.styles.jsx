
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  padding: 0 15px;
  img {
    max-width: 709px;
    width: 100%;
  }
  p {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #0e1118;
    margin-bottom: 32px;
  }
  a {
    background: #004ea3;
    border-radius: 4px;
    color: #fff;
    padding: 5.5px 24px;
    opacity: 0.9;
    transition: all 0.3s ease;
    :hover {
      opacity: 1;
    }
  }
`;
