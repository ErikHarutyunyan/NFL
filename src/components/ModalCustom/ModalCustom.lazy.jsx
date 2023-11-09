import React, { lazy, Suspense } from "react";

const LazyModalCustom = lazy(() => import("./ModalCustom"));

const ModalCustom = (props) => (
  <Suspense fallback={null}>
    <LazyModalCustom {...props} />
  </Suspense>
);

export default ModalCustom;
