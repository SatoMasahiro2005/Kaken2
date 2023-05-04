import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { env } from "process";
import { initializeFirebaseApp } from "./models/firebase";
import { signin } from "./models/google-signin";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="Login">
      <Button onClick={signin}>Googleでサインイン</Button>
    </div>
  );
}

export default App;
