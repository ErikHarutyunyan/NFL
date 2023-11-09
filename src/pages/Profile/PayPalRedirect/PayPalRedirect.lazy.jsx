import React, { lazy, Suspense } from "react";

const LazyPayPalRedirect = lazy(() => import("./PayPalRedirect"));

const PayPalRedirect = (props) => (
  <Suspense fallback={null}>
    <LazyPayPalRedirect {...props} />
  </Suspense>
);

export default PayPalRedirect;
