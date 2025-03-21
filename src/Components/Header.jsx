import React, { useState, useEffect, useRef } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { profile } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { Supported_Language } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import logo from "../../logo.png";
const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const handleLanguageChange =(e) =>{
    dispatch (changeLanguage(e.target.value))
  }
  // Toggle Dropdown
  const dropdownClicked = () => {
    setDropDown((prev) => !prev);
  };

  const handleGPTSearch = () =>{
    //Toggle my gpt search here
    dispatch(toggleGptSearchView());

  }

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // Cleanup function to prevent memory leaks
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      {/* Netflix Logo */}
      <img className="w-25 mx-auto md:mx-0" src={logo} alt="logo" />

      {user && (
        <>
          <div className="flex items-center space-x-4 justify-between">
          <div className="text-xl font-semibold text-white shadow-md bg-gray-900 px-4 py-2 rounded-lg">
          Hi, {user?.displayName?.split(" ")[0]}! 🪷
        </div>

            <div className = "flex p-2">
            {showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            {Supported_Language.map(lang => (
              <option key={lang.identifier} value={lang.identifier}>
              {lang.name} 🛞</option>
            ))}
            </select>}
            <button className="p-2 mx-2 bg-purple-800 text-white text-xl rounded-xl cursor-pointer" onClick={handleGPTSearch}>{showGptSearch ? "Home 🏠" : "Search 🔍︎" }</button>
            </div>

            <div className="relative" ref={dropdownRef}>
              {/* Profile Image as Dropdown Button */}
              <button className="" onClick={dropdownClicked}>
                <img
                  className="w-12 h-12 cursor-pointer rounded-4xl"
                  alt="usericon"
                  src={user?.photoURL}
                />
              </button>

              {/* Dropdown Menu */}
              {dropDown && (
                <div className="absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 z-20">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Profile 🤵
                    </li>
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Settings 🛞
                    </li>
                    <button
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
                      onClick={handleSignout}
                    >
                      Sign out 👋
                    </button>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
