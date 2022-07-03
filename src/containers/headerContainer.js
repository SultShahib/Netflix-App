// import { Routes, BrowserRouter as Route } from "react-router-dom";
import Header from "../components/header/header";
import Logo from "../images/icons/logo.svg";
import bg from "../images/misc/home-bg.jpg";

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

// src={Logo} alt="Netflix Logo"
