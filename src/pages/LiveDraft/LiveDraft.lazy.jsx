import React, { lazy, Suspense } from "react";

const LazyLiveDraft = lazy(() => import("./LiveDraft"));

const LiveDraft = (props) => (
  <Suspense fallback={null}>
    <LazyLiveDraft {...props} />
  </Suspense>
);

export default LiveDraft;
