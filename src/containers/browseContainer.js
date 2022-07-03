import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profilesContainer";
import Loading from "../components/loading/loading";
import Header from "../components/browse/browse";
import Card from "../components/card/card";
import * as ROUTES from "../constants/routes.js";
import logo from "../images/icons/logo.svg";

export default function BrowseContainer({ children, slides, ...restProps }) {
  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.home} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
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
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
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
                {slideItem.series.map((item) => {
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
            </Card>
          );
        })}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer
      user={user}
      setProfile={setProfile}
      loading={loading}
    />
  );
}
