import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

// AuthListener checks to see if user has signed in before
// Authentication check to prevent users from accessing browse page unless signed in
// Authentication check allows user to be directed right to user profile page whenever they enter website

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return user;
}
