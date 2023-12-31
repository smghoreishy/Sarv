// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aUZyoBv2znBVirsF7auAUJ
// Component: UQBLu64Vwq6u
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: hdkwfO6DN97t/component
import ProjectPageRightSide from "../../ProjectPageRightSide"; // plasmic-import: wfbSoySNQG-a/component
import ProjectPageLeftSide from "../../ProjectPageLeftSide"; // plasmic-import: riA0NYS3NAT6/component
import Footer from "../../Footer"; // plasmic-import: wozDst_MhUug/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_landing_page_starter_css from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qLp2o69PMLTDkVR2ydizGB/projectcss
import projectcss from "./plasmic_sarv.module.css"; // plasmic-import: aUZyoBv2znBVirsF7auAUJ/projectcss
import sty from "./PlasmicProjectPage.module.css"; // plasmic-import: UQBLu64Vwq6u/css

createPlasmicElementProxy;

export const PlasmicProjectPage__VariantProps = new Array();

export const PlasmicProjectPage__ArgProps = new Array();

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

function PlasmicProjectPage__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "slug",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "projectPageLeftSide.id",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $ctx.params.slug;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
      },
      {
        path: "projectPageRightSide.title",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
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
          })()
      },
      {
        path: "projectPageRightSide.investmnetType",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "projectPageRightSide.locationName",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "projectPageRightSide.builder",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "projectPageRightSide.startDuration",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "projectPageRightSide.endDuration",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "projectPageRightSide.profitPercent",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "projectPageRightSide.minMoney",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      },
      {
        path: "projectPageRightSide.numberOfFloor",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      },
      {
        path: "projectPageRightSide.totalFloor",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      },
      {
        path: "projectPageRightSide.usefulArea",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      },
      {
        path: "projectPageRightSide.remainArea",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      },
      {
        path: "projectPageRightSide.basePrice",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      },
      {
        path: "projectPageLeftSide.images",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
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
          })()
      },
      {
        path: "projectPageLeftSide.projectInformations",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "projectPageLeftSide.projectProgress2",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          "\u06af\u0632\u0627\u0631\u0634\u06cc \u062f\u0631 \u062d\u0627\u0644 \u062d\u0627\u0636\u0631 \u0645\u0648\u062c\u0648\u062f \u0646\u06cc\u0633\u062a."
      },
      {
        path: "projectPageLeftSide.projectdetails",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "projectPageLeftSide.projectDocuments2",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => []
      },
      {
        path: "projectPageLeftSide.projectAdress",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "projectPageLeftSide.projectMap",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "projectPageRightSide.id",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $ctx.params.slug;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
      },
      {
        path: "projectPageLeftSide.isLoadingLeft",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "projectPageRightSide.isLoadingRight",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],

    [$props, $ctx, $refs]
  );

  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          {(() => {
            try {
              return true;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <section
              data-plasmic-name={"sectionOne"}
              data-plasmic-override={overrides.sectionOne}
              className={classNames(projectcss.all, sty.sectionOne)}
            >
              <section
                data-plasmic-name={"section"}
                data-plasmic-override={overrides.section}
                className={classNames(projectcss.all, sty.section)}
              >
                <Header
                  data-plasmic-name={"header"}
                  data-plasmic-override={overrides.header}
                  className={classNames("__wab_instance", sty.header)}
                />
              </section>
              <div
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                {(() => {
                  const child$Props = {
                    basePrice: p.generateStateValueProp($state, [
                      "projectPageRightSide",
                      "basePrice"
                    ]),

                    builder: p.generateStateValueProp($state, [
                      "projectPageRightSide",
                      "builder"
                    ]),

                    className: classNames(
                      "__wab_instance",
                      sty.projectPageRightSide
                    ),

                    endDuration: p.generateStateValueProp($state, [
                      "projectPageRightSide",
                      "endDuration"
                    ]),

                    id: p.generateStateValueProp($state, [
                      "projectPageRightSide",
                      "id"
                    ]),

                    investmnetType: p.generateStateValueProp($state, [
                      "projectPageRightSide",
                      "investmnetType"
                    ]),

                    locationName: p.generateStateValueProp($state, [
                      "projectPageRightSide",
                      "locationName"
                    ]),

                    minMoney: p.generateStateValueProp($state, [
                      "projectPageRightSide",
                      "minMoney"
                    ]),

                    numberOfFloor: p.generateStateValueProp($state, [
                      "projectPageRightSide",
                      "numberOfFloor"
                    ]),

                    onBasePriceChange: p.generateStateOnChangeProp($state, [
                      "projectPageRightSide",
                      "basePrice"
                    ]),

                    onBuilderChange: p.generateStateOnChangeProp($state, [
                      "projectPageRightSide",
                      "builder"
                    ]),

                    onEndDurationChange: p.generateStateOnChangeProp($state, [
                      "projectPageRightSide",
                      "endDuration"
                    ]),

                    onIdChange: p.generateStateOnChangeProp($state, [
                      "projectPageRightSide",
                      "id"
                    ]),

                    onInvestmnetTypeChange: p.generateStateOnChangeProp(
                      $state,
                      ["projectPageRightSide", "investmnetType"]
                    ),

                    onIsLoadingRightChange: p.generateStateOnChangeProp(
                      $state,
                      ["projectPageRightSide", "isLoadingRight"]
                    ),

                    onLocationNameChange: p.generateStateOnChangeProp($state, [
                      "projectPageRightSide",
                      "locationName"
                    ]),

                    onMinMoneyChange: p.generateStateOnChangeProp($state, [
                      "projectPageRightSide",
                      "minMoney"
                    ]),

                    onNumberOfFloorChange: p.generateStateOnChangeProp($state, [
                      "projectPageRightSide",
                      "numberOfFloor"
                    ]),

                    onProfitPercentChange: p.generateStateOnChangeProp($state, [
                      "projectPageRightSide",
                      "profitPercent"
                    ]),

                    onRemainAreaChange: p.generateStateOnChangeProp($state, [
                      "projectPageRightSide",
                      "remainArea"
                    ]),

                    onStartDurationChange: p.generateStateOnChangeProp($state, [
                      "projectPageRightSide",
                      "startDuration"
                    ]),

                    onTitleChange: p.generateStateOnChangeProp($state, [
                      "projectPageRightSide",
                      "title"
                    ]),

                    onTotalFloorChange: p.generateStateOnChangeProp($state, [
                      "projectPageRightSide",
                      "totalFloor"
                    ]),

                    onUsefulAreaChange: p.generateStateOnChangeProp($state, [
                      "projectPageRightSide",
                      "usefulArea"
                    ]),

                    profitPercent: p.generateStateValueProp($state, [
                      "projectPageRightSide",
                      "profitPercent"
                    ]),

                    remainArea: p.generateStateValueProp($state, [
                      "projectPageRightSide",
                      "remainArea"
                    ]),

                    startDuration: p.generateStateValueProp($state, [
                      "projectPageRightSide",
                      "startDuration"
                    ]),

                    title: p.generateStateValueProp($state, [
                      "projectPageRightSide",
                      "title"
                    ]),

                    totalFloor: p.generateStateValueProp($state, [
                      "projectPageRightSide",
                      "totalFloor"
                    ]),

                    usefulArea: p.generateStateValueProp($state, [
                      "projectPageRightSide",
                      "usefulArea"
                    ])
                  };
                  p.initializePlasmicStates(
                    $state,
                    [
                      {
                        name: "projectPageRightSide.id",
                        initFunc: ({ $props, $state, $queries }) =>
                          (() => {
                            try {
                              return $ctx.params.slug;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()
                      }
                    ],

                    []
                  );

                  return (
                    <ProjectPageRightSide
                      data-plasmic-name={"projectPageRightSide"}
                      data-plasmic-override={overrides.projectPageRightSide}
                      {...child$Props}
                    />
                  );
                })()}
                {(() => {
                  const child$Props = {
                    className: classNames(
                      "__wab_instance",
                      sty.projectPageLeftSide
                    ),

                    id: p.generateStateValueProp($state, [
                      "projectPageLeftSide",
                      "id"
                    ]),

                    onIdChange: p.generateStateOnChangeProp($state, [
                      "projectPageLeftSide",
                      "id"
                    ]),

                    onImagesChange: p.generateStateOnChangeProp($state, [
                      "projectPageLeftSide",
                      "images"
                    ]),

                    onIsLoadingLeftChange: p.generateStateOnChangeProp($state, [
                      "projectPageLeftSide",
                      "isLoadingLeft"
                    ]),

                    onProjectAdressChange: p.generateStateOnChangeProp($state, [
                      "projectPageLeftSide",
                      "projectAdress"
                    ]),

                    onProjectDocuments2Change: p.generateStateOnChangeProp(
                      $state,
                      ["projectPageLeftSide", "projectDocuments2"]
                    ),

                    onProjectInformationsChange: p.generateStateOnChangeProp(
                      $state,
                      ["projectPageLeftSide", "projectInformations"]
                    ),

                    onProjectMapChange: p.generateStateOnChangeProp($state, [
                      "projectPageLeftSide",
                      "projectMap"
                    ]),

                    onProjectProgress2Change: p.generateStateOnChangeProp(
                      $state,
                      ["projectPageLeftSide", "projectProgress2"]
                    ),

                    onProjectdetailsChange: p.generateStateOnChangeProp(
                      $state,
                      ["projectPageLeftSide", "projectdetails"]
                    ),

                    projectAdress: p.generateStateValueProp($state, [
                      "projectPageLeftSide",
                      "projectAdress"
                    ]),

                    projectDocuments2: p.generateStateValueProp($state, [
                      "projectPageLeftSide",
                      "projectDocuments2"
                    ]),

                    projectInformations: p.generateStateValueProp($state, [
                      "projectPageLeftSide",
                      "projectInformations"
                    ]),

                    projectMap: p.generateStateValueProp($state, [
                      "projectPageLeftSide",
                      "projectMap"
                    ]),

                    projectProgress2: p.generateStateValueProp($state, [
                      "projectPageLeftSide",
                      "projectProgress2"
                    ]),

                    projectdetails: p.generateStateValueProp($state, [
                      "projectPageLeftSide",
                      "projectdetails"
                    ])
                  };
                  p.initializePlasmicStates(
                    $state,
                    [
                      {
                        name: "projectPageLeftSide.id",
                        initFunc: ({ $props, $state, $queries }) =>
                          (() => {
                            try {
                              return $ctx.params.slug;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()
                      }
                    ],

                    []
                  );

                  return (
                    <ProjectPageLeftSide
                      data-plasmic-name={"projectPageLeftSide"}
                      data-plasmic-override={overrides.projectPageLeftSide}
                      {...child$Props}
                    />
                  );
                })()}
              </div>
            </section>
          ) : null}
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "sectionOne",
    "section",
    "header",
    "freeBox",
    "projectPageRightSide",
    "projectPageLeftSide",
    "footer"
  ],

  sectionOne: [
    "sectionOne",
    "section",
    "header",
    "freeBox",
    "projectPageRightSide",
    "projectPageLeftSide"
  ],

  section: ["section", "header"],
  header: ["header"],
  freeBox: ["freeBox", "projectPageRightSide", "projectPageLeftSide"],
  projectPageRightSide: ["projectPageRightSide"],
  projectPageLeftSide: ["projectPageLeftSide"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicProjectPage__ArgProps,
          internalVariantPropNames: PlasmicProjectPage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicProjectPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjectPage";
  } else {
    func.displayName = `PlasmicProjectPage.${nodeName}`;
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

export const PlasmicProjectPage = Object.assign(
  // Top-level PlasmicProjectPage renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    sectionOne: makeNodeComponent("sectionOne"),
    section: makeNodeComponent("section"),
    header: makeNodeComponent("header"),
    freeBox: makeNodeComponent("freeBox"),
    projectPageRightSide: makeNodeComponent("projectPageRightSide"),
    projectPageLeftSide: makeNodeComponent("projectPageLeftSide"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicProjectPage
    internalVariantProps: PlasmicProjectPage__VariantProps,
    internalArgProps: PlasmicProjectPage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProjectPage;
/* prettier-ignore-end */
