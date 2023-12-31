// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/sarv/PlasmicGlobalContextsProvider";
import { UnnamedGlobalGroupOfVariantsContext } from "../components/plasmic/sarv/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants";
import { SegmentContext } from "../components/plasmic/sarv/PlasmicGlobalVariant__Segment";
import { EmptyContext } from "../components/plasmic/sarv/PlasmicGlobalVariant__Empty";
import { PlasmicHomepageTest } from "../components/plasmic/sarv/PlasmicHomepageTest";
import { useRouter } from "next/router";

function HomepageTest() {
  // Use PlasmicHomepageTest to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicHomepageTest are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicHomepageTest is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <EmptyContext.Provider value={undefined}>
      <SegmentContext.Provider value={undefined}>
        <UnnamedGlobalGroupOfVariantsContext.Provider value={undefined}>
          <GlobalContextsProvider>
            <ph.PageParamsProvider
              params={useRouter()?.query}
              query={useRouter()?.query}
            >
              <PlasmicHomepageTest />
            </ph.PageParamsProvider>
          </GlobalContextsProvider>
        </UnnamedGlobalGroupOfVariantsContext.Provider>
      </SegmentContext.Provider>
    </EmptyContext.Provider>
  );
}

export default HomepageTest;
