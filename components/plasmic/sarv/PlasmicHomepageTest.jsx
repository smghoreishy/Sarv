// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aUZyoBv2znBVirsF7auAUJ
// Component: Gk57VTMUUW
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: 7UkPT0uRfk9/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_landing_page_starter_css from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qLp2o69PMLTDkVR2ydizGB/projectcss
import projectcss from "./plasmic_sarv.module.css"; // plasmic-import: aUZyoBv2znBVirsF7auAUJ/projectcss
import sty from "./PlasmicHomepageTest.module.css"; // plasmic-import: Gk57VTMUUW/css

createPlasmicElementProxy;

export const PlasmicHomepageTest__VariantProps = new Array();

export const PlasmicHomepageTest__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepageTest__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const new$Queries = {
    importBuy: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "gpDhHDGegTa35eQVmMDFNX",
            opId: "f0cb58bb-189e-4790-a9bc-ca4688fb1bec",
            userArgs: {},
            cacheKey: "plasmic.$.UUROx137p.$.",
            invalidatedKeys: null,
            roleId: null
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          } else {
            throw e;
          }
        }
      })()
    ),

    componentData: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "g2uxxaev1HFNY4HHP1PTDS",
            opId: "613ec56d-90ac-4ebf-b2be-3f415f35c23d",
            userArgs: {},
            cacheKey: "plasmic.$.0BV4YRJH47U0.$.",
            invalidatedKeys: null,
            roleId: null
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          } else {
            throw e;
          }
        }
      })()
    )
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
  }
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens,
          plasmic_landing_page_starter_css.plasmic_tokens,
          sty.root
        )}
      >
        <Fetcher
          data-plasmic-name={"dataFetcher"}
          data-plasmic-override={overrides.dataFetcher}
          className={classNames("__wab_instance", sty.dataFetcher)}
          dataOp={(() => {
            try {
              return undefined;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          queries={$queries}
        />
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "dataFetcher"],
  dataFetcher: ["dataFetcher"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepageTest__ArgProps,
          internalVariantPropNames: PlasmicHomepageTest__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepageTest__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepageTest";
  } else {
    func.displayName = `PlasmicHomepageTest.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard(WrappedComponent) {
  const PageGuard = props => (
    <p.PlasmicPageGuard
      minRole={null}
      appId={"aUZyoBv2znBVirsF7auAUJ"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </p.PlasmicPageGuard>
  );

  return PageGuard;
}

function withUsePlasmicAuth(WrappedComponent) {
  const WithUsePlasmicAuthComponent = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "aUZyoBv2znBVirsF7auAUJ"
    });
    return (
      <p.PlasmicDataSourceContextProvider
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </p.PlasmicDataSourceContextProvider>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicHomepageTest = Object.assign(
  // Top-level PlasmicHomepageTest renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    dataFetcher: makeNodeComponent("dataFetcher"),
    // Metadata about props expected for PlasmicHomepageTest
    internalVariantProps: PlasmicHomepageTest__VariantProps,
    internalArgProps: PlasmicHomepageTest__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepageTest;
/* prettier-ignore-end */