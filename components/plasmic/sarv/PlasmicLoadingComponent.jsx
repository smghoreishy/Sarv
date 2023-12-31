// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aUZyoBv2znBVirsF7auAUJ
// Component: HDv_HWbccKet
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_landing_page_starter_css from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qLp2o69PMLTDkVR2ydizGB/projectcss
import projectcss from "./plasmic_sarv.module.css"; // plasmic-import: aUZyoBv2znBVirsF7auAUJ/projectcss
import sty from "./PlasmicLoadingComponent.module.css"; // plasmic-import: HDv_HWbccKet/css

createPlasmicElementProxy;

export const PlasmicLoadingComponent__VariantProps = new Array();

export const PlasmicLoadingComponent__ArgProps = new Array();

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

function PlasmicLoadingComponent__RenderFunc(props) {
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
  return (
    <section
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
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"172px"}
        loading={"lazy"}
        src={{
          src: "/plasmic/sarv/images/eclipse1S200Px1Svg.svg",
          fullWidth: 150,
          fullHeight: 150,
          aspectRatio: 1
        }}
      />
    </section>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLoadingComponent__ArgProps,
          internalVariantPropNames: PlasmicLoadingComponent__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLoadingComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoadingComponent";
  } else {
    func.displayName = `PlasmicLoadingComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicLoadingComponent = Object.assign(
  // Top-level PlasmicLoadingComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicLoadingComponent
    internalVariantProps: PlasmicLoadingComponent__VariantProps,
    internalArgProps: PlasmicLoadingComponent__ArgProps
  }
);

export default PlasmicLoadingComponent;
/* prettier-ignore-end */
