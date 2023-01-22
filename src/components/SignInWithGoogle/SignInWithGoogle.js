import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase.init";
import "./SignInWithGoogle.css";

const auth = getAuth(app);
const SignInWithGoogle = () => {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="googleLogIn text-center">
        {user.email ? (
          <button className="border-0 bg-white" onClick={handleSignOut}>
            SignOut
          </button>
        ) : (
          <div className="">
            <button
              className="bg-white border rounded-pill googleButton "
              onClick={handleSignIn}
            >
              <span className="d-flex">
                <div className="googleImg">
                  <img
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                    alt=""
                  />
                </div>
                <p className="ps-2">LogIn with Google</p>
              </span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SignInWithGoogle;
