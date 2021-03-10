import "./Context2.css";
import React from "react";
import { Header } from "semantic-ui-react";

const skills = [
  {
    logo: "/wp/images/logos/html.png",
    text: "HTML 5",
  },
  {
    logo: "/wp/images/logos/css.png",
    text: "CSS 3",
  },
  {
    logo: "/wp/images/logos/javascript.png",
    text: "Javascript",
  },
  {
    logo: "/wp/images/logos/mui.png",
    text: "Material UI",
  },
  {
    logo: "/wp/images/logos/sass.png",
    text: "SASS",
  },
  {
    logo: "/wp/images/logos/react.png",
    text: "React JS",
  },
  {
    logo: "/wp/images/logos/node.png",
    text: "Node JS",
  },
  {
    logo: "/wp/images/logos/express.png",
    text: "Express JS",
  },
  {
    logo: "/wp/images/logos/flutter.png",
    text: "Flutter",
  },
  {
    logo: "/wp/images/logos/electron.png",
    text: "Electron JS",
  },
  {
    logo: "/wp/images/logos/github.png",
    text: "Github",
  },
  {
    logo: "/wp/images/logos/ec2.png",
    text: "AWS EC2",
  },
  {
    logo: "/wp/images/logos/mongodb.png",
    text: "Mongo DB",
  },
  {
    logo: "/wp/images/logos/sql.png",
    text: "SQL",
  },
];

const Context2 = () => {
  return (
    <div className="context2" id="context2">
      <Header as="h2" textAlign="center" style={{ marginTop: "8%" }}>
        Skills
      </Header>
      <hr className="home-line" />
      <div className="animatedContainer">
        <div className="skills">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <img
                width="78px"
                src={skill.logo}
                alt={skill.text}
                title={skill.text}
              />
              <Header as="h3" style={{ fontSize: "14px" }}>
                {skill.text}
              </Header>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Context2;
