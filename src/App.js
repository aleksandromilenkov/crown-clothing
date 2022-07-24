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
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

function App(props) {
  //const [currentUser, setCurrentUser] = useState({});
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
    const { setCurrentUser } = props;
    const unlisten = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);
        userRef.onSnapshot((snapshot) => {
          const user = {
            id: snapshot.id,
            ...snapshot.data(),
          };
          setCurrentUser(user);
        });
      } else {
        setCurrentUser(null);
      }
      setCurrentUser(authUser);
      //authUser ? setCurrentUser(authUser) : setCurrentUser(null);
    });

    return () => {
      unlisten();
    };
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
