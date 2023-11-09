import React from 'react'
// Styles
import {
  BtnWrap,
  SettingBox,
  SettingWrap,
  Wrapper,
  ChatWrap,
} from "./LiveSettingChat.styles";
import { ChatIcon, SettingIcon } from '../Icons/Icons';
import useModal from '../../hooks/useModal';
import ModalCustom from '../ModalCustom/ModalCustom';
import SettingSound from '../SettingSound/SettingSound';
import RoomChat from '../RoomChat/RoomChat';
const LiveSettingChat = () => {
 const {
    isOpen: isOpenSetting,
    openModal: openModalSetting,
    closeModal: closeModalSetting,
  } = useModal();
 const {
    isOpen: isOpenChat,
    openModal: openModalChat,
    closeModal: closeModalChat,
  } = useModal();
  return (
    <Wrapper>
      <SettingBox>
        <button className="settings" onClick={() => openModalSetting()}>
          <SettingIcon />
          <span>Settings</span>
        </button>
        <button className="chat" onClick={() => openModalChat()}>
          <ChatIcon />
          <span>Room chat</span>
        </button>
      </SettingBox>
      {isOpenSetting && (
        <ModalCustom isOpen={isOpenSetting}>
          <SettingWrap>
            <h2>Settings</h2>
            <SettingSound />
            <BtnWrap>
              <button onClick={closeModalSetting}>Close</button>
            </BtnWrap>
          </SettingWrap>
        </ModalCustom>
      )}
      {isOpenChat && (
        <ModalCustom isOpen={isOpenChat}>
          <ChatWrap>
            <h2>Room chat</h2>
            <RoomChat />
            <BtnWrap>
              <button onClick={closeModalChat}>Close</button>
            </BtnWrap>
          </ChatWrap>
        </ModalCustom>
      )}
    </Wrapper>
  );
}

export default LiveSettingChat