import React, { lazy, Suspense } from "react";

const LazyLiveOverallPicks = lazy(() => import("./LiveOverallPicks"));

const LiveOverallPicks = (props) => (
  <Suspense fallback={null}>
    <LazyLiveOverallPicks {...props} />
  </Suspense>
);

export default LiveOverallPicks;
