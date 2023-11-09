import React, { lazy, Suspense } from "react";

const LazyPlanSubscription = lazy(() => import("./PlanSubscription"));

const PlanSubscription = (props) => (
  <Suspense fallback={null}>
    <LazyPlanSubscription {...props} />
  </Suspense>
);

export default PlanSubscription;
