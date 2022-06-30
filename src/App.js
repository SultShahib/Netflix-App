import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Browse from "./pages/browse";
import HomePage from "./pages/home";
import SignIn from "./pages/signin";
import SignOut from "./pages/signout";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.BROWSE} element={<Browse />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.SIGN_OUT} element={<SignOut />} />
      </Routes>
    </Router>
  );
}

export default App;
