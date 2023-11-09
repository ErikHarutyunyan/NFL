import React, { lazy, Suspense } from "react";

const LazyLivePlayerPool = lazy(() => import("./LivePlayerPool"));

const LivePlayerPool = (props) => (
  <Suspense fallback={null}>
    <LazyLivePlayerPool {...props} />
  </Suspense>
);

export default LivePlayerPool;
