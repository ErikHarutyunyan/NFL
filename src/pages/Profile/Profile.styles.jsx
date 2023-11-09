import styled from "styled-components";

export const ProfileWrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 1410px;
  padding: 32px 15px;
  margin: 0 auto;
  gap: 20px;
  article {
    flex: 1;
  }
`;

export const ProfileNav = styled.nav`
  width: 100%;
  max-width: 345px;
`;
export const ProfileLists = styled.ul``;

export const ProfileList = styled.li`
  padding: 12px 16px 12px 17px;
  border-bottom: 1px solid #cad2da;
  &.active {
    border-left: 2px solid #004ea3;
  }
  a {
    display: flex;
    align-items: center;
    gap: 13px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #0e1118;
    font-family: "Saira Semi Condensed", sans-serif;
    transition: all 0.3s linear;
    svg path {
      transition: all 0.3s linear;
    }
    :hover {
      color: #004ea3;
      svg path {
        fill: #004ea3;
      }
    }
    &.active {
      color: #004ea3;
      svg path {
        fill: #004ea3;
      }
    }
  }
`;

export const ProfileTitle = styled.h2`
  font-weight: 400;
  font-size: 34px;
  line-height: 42px;
  color: #0e1118;
  margin-bottom: 12px;
`;

export const ProfileDesc = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #0e1118;
  margin-bottom: 16px;
  font-weight: 500;
`;
export const InputWrap = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  width: 100%;
  max-width: 467px;
  &.twitter-wrap {
    position: relative;
    input:not([type="checkbox"]) {
      padding-left: 50px;
    }
    img {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 14%;
      left: 2%;
    }
  }
  label {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
  }
  button[type="submit"] {
    display: flex;
    align-items: center;
    padding: 12px 32px;
    background: #004ea3;
    border-radius: 4px;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    display: block;
    margin-left: auto;
    margin-top: 24px;
    max-width: 202px;
    width: 100%;
  }

  input:not([type="checkbox"]) {
    width: 100%;
    padding: 11px 20px;
    background-color: transparent;
    border: 1px solid #afb4b9;
    outline: none;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #0e1118;

    :disabled {
      background: #afb4b9;
      color: #0e1118;
      ::placeholder {
        color: #0e1118;
      }
    }
  }
`;
