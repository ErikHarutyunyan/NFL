import React from 'react'
// Styles
import {InputWrap, RoomBlock, Wrapper} from "./RoomChat.styles"
import { SendChat } from '../Icons/Icons';
const RoomChat = () => {
  return (
    <Wrapper>
      <RoomBlock>
        <div className="room-left">
          <div>
            <img
              src={"https://api.nfldraftfanatics.com/media/hou.png"}
              alt=""
              width={48}
              height={48}
            />
          </div>
          <div className="room-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <p>10 min ago</p>
          </div>
        </div>
        <div className="room-right">
          <div>
            <img
              src={"https://api.nfldraftfanatics.com/media/det.png"}
              alt=""
              width={48}
              height={48}
            />
          </div>
          <div className="room-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <p>10 min ago</p>
          </div>
        </div>
      </RoomBlock>
      <div>
        {/* <form action=""> */}
        <InputWrap>
          <p>
            <span class="textarea" role="textbox" contentEditable>
              
            </span>
          <button type="submit">
            <SendChat />
          </button>
          </p>
        </InputWrap>
        {/* </form> */}
      </div>
    </Wrapper>
  );
}

export default RoomChat