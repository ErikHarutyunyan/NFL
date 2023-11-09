import React, { lazy, Suspense } from "react";

const LazyMultiPlayerTeam = lazy(() => import("./MultiPlayerTeam"));

const MultiPlayerTeam = (props) => (
  <Suspense fallback={null}>
    <LazyMultiPlayerTeam {...props} />
  </Suspense>
);

export default MultiPlayerTeam;
