import React, { lazy, Suspense } from "react";

const LazyLiveMyPicks = lazy(() => import("./LiveMyPicks"));

const LiveMyPicks = (props) => (
  <Suspense fallback={null}>
    <LazyLiveMyPicks {...props} />
  </Suspense>
);

export default LiveMyPicks;
