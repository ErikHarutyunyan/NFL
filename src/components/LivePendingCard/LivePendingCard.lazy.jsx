import React, { lazy, Suspense } from "react";

const LazyLivePendingCard = lazy(() => import("./LivePendingCard"));

const LivePendingCard = (props) => (
  <Suspense fallback={null}>
    <LazyLivePendingCard {...props} />
  </Suspense>
);

export default LivePendingCard;
