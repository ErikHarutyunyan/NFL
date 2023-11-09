import React, { lazy, Suspense } from "react";

const LazyLiveFooter = lazy(() => import("./LiveFooter"));

const LiveFooter = (props) => (
  <Suspense fallback={null}>
    <LazyLiveFooter {...props} />
  </Suspense>
);

export default LiveFooter;
