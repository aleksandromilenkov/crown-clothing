import React from "react";
import {
  Routes,
  Route,
  useParams,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";
import { useState, useEffect } from "react";
import { createUserProfileDocument } from "./firebase/firebase.utils";
const Hats = () => {
  return <h1>HATS PAGE</h1>;
};
function App() {
  const [currentUser, setCurrentUser] = useState({});

  //let unsubscribeFromAuth = null;

  // useEffect(() => {
  //   unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //   });
  // }, currentUser);

  // useEffect(() => {
  //   return () => {
  //     // Anything in here is fired on component unmount.
  //     unsubscribeFromAuth();
  //   };
  // }, []);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);
        userRef.onSnapshot((snapshot) => {
          const user = {
            id: snapshot.id,
            ...snapshot.data(),
          };
          setCurrentUser(user);
          console.log(user);
        });
      } else {
        setCurrentUser(null);
      }
      console.log(currentUser);
      //authUser ? setCurrentUser(authUser) : setCurrentUser(null);
    });
    return () => {
      unlisten();
    };
  }, []);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
