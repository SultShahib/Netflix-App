import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profilesContainer";
import Loading from "../components/loading/loading";
import Header from "../components/browse/browse";
import Card from "../components/card/card";
import * as ROUTES from "../constants/routes.js";
import logo from "../images/icons/logo.svg";
import Fuse from "fuse.js";
import { FooterContainer } from "./footerContainer";
import Player from "../components/player/player";
import { useHistory } from "react-router-dom";

export default function BrowseContainer({ children, slides, ...restProps }) {
  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 2 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.home} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => {
                setCategory("series");
                setSlideRows(slides["series"]);
              }}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => {
                setCategory("films");
                setSlideRows(slides["films"]);
              }}
            >
              {console.log(category)}
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink
                    onClick={() =>
                      firebase
                        .auth()
                        .signOut()
                        .then(() => {
                          history.replace("/");
                          console.log("signout success");
                        })
                        .catch((err) => {
                          console.log(err);
                        })
                    }
                  >
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch The Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => {
          return (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map((item) => {
                  return (
                    <Card.Item key={item.docId} item={item}>
                      <Card.Image
                        src={require(`../images/${category}/${item.genre}/${item.slug}/small.jpg`)}
                      />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  );
                })}
              </Card.Entities>
              <Card.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video
                    src={require("../videos/romanEmpirePill.mp4")}
                  />
                </Player>
              </Card.Feature>
            </Card>
          );
        })}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer
      user={user}
      setProfile={setProfile}
      loading={loading}
    />
  );
}
