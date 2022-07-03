import React from "react";
import BrowseContainer from "../containers/browseContainer";
import useContent from "../hooks/use-content";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
