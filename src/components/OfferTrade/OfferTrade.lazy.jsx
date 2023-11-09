import React, { lazy, Suspense } from "react";

const LazyOfferTrade = lazy(() => import("./OfferTrade"));

const OfferTrade = (props) => (
  <Suspense fallback={null}>
    <LazyOfferTrade {...props} />
  </Suspense>
);

export default OfferTrade;
