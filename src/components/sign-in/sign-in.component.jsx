import React from "react";
import { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";
const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "email") {
      setEmail(e.target.value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          required
          handleChange={handleChange}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
