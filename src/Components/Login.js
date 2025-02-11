// Login.js
import Header from "./Header";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [button, setButton] = useState("Sign In");
  const onClickHandler = () => {
    button === "Sign In" ? setButton("Sign Up") : setButton("Sign In");
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_small.jpg"
          alt="background"
        ></img>
      </div>
      <form className="w-3/12 absolute p-10 bg-black text-white my-24 mx-auto right-0 left-0 bg-opacity-80">
        {button === "Sign In" ? (
          <>
            <h1 className="font-bold text-3xl py-4">Sign In</h1>
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-90"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-90"
            />
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
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
              type="text"
              placeholder="Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-90"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-90"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-90"
            />
            <input
              type="password"
              placeholder=" Confirm Password"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-90"
            />
            <button type="submit"
            className="p-4 my-6 bg-red-700 w-full rounded-lg">
              Sign Up
            </button>
            <p className="py-4 ">
              Already have an Account?
              <button onClick={onClickHandler}>Sign In</button> Now
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
