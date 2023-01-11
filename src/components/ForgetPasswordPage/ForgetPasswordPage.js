import React, { useState } from "react";
import "./ForgetPasswordPage.css";
import { Button, Form } from "react-bootstrap";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth();

const ForgetPasswordPage = () => {
  const [userEmail, setUserEmail] = useState("");

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
  };
  const handleForgetPassword = (event) => {
    event.preventDefault();

    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert("Password Reset email sent.Check Your email");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="container">
        <Form className="forgetPassword" onClick={handleForgetPassword}>
          <h3 className="pb-2">Password Reset</h3>
          <small>
            Enter your email address that you used to register. We'll send you
            an email to reset your password.
          </small>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              className="emailForm"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ForgetPasswordPage;
