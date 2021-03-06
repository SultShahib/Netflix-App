import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Browse from "./pages/browse";
import HomePage from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import { IsUserRedirect, ProtectorRoute } from "./helpers/routeAuth";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/use-auth-listener";

export default function App() {
  const home = "/home";
  const home2 = "/HOME";
  const home3 = "/Netflix-Clone";
  const home4 = "/";

  // User is passed down to IsUserRedirect and ProtectorRoute to check if there is or isnt user
  // IsUserRedirect: If there is a existing user, redirect to browse page. Otherwise return children (<SignIn /> and <SignUp /> page)
  // ProtectorRoute: If there isn't any existing user, prevent from going to browse page and redirect to signIn page.

  const user = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.browse}
          path={ROUTES.signin}
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.browse}
          path={ROUTES.signup}
        >
          <SignUp />
        </IsUserRedirect>
        <ProtectorRoute user={user} path={ROUTES.browse}>
          <Browse />
        </ProtectorRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.browse} path={home2}>
          <HomePage />
        </IsUserRedirect>
        <Route path={home3}>
          <Redirect to={home2} />
        </Route>
        <Route path={home}>
          <Redirect to={home2} />
        </Route>
        <Route path={home4}>
          <Redirect to={home2} />
        </Route>
      </Switch>
    </Router>
  );
}
