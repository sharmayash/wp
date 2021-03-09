import "./App.css";
import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";
import Context1 from "../components/Context1";
import Context2 from "../components/Context2";

function App() {
  return (
    <>
      <Home />
      <div id="pageLoad">
        <Header />
        <Context1 />
        <Context2 />
        <div
          class="fullPage"
          id="context4"
          style={{ height: "100vh", paddingTop: "25vh" }}
        >
          <div class="segment-section ui container">
            <div class="ui huge header center aligned">Contact Me</div>
            <hr class="home-line" />
            <div class="ui header center aligned">sharmayash44ys@gmail.com</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

{
  /* <div class="fullPage" id="context2">
          <div class="segment-section ui container">
            <br />
            <div class="ui huge header center aligned">Projects</div>
            <hr class="home-line" />
            <div class="ui special two doubling fluid cards">
              <div class="card">
                <div class="blurring dimmable image">
                  <div class="ui dimmer">
                    <div class="content">
                      <div class="center">
                        <a
                          href="https://campnow.herokuapp.com/campgrounds"
                          target="_blank"
                          class="ui inverted button"
                        >
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>
                  <img src="img/campnow.png" />
                </div>
                <div class="content">
                  <div class="header">CampNow</div>
                  <div class="meta">
                    <span class="date">Sep 2018</span>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="blurring dimmable image">
                  <div class="ui dimmer">
                    <div class="content">
                      <div class="center">
                        <a
                          href="https://github.com/sharmayash/mern-full-stack-app"
                          target="_blank"
                          class="ui inverted button"
                        >
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>
                  <img src="img/devconnector.png" />
                </div>
                <div class="content">
                  <a class="header">DevConnector</a>
                  <div class="meta">
                    <span class="date">Ongoing</span>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="blurring dimmable image">
                  <div class="ui dimmer">
                    <div class="content">
                      <div class="center">
                        <a
                          href="https://electrobazzar.herokuapp.com"
                          target="_blank"
                          class="ui inverted button"
                        >
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>
                  <img src="img/electrobazzar.png" />
                </div>
                <div class="content">
                  <a class="header">ElectoBazzar</a>
                  <div class="meta">
                    <span class="date">Ongoing</span> <br />
                    <span class="date">Full MERN Stack Application</span>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="blurring dimmable image">
                  <div class="ui dimmer">
                    <div class="content">
                      <div class="center">
                        <a
                          href="https://fortnite-statistics-tracker.herokuapp.com/"
                          target="_blank"
                          class="ui inverted button"
                        >
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>
                  <img src="img/fort.png" />
                </div>
                <div class="content">
                  <a class="header">Fortnite Stats Tracker</a>
                  <div class="meta">
                    <span class="date">Aug. 2019</span>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="ui center aligned grid">
              <a href="/projects" class="ui black animated button">
                <div class="visible content">View More</div>
                <div class="hidden content">
                  <i class="right arrow icon"></i>
                </div>
              </a>
            </div>
          </div>
        </div> */
}
