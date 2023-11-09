import React, { lazy, Suspense } from "react";

const LazyLiveSettingChat = lazy(() => import("./LiveSettingChat"));

const LiveSettingChat = (props) => (
  <Suspense fallback={null}>
    <LazyLiveSettingChat {...props} />
  </Suspense>
);

export default LiveSettingChat;
