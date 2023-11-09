import React, { lazy, Suspense } from "react";

const LazyLiveBody = lazy(() => import("./LiveBody"));

const LiveBody = (props) => (
  <Suspense fallback={null}>
    <LazyLiveBody {...props} />
  </Suspense>
);

export default LiveBody;
