import React from "react";
import { Route, Redirect } from "react-router-dom";

// Checks to see if there is a user, if so it will redirect to browse page.
// If there is no user then it will return children (SignIn, SignUp, Home)

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

// Checks to see if there is a user, if there isn't it will redirect to SignIn and SignUp page
// Prevents non-users to enter browse page

export function ProtectorRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={(location) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
