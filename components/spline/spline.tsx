import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function SplineScene() {
  return (
    // <Spline scene="https://prod.spline.design/9nxhJkCellODUkIn/scene.splinecode" />
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/bI6wGt069uMkN3el/scene.splinecode" />
      </Suspense>
  );
}
