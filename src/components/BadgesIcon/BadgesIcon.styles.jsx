import styled from "styled-components";

export const BadgesWrap = styled.div`
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    height: auto;
    max-width: ${(props) => (props.width ? props.width : "78px")};
  }
`;