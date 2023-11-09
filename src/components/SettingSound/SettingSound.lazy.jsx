import React, { lazy, Suspense } from "react";

const LazySettingSound = lazy(() => import("./SettingSound"));

const SettingSound = (props) => (
  <Suspense fallback={null}>
    <LazySettingSound {...props} />
  </Suspense>
);

export default SettingSound;
