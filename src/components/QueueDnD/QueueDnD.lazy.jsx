import React, { lazy, Suspense } from "react";

const LazyQueueDnD = lazy(() => import("./QueueDnD"));

const QueueDnD = (props) => (
  <Suspense fallback={null}>
    <LazyQueueDnD {...props} />
  </Suspense>
);

export default QueueDnD;
