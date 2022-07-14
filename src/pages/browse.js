import React from "react";
import BrowseContainer from "../containers/browseContainer";
import useContent from "../hooks/use-content";
import selectionFilter from "../utils/selection-filter";

// Renders the Browse page

export default function Browse() {
  // Get films and series from use-content hook
  const { series } = useContent("series");
  const { films } = useContent("films");

  // Pass Films/Series data to selection filter function
  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
