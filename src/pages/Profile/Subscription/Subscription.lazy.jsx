import React, { lazy, Suspense } from "react";

const LazySubscription = lazy(() => import("./Subscription"));

const Subscription = (props) => (
  <Suspense fallback={null}>
    <LazySubscription {...props} />
  </Suspense>
);

export default Subscription;
