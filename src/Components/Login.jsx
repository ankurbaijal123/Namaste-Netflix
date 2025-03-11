// Login.js
import Header from "./Header";
import React from "react";
import { useState, useRef } from "react";
import { checkValidate } from "../utils/validate";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { background, profile } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux"

  
const Login = () => {
  const [button, setButton] = useState("Sign In");
  const onClickHandler = () => {
    button === "Sign In" ? setButton("Sign Up") : setButton("Sign In");
  };

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const confirmpassword = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlebuttonclick = () =>{
    const message = checkValidate(email.current.value, password.current.value) 
    setErrorMessage(message)
    if (message) return;
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    navigate("/browse")
  
  }) 
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " - " +  errorMessage)
  });

  }
  const handlebuttonclickSignup = () =>{
    const message = checkValidate(email.current.value, password.current.value) 
    (confirmpassword.current.value)
    setErrorMessage(message)
    if (password.current.value !== confirmpassword.current.value) {
      setErrorMessage("Passwords do not match!");
    }  

    if (message === null)(
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    updateProfile(user, {
      displayName: name.current.value,
      photoURL: profile,
      
    }).then(() => {
      // Profile updated!
      const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      navigate("/browse")
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message)
    });
    
  })  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " - " +  errorMessage)
    // ..
  })
    )

  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={background}
          alt="background"
        ></img>
      </div>
      <form onSubmit={(e) => e.preventDefault()}
      className="w-3/12 absolute p-10 bg-black text-white my-24 mx-auto right-0 left-0 bg-opacity-80">
        {button === "Sign In" ? (
          <>
            <h1 className="font-bold text-3xl py-4">Sign In</h1>
            <input
            ref = {email}
              type="text"
              placeholder="Email Address"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-90"
            />
            <input
            ref = {password}
              type="password"
              placeholder="Password"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-90"
            />
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handlebuttonclick}>
              Sign In{" "}
            </button>
            <p className="py-4 ">
              New to Netflix ? <button onClick={onClickHandler}>Sign Up</button>{" "}
              Now
            </p>
          </>
        ) : (
          <>
            <h1 className="font-bold text-3xl py-4">Sign Up</h1>
            <input
               ref = {name}
              type="text"
              placeholder="Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-90"
            />
            <input
              ref = {email}
              type="text"
              placeholder="Email Address"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-90"
            />
            <input
            ref = {password}
              type="password"
              placeholder="Password"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-90"
            />
            <input
            ref = {confirmpassword}
              type="password"
              placeholder=" Confirm Password"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-90"
            />
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button type="submit"
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handlebuttonclickSignup}>
              Sign Up
            </button>
            <p className="py-4 ">
              Already registered ? <button onClick={onClickHandler}>Sign In</button> Now
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
