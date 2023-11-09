import React, { lazy, Suspense } from "react";

const LazyDraftEvents = lazy(() => import("./DraftEvents"));

const DraftEvents = (props) => (
  <Suspense fallback={null}>
    <LazyDraftEvents {...props} />
  </Suspense>
);

export default DraftEvents;
