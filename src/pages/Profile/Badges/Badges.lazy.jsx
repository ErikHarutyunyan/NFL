import React, { lazy, Suspense } from "react";

const LazyBadges = lazy(() => import("./Badges"));

const Badges = (props) => (
  <Suspense fallback={null}>
    <LazyBadges {...props} />
  </Suspense>
);

export default Badges;
