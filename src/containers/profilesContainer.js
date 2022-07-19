import React from "react";
import Header from "../components/header/header";
import * as ROUTES from "../constants/routes";
import logo from "../images/icons/logo.svg";
import Profiles from "../components/profiles/profiles";

// Profile compound component, renders the profile component (user logo section before directed to browse page)

export function SelectProfileContainer({ user, setProfile, loading }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.home} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
