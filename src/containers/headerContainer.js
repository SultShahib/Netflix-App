import Header from "../components/header/header";
import Logo from "../images/icons/logo.svg";
import bg from "../images/misc/home-bg.jpg";

// Header Compound Component rendering the header component (used in Home, SignIn, SignUp)

export default function HeaderContainer({ children }) {
  return (
    <Header bg={true} src={bg}>
      <Header.Frame>
        <Header.Logo to={"/HOME"} src={Logo} alt="Netflix Logo" />
        <Header.ButtonLink to={"/signin"}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
