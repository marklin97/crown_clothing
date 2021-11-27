import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, createUserProfileDocument } from "../../Firebase/firebase.utils";
import "./SignUp.styles.scss";
interface UserInput {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = (): JSX.Element => {
  const [input, setInput] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = input;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = input;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setInput({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
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
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={displayName}
          handleChange={(e) => handleChange("displayName", e)}
          label="Display Name"
        />
        <FormInput
          type="email"
          value={email}
          handleChange={(e) => handleChange("email", e)}
          label="Email"
        />
        <FormInput
          type="password"
          value={password}
          handleChange={(e) => handleChange("password", e)}
          label="Password"
        />
        <FormInput
          type="password"
          value={confirmPassword}
          handleChange={(e) => handleChange("confirmPassword", e)}
          label="Confirm Password"
        />
        <CustomButton type="submit" label="SIGN UP" />
      </form>
    </div>
  );
};

export default SignUp;
