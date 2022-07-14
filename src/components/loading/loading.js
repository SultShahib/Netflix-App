import React from "react";
import {
  LockBody,
  ReleaseBody,
  Spinner,
  Picture,
} from "./styles/loadingStyles.js";
import logoSrc from "../../images/users/2.png";

// Component for loading spinner after user clicks on user-profile before directed to browse page

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={logoSrc} data-testid="loading-picture" />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
