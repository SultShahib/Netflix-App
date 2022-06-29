import React, { Fragment } from "react";
import { JumbotronContainer } from "./containers/jumbotronContainers";
import { FooterContainer } from "./containers/footerContainer";
import { FaqsContainer } from "./containers/faqs";
import { OptFormContainer } from "./containers/optformContainer";

function App() {
  return (
    <Fragment>
      <JumbotronContainer />
      <FaqsContainer />
      <OptFormContainer />
      <FooterContainer />
    </Fragment>
  );
}

export default App;
