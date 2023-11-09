import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 40px;
`;

export const RoomBlock = styled.div`
  /* display: flex; */
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: auto;
  min-height: 483px;

  .room-left {
    display: flex;
    max-width: 830px;
    width: 100%;
    margin: 0 auto;
    align-items: flex-start;
    gap: 16px;
  }
  .room-right {
    display: flex;
    max-width: 830px;
    width: 100%;
    margin: 0 auto;
    align-items: flex-start;
    flex-direction: row-reverse;
    gap: 16px;
    .room-text {
      text-align: right;
      p:first-child {
        background: #c5eed1;
      }
    }
  }
  .room-text {
    text-align: left;
    p:first-child {
      border-radius: 30px;
      background: #e6eef6;
      padding: 16px 24px;
    }
    p:last-child {
      color: #989ea4;
      font-family: "Saira Semi Condensed";
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      margin-top: 5px;
    }
  }
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #afb4b9;
  background: #fff;
  justify-content: space-between;
  /* textarea {
    border-radius: 4px;
    padding: 15px 37px 13px 16px;
    border: none;
    resize: none;
    width: 100%;
    font-family: "Saira Semi Condensed";
    height: auto;
    :focus {
      outline: none;
    }
  } */
  .textarea[contenteditable]:empty::before {
    content: "Type a message";
    color: gray;
  }
  .textarea {
    display: block;
    width: 100%;
    overflow: hidden;
    resize: both;
    min-height: 40px;
    line-height: 20px;
    padding: 12px 52px 12px 16px;
    resize: none;
  }
  p {
    width: 100%;
    display: flex;
    text-align: left;
    position: relative;
    align-items: center;
  }
  button {
    margin-right: 13px;
    position: absolute;
    right: 0;
    top: 22%;
  }
`;