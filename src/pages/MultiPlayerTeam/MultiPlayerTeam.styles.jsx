import styled, {css} from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 0 15px;
  max-width: 1468px;
  margin: 0 auto;
  margin-top: 32px;
  h2 {
    text-align: center;
    color: #0e1118;
    text-align: center;
    font-family: "Saira Semi Condensed", sans-serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 500;
    line-height: 83.2px;
  }
`;

export const MultiTeamWrap = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 32px auto;
`;
export const MultiTeamItem = styled.div`
  width: 100%;
  max-width: 223px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  padding: 20px 16px;
  border-radius: 4px;
  border: 1px solid #afb4b9;
  cursor: pointer;

  &.active {
    outline: 2px solid #004ea3;
    border: 1px solid #004ea3;
  }
  ${(props) =>
    props.disabled
      ? css`
          cursor: default;
          filter: grayscale(1);
          outline: 2px solid #004ea3;
          border: 1px solid #004ea3;
        `
      : css`
          :hover {
            outline: 2px solid #004ea3;
            border: 1px solid #004ea3;
          }
        `};

  img {
    display: block;
    width: 100%;
    max-width: 122px;
    object-fit: cover;
    height: auto;
  }
  p {
    color: #0e1118;
    font-family: "Saira Semi Condensed", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  a,button {
    padding: 5.5px 24px;
    background-color: #004ea3;
    font-family: "Saira Semi Condensed", sans-serif;
    color: #ffffff;
    text-decoration: none;
    border-radius: 10px;
    font-weight: 400;
    font-size: 20px;
    line-height: 31px;
    border-radius: 4px;
    opacity: 0.9;
    transition: all 0.3s ease;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
`;

export const TeamModal = styled.div`
    max-width: 700px;
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    transform: translateY(-70%);
    padding-bottom: 50px;
    text-align: center;
    h2 {
      font-size: 20px;
      margin-bottom: 90px;
    }
    button {
      padding: 5.5px 24px;
    background-color: #004ea3;
    font-family: "Saira Semi Condensed", sans-serif;
    color: #ffffff;
    text-decoration: none;
    border-radius: 10px;
    font-weight: 400;
    font-size: 20px;
    line-height: 31px;
    border-radius: 4px;
    opacity: 0.9;
    transition: all 0.3s ease;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
    }

`;