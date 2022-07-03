export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        series: series.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Crime",
        series: series.filter((item) => item.genre === "crime"),
      },
      {
        title: "Feel Good",
        series: series.filter((item) => item.genre === "feel-good"),
      },
      {
        title: "Comedy",
        series: series.filter((item) => item.genre === "comedies"),
      },
    ],

    films: [
      {
        title: "Drama",
        films: films.filter((item) => item.genre === "drama"),
      },
      {
        title: "Thriller",
        films: films.filter((item) => item.genre === "thriller"),
      },
      {
        title: "Children",
        films: films.filter((item) => item.genre === "children"),
      },
      {
        title: "Suspense",
        films: films.filter((item) => item.genre === "suspense"),
      },
      {
        title: "Romance",
        films: films.filter((item) => item.genre === "romance"),
      },
      {
        title: "Suspense",
        films: films.filter((item) => item.genre === "suspense"),
      },
    ],
  };
}
