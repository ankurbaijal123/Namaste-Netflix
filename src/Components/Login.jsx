import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { checkValidate } from "../utils/validate";
import Header from "./Header";
import { background, profile } from "../utils/constants";

const Login = () => {
  const [button, setButton] = useState("Sign In");
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const confirmpassword = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Toggle Sign In / Sign Up
  const onClickHandler = () => {
    setButton(button === "Sign In" ? "Sign Up" : "Sign In");
    setErrorMessage(null);
  };

  // Handle Sign In
  const handleSignIn = async () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = checkValidate(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    try {
      await signInWithEmailAndPassword(auth, emailValue, passwordValue);
      navigate("/browse");
    } catch (error) {
      setErrorMessage(`${error.code} - ${error.message}`);
    }
  };

  // Handle Sign Up
  const handleSignUp = async () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const confirmPasswordValue = confirmpassword.current.value;
    const nameValue = name.current.value;

    // Check password match
    if (passwordValue !== confirmPasswordValue) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    // Validate inputs
    const message = checkValidate(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
      const user = userCredential.user;

      // Update user profile
      await updateProfile(user, { displayName: nameValue, photoURL: profile });

      // Dispatch user to Redux
      const { uid, email, displayName, photoURL } = auth.currentUser;
      dispatch(addUser({ uid, email, displayName, photoURL }));

      navigate("/browse");
    } catch (error) {
      setErrorMessage(`${error.code} - ${error.message}`);
    }
  };

  return (
    <div>
      <Header />
      <div className="fixed -z-10 w-full h-full">
        <img className="w-full h-full object-cover" src={background} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-10 bg-black/80 text-white my-24 mx-auto right-0 left-0 bg-opacity-80"
      >
        {button === "Sign In" ? (
          <>
            <h1 className="font-bold text-3xl py-4">Sign In</h1>
            <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
            <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer" onClick={handleSignIn}>
              Sign In
            </button>
            <p className="py-4 cursor-pointer">
              New to Namaste Movie? <button className="cursor-pointer" onClick={onClickHandler}>Sign Up</button> Now
            </p>
          </>
        ) : (
          <>
            <h1 className="font-bold text-3xl py-4">Sign Up</h1>
            <input ref={name} type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
            <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
            <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
            <input ref={confirmpassword} type="password" placeholder="Confirm Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button type="submit" className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer" onClick={handleSignUp}>
              Sign Up
            </button>
            <p className="py-4 cursor-pointer">
              Already registered? <button className="cursor-pointer" onClick={onClickHandler}>Sign In</button> Now
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
