import { Link } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./styles/headerStyles";

// Components for the header section in Home-Page, Sign-in, Sign-Up
export default function Header({ bg = true, src, children, ...restProps }) {
  return bg ? (
    <Background src={src} {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

Header.ButtonLink = function HeaderButtonLinnk({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
