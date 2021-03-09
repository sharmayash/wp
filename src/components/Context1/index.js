import "./Context1.css";
import React from "react";
import { Card, Header } from "semantic-ui-react";

const items = [
  {
    header: "Frontend Developer",
    meta: "North Loop - Banking Made Easy",
    description:
      "Developed company website, added many features to business product and fixed a lot of bugs on business product",
    extra: "Tech used are :- React.js, Next.js, Redux, Material ui, SASS, etc",
  },
  {
    header: "Full Stack Developer Intern ",
    meta: "Aunico India",
    description:
      "Built a Email Client to send and receive emails, Built a electronic Id generator, Converted a billing web app to desktop app",
    extra:
      "Tech Used are :- Node.js, MongoDB, Electron.js, EJS template engine, etc",
  },
];

const Context1 = () => {
  return (
    <div className="context" id="context1">
      <Header as="h2" textAlign="center" style={{ marginTop: "8%" }}>
        About me
      </Header>
      <hr className="home-line" />
      <Header as="h4" className="subhead">
        A software developer who loves to create projects and learn new
        technologies and frameworks. <br /> I have professional experience in
        web development and desktop applications, and hands-on experience in
        creating multiple mobile applications.
      </Header>
      <Header as="h2" textAlign="center">
        Experience
      </Header>
      <hr className="home-line" />
      <Card.Group centered items={items} className="expCards" />
    </div>
  );
};

export default Context1;
