import styled from "styled-components";

export const HeaderWrap = styled.header`
    background: #022142;
    padding: 4px 0;
`;
export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
      flex: 1 1 auto;
    }
   & img {
      display: block;
      object-fit: cover;
      width: 52px;
    }
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;

    li:not(:first-child) {
      margin-left: 40px;
    }
    li a {
      color: #ffffff;
      text-decoration: none;
      font-family: "Saira Semi Condensed", sans-serif;
      font-weight: 500;
      &.active {
        text-decoration: underline;
      }
    }
  }
`;
export const BtnWrap = styled.div`
  button {
    font-size: 16px;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 600;
    padding: 4px 24px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 24px;
    opacity: 0.9;
    transition: all 0.3s ease;
    background-color: #fff;
    color:#000000;
     :hover {
      opacity: 1;
    }
  }
  button.sign-in {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    margin-left: 0;
  }
`;

export const HeaderBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileInfo = styled.div`
display: flex;
align-items: center;
gap: 15px;
color: #fff;
a{
  display: flex;
  align-items: center;
  gap:6px;
  color: #fff;
}
  img {
    width: 22px;
    height: auto;
  }
`;