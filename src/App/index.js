import "./App.css";
import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";
import Context1 from "../components/Context1";
import Context2 from "../components/Context2";
import Context3 from "../components/Context3";

function App() {
  return (
    <>
      <Home />
      <div id="pageLoad">
        <Header />
        <Context1 />
        <Context2 />
        <Context3 />
        <div
          className="fullPage"
          id="context4"
          style={{ height: "100vh", paddingTop: "25vh" }}
        >
          <div className="segment-section ui container">
            <div className="ui huge header center aligned">Contact Me</div>
            <hr className="home-line" />
            <div className="ui header center aligned">
              sharmayash44ys@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
