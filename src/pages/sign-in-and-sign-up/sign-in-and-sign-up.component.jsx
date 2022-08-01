import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn>SIGN IN</SignIn>
      <SignUp>SIGN UP</SignUp>
    </div>
  );
};

export default SignInAndSignUp;
