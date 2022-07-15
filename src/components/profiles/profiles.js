import React from "react";
import {
  Container,
  Title,
  List,
  Name,
  Picture,
  Item,
} from "./styles/profileStyles";

import UserImage from "../../images/users/2.png";

// Component for rendering the profile. Displays user profile before directed to browsing page

export default function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, loading, ...restProps }) {
  return <Picture {...restProps} src={UserImage} />;
};

Profiles.Name = function ProfilesName({ children, loading, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
