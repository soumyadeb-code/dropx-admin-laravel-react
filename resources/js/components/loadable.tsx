import React, { Suspense, ComponentType } from "react";
import PageLoader from "./ui/page-loader";

export const Loadable = <P extends object>(Component: ComponentType<P>) => {
  return function LoadableComponent(props: P) {
    return (
      <Suspense fallback={<PageLoader />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default Loadable;
