import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn, facebookLogin,githubLogin} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handelFacebookLogin = async (e) => {
    e.preventDefault();
    try {
      await facebookLogin();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
 const handelGithubLogin = async (e) => {
  e.preventDefault();
  try{
    await githubLogin();
    navigate("/home");
  } catch(error){
    console.log(error.message);
 }}

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
        <button
                className="btn bg-white"
                type="button"
                onClick={handleGoogleSignIn}
              >
                Login With <img alt="" src="img/google.png" />
              </button>
        </div>
        <div>
          <button
            className="btn bg-white"
            type="button"
            onClick={handelFacebookLogin}
          >
            Login With <img alt="" src="img/facebook.png" />
          </button>
        </div>
        <div>
          <button className="btn bg-white git-img" type="button" onClick={handelGithubLogin}>
            Login With <img alt="" src="img/guthub.png" />
          </button>
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;
