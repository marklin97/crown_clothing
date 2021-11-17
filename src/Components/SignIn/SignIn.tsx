import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle } from "../../Firebase/firebase.utils";
interface UserInput {
  email: string;
  password: string;
}

const SignIn = (): JSX.Element => {
  const [input, setInput] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    // clears the state
    setInput({ email: "", password: "" });
  };
  const handleChange = (field: keyof UserInput, value: any) => {
    setInput({
      [field]: value,
    } as Pick<UserInput, typeof field>);
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          handleChange={handleChange}
          value={input.email}
          label="Email"
        />
        <FormInput
          type="password"
          value={input.password}
          handleChange={handleChange}
          label="Password"
        />
        <CustomButton label={"Sign In"} type={"submit"} />
        <CustomButton
          label={"Sign In with Google"}
          type={"submit"}
          onClick={signInWithGoogle}
        ></CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
