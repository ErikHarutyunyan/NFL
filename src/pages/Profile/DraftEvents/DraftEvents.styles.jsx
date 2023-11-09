import styled from "styled-components";

export const Wrapper = styled.section``;

export const MyEventWrap = styled.div`
  table {
    border-spacing: 0;
    width: 100%;
    border: 1px solid #004ea3;
    border-radius: 8px;
    border-bottom-right-radius: 0px;
    thead {
      border-radius: 8px;
      th {
        border-bottom: 1px solid #004ea3;
      }
      tr {
        th {
          :first-child {
            border-top-left-radius: 8px;
          }
          :last-child {
            border-top-right-radius: 8px;
          }
        }
      }
    }
    tbody {
      td {
        border-bottom: 1px solid #004ea3;

        text-align: center;
      }
      tr:last-child {
        td {
          :first-child {
            border-bottom-left-radius: 8px;
          }
          :last-child {
            border-bottom-right-radius: 8px;
          }
        }
      }
    }
    tr {
      background-color: var(--color-gray);
      border-radius: 8px;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 16px 64px 16px 24px;
      border-right: 1px solid #004ea3;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

export const ViewWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .list-name {
    display: flex;
    align-items: center;
    gap: 10px;
    a {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #107c41;
      font-family: "Saira Semi Condensed", sans-serif;
      cursor: pointer;
    }
  }
`;



export const SelectEvent = styled.div`
  display: flex;
  align-items: center;

  button {
    display: block;
    padding: 8px 12px;
    border-bottom: 1px solid #cad2da;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    font-family: "Saira Semi Condensed", sans-serif;
    color: #0e1118;
    transition: all 0.3s linear;
    cursor: pointer;
    &.active {
      border-bottom: 1px solid #004ea3;
      color: #004ea3;
    }
    :hover {
      border-bottom: 1px solid #004ea3;
      color: #004ea3;
    }
  }
`;

export const Container = styled.div`
  padding: 24px 0;
`;

export const FormWrap = styled.form`
  width: 100%;
  max-width: 730px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;

export const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  width: 100%;
`;

export const BtnWrap = styled.div`
  button[type="submit"] {
    background-color: #004ea3;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    border-radius: 4px;
    padding: 13px 32px;
    border: none;
    cursor: pointer;
    transition: all 0.3s linear;
    :hover {
      opacity: .9;
    }
  }
  
`;

export const InputContainer = styled.div`
  max-width: 345px;
  width: 100%;
  position: relative;
  font-family: "Saira Semi Condensed", sans-serif;
  label {
    display: block;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 4px;
  }
  h6 {
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    margin-bottom: 12px;
  }
  .event-file {
    display: flex;
    align-items: center;
    gap: 20px;

    a,span {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #107c41;
      font-family: "Saira Semi Condensed", sans-serif;
      cursor: pointer;
    }
  }
  .event-info {
    span {
      color: #004ea3;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const InputWrap = styled.input`
  outline: ${(props) => (props.error ? "1px solid red" : "1px solid #AFB4B9")};
  width: 100%;
  height: 42px;
  color: #0e1118;
  background-color: transparent;
  border-radius: 4px;
  padding: 11px 9px 11px 16px;
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  position: absolute;
  top: 110%;
`;

export const ErrorWrap = styled.div`
  position: relative;
  div {
    position: inherit;
    text-align: center;
    margin-bottom: 5px;
  }
`;

export const GenerateEventBlock = styled.div`
  position: relative;

  .generate {
    position: absolute;
    top: 8px;
    right: 11px;
    color: #004ea3;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-decoration-line: underline;
    cursor: pointer;
  }
  .icon {
    position: absolute;
    top: 8px;
    left: 11px;
  }
  & .event-id {
    padding-left: 35px;
    &::placeholder {
    }
  }
`;

export const ActionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 25px;
    cursor: pointer;
  }
`;

export const BackArrow = styled.div`
  cursor: pointer;
  svg path {
    color: #004ea3;
  }

`;

export const ViewItem = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    max-width: 200px;
    width: 100%;
    text-align: left;
  }
  p:has(span) {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  div {
    display: flex;
    align-items: center;

  }
`;

export const ChooseSubs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  h2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 41.6px;
    margin-bottom: 12px;
  }
  button {
    padding: 12px 32px;
    background: #004ea3;
    border-radius: 4px;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    display: block;
    margin: 0 auto;
    margin-top: 24px;
    cursor: pointer;
  }
`;