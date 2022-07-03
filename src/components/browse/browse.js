import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import {
  Background,
  Feature,
  Text,
  FeatureCallOut,
  Container,
  Link,
  Logo,
  Group,
  Profile,
  Picture,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./styles/browseStyles";
import userLogo from "../../images/users/2.png";
import searchIconLogo from "../../images/icons/search.png";

export default function Header({ bg = true, src, children, ...restProps }) {
  return bg ? (
    <Background src={src} {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <RouterLink to={to}>
      <Logo {...restProps} />
    </RouterLink>
  );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ children, ...restProps }) {
  return <Picture src={userLogo} {...restProps} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.PlayButton = function HeaderPlay({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Search = function HeaderSearch({
  children,
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchIcon, setSearchIcon] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchIcon((searchIcon) => !searchIcon)}>
        <img src={searchIconLogo} alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search for films and series"
        active={searchIcon}
      />
    </Search>
  );
};
