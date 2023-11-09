import React, { lazy, Suspense } from "react";

const LazyMultiPlayerFind = lazy(() => import("./MultiPlayerFind"));

const MultiPlayerFind = (props) => (
  <Suspense fallback={null}>
    <LazyMultiPlayerFind {...props} />
  </Suspense>
);

export default MultiPlayerFind;
