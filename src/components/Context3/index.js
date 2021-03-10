import "./Context3.css";
import React from "react";
import { Card, Header, Image } from "semantic-ui-react";

const projectDetails = [
  {
    isMobile: false,
    link: "https://github.com/sharmayash/Chat-App",
    imgSrc:
      "https://raw.githubusercontent.com/sharmayash/Chat-App/master/img/msghome.png",
    name: "RealTime Chat App",
    detail: "Made with Socket.io and MERN-GraphQL",
  },
  {
    isMobile: false,
    link: "https://github.com/sharmayash/MERN-GraphQL-Boilerplate",
    imgSrc: "/wp/images/projects/merng.png",
    name: "MERN-GraphQL Boilerplate",
    detail: "A production ready Boilerplate",
  },
  {
    isMobile: false,
    link: "https://github.com/sharmayash/UrlShortner",
    imgSrc:
      "https://raw.githubusercontent.com/sharmayash/UrlShortner/master/home.png",
    name: "ao-ao",
    detail: "A url shortner, which shrinks your url.",
  },
  {
    isMobile: false,
    link: "https://github.com/sharmayash/react-dashboard",
    imgSrc:
      "https://raw.githubusercontent.com/sharmayash/react-dashboard/main/screenshots/img.png",
    name: "Analysis of Offenses in US",
    detail: "Made with D3.js, react, and canvas.js",
  },
  {
    isMobile: false,
    link: "https://electrobazzar.herokuapp.com/",
    imgSrc: "/wp/images/projects/electro.png",
    name: "ElectroBazzar",
    detail: "An ecommerce web app",
  },
  {
    isMobile: false,
    link: "https://github.com/sharmayash/RealTimeBtcUsdGraph",
    imgSrc:
      "https://raw.githubusercontent.com/sharmayash/RealTimeBtcUsdGraph/master/Screenshot.png",
    name: "Realtime Bitcoin Price Chart",
    detail: "Cryptonator api to update chart of BTC.",
  },
  {
    isMobile: false,
    link: "https://github.com/sharmayash/Bizzmail",
    imgSrc:
      "https://raw.githubusercontent.com/sharmayash/Bizzmail/main/bizzmailHome.png",
    name: "Bizzmail (Desktop App)",
    detail: "An Email Client to send and receive mails.",
  },
  {
    isMobile: true,
    link: "https://github.com/sharmayash/FireTodo",
    imgSrc:
      "https://raw.githubusercontent.com/sharmayash/FireTodo/master/img/img6.jpg",
    name: "FireTodo (Flutter)",
    detail:
      "Todo App built with flutter and uses firebase authentication from scratch.",
  },
  {
    isMobile: true,
    link: "https://github.com/sharmayash/YMDB",
    imgSrc:
      "https://raw.githubusercontent.com/sharmayash/YMDB/master/assets/images/img3.jpg",
    name: "YMDB (Flutter)",
    detail: "Get Information about Movies, TV Shows and People.",
  },
  {
    isMobile: true,
    link: "https://github.com/sharmayash/radio-app-flutter",
    imgSrc: "/wp/images/projects/radio.png",
    name: "Radio App",
    detail: "A flutter app which streams Radio in punjabi language.",
  },
  {
    isMobile: true,
    link: "https://github.com/sharmayash/Flutter-state-managements",
    imgSrc:
      "https://raw.githubusercontent.com/sharmayash/Flutter-state-managements/master/assets/drawer.jpg",
    name: "Flutter State Management",
    detail: "A Demonstration of state management architecture.",
  },
];

const Context3 = () => {
  return (
    <div className="context2" id="context3">
      <Header as="h2" textAlign="center" style={{ marginTop: "2%" }}>
        Projects
      </Header>
      <hr className="home-line" style={{ margin: "2% auto" }} />
      <div className="animatedContainer2">
        <div className="cardsRow">
          {projectDetails.map((project, index) => (
            <Card key={index} className="project-card">
              <Image
                alt={project.name}
                title={project.name}
                src={project.imgSrc}
                wrapped
                className={project.isMobile ? "mobileImages" : "normalImg"}
              />
              <Card.Content>
                <Card.Header
                  className="cardHeader"
                  onClick={() => window.open(project.link)}
                >
                  {project.name}
                </Card.Header>
                <Card.Description>{project.detail}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Context3;
