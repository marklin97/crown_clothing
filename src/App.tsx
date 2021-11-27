import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import SignInAndSignUp from "./Pages/SignInAndSignUp/SignInAndSignUp";
import Header from "./Components/Header/Header";
import { auth, createUserProfileDocument } from "./Firebase/firebase.utils";
import "./App.css";

const App = (): JSX.Element => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    //The onAuthStateChanged() function returns the unsubscribe function for the observer.
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const userRef = await createUserProfileDocument(user);
          userRef.get().then((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        } catch (error) {
          console.log(error);
        }
        console.log(currentUser);
      }

      setCurrentUser(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [currentUser]);
  return (
    <div>
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
