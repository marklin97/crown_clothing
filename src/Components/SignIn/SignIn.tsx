import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, signInWithGoogle } from "../../Firebase/firebase.utils";
import "./SignIn.styles.scss";
interface UserInput {
  email: string;
  password: string;
}

const SignIn = (): JSX.Element => {
  const [input, setInput] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = input;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
    // clears the state & form inputs
    setInput({ email: "", password: "" });
  };
  const handleChange = (
    field: keyof UserInput,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInput({
      ...input,
      [field]: e.target.value,
    } as Pick<UserInput, typeof field>);
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          handleChange={(e) => handleChange("email", e)}
          value={input.email}
          label="Email"
        />
        <FormInput
          type="password"
          value={input.password}
          handleChange={(e) => handleChange("password", e)}
          label="Password"
        />
        <div className="buttons">
          <CustomButton
            label={"Sign In"}
            type={"submit"}
            isGoogleSignIn={false}
          />
          <CustomButton
            label={"Sign In with Google"}
            type={"submit"}
            onClick={signInWithGoogle}
            isGoogleSignIn={true}
          ></CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
