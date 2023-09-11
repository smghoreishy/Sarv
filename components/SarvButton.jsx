import * as React from "react";
import { PlasmicSarvButton } from "./plasmic/sarv/PlasmicSarvButton";

function SarvButton_(props, ref) {
  const { plasmicProps } = PlasmicSarvButton.useBehavior(props, ref);
  return <PlasmicSarvButton {...plasmicProps} />;
}

const SarvButton = React.forwardRef(SarvButton_);

export default Object.assign(SarvButton, { __plumeType: "button" });
