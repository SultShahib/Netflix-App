import hometv from "../images/misc/home-tv.jpg";
import mobieTv from "../images/misc/home-mobile.jpg";
import homeImac from "../images/misc/home-imac.jpg";

export const jumboData = [
  {
    id: 1,
    title: "Enjoy on your TV.",
    subTitle:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    image: hometv,
    alt: "Tiger King on Netflix",
    direction: "row",
  },
  {
    id: 2,
    title: "Download your programmes to watch on the go.",
    subTitle: "Save your data and watch all your favourites offline.",
    // image: "/images/misc/home-mobile.jpg",
    image: mobieTv,
    alt: "Watch on mobile",
    direction: "row-reverse",
  },
  {
    id: 3,
    title: "Watch everywhere.",
    subTitle:
      "Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.",
    // image: "/images/misc/home-imac.jpg",
    image: homeImac,
    alt: "Money Heist on Netflix",
    direction: "row",
  },
];
