import React, { useCallback, useState } from "react";
// Styles
import { Wrapper, Overflow } from "./LiveDraft.styles";
import LiveSettingChat from "../../components/LiveSettingChat/LiveSettingChat";
import LiveFooter from "../../components/LiveFooter/LiveFooter";
import LiveBody from "../../components/LiveBody/LiveBody";
const LiveDraft = () => {
  const [isOverflow, setIsOverflow] = useState(false);
  const handleOverflow = useCallback((isOverflow) => {
    setIsOverflow(isOverflow);
  }, []);
  return (
    <Wrapper>
      <LiveSettingChat />
      <LiveBody />
      <LiveFooter handleOverflow={handleOverflow} />
      {isOverflow ? <Overflow /> : null}
    </Wrapper>
  );
};

export default LiveDraft;
