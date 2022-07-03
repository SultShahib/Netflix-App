import React from "react";
import useContent from "../hooks/use-content";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const { seriesData, filmsData } = selectionFilter({ series, films });
  console.log(seriesData);
  console.log(filmsData);

  return <p>Hello from the Browse Page</p>;
}
