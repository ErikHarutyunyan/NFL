import React, { lazy, Suspense } from "react";

const LazyRoomChat = lazy(() => import("./RoomChat"));

const RoomChat = (props) => (
  <Suspense fallback={null}>
    <LazyRoomChat {...props} />
  </Suspense>
);

export default RoomChat;
