import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
import "./RegistrationPage.css";

const auth = getAuth(app);
const RegistrationPage = () => {
  const [passWordError, setPassWordError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    // Validate password

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPassWordError("Please provide at least two uppercase");
      return;
    }
    if (password.length < 6) {
      setPassWordError("Password should be at least 6 characters");
      return;
    }
    if (!/(?=.*[!@#$&])/.test(password)) {
      setPassWordError("Please add at least one special character");
      return;
    }
    setPassWordError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        verifyEmail();
        updateUserName(name);
      })
      .catch((error) => {
        console.error("error", error);
        setPassWordError(error.message);
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert("Check your email and verify");
    });
  };
  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("display name");
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="container">
        <Form className="loginRegistration" onSubmit={handleRegister}>
          <h3 className="pb-3">Registration</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              className="emailForm"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="emailForm"
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="passwordForm"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <p className="text-danger">{passWordError}</p>
          {success && (
            <p className="text-success">Registration completed successfully</p>
          )}
          <Button variant="primary" type="submit">
            Register
          </Button>
          <div className="d-flex align-items-center">
            <p className="pt-3">Have an account?</p>
            <Link to="/loginPage" className="ps-5">
              LogIn
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default RegistrationPage;
