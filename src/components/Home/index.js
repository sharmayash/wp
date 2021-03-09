import "./Home.css";
import React from "react";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

const Home = () => {
  const [visible, setVisible] = React.useState(false);

  const handleSidebar = () => {
    setVisible(!visible);
  };

  return (
    <Sidebar.Pushable
      as={Segment}
      style={{ overflow: "hidden", background: "#282c34" }}
    >
      <Sidebar
        as={Menu}
        inverted
        vertical
        width="thin"
        icon="labeled"
        direction="right"
        visible={visible}
        animation="scale down"
        onHide={handleSidebar}
      >
        <Menu.Item
          as="a"
          href="https://github.com/sharmayash"
          rel="noreferrer"
          target="_blank"
        >
          <Icon name="github" />
          Github
        </Menu.Item>
        <Menu.Item
          as="a"
          href="https://www.hackerrank.com/sharmayash44ys"
          rel="noreferrer"
          target="_blank"
        >
          <Icon name="header" />
          Hackerrank
        </Menu.Item>
        <Menu.Item
          as="a"
          href="https://linkedin.com/in/sharmayash44ys"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="linkedin" />
          LinkedIn
        </Menu.Item>
        <Menu.Item
          as="a"
          rel="noreferrer"
          href="https://www.facebook.com/yash.sharma.404"
          target="_blank"
        >
          <Icon name="facebook" />
          Facebook
        </Menu.Item>
        <Menu.Item
          as="a"
          rel="noreferrer"
          href="https://www.instagram.com/yash_._sharma"
          target="_blank"
        >
          <Icon name="instagram" />
          Instagram
        </Menu.Item>
        <Menu.Item
          as="a"
          rel="noreferrer"
          href="https://www.freecodecamp.org/sharmayash"
          target="_blank"
        >
          <Icon name="free code camp" />
          FreeCodeCamp
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>
        <div className="home1">
          <div className="section">
            <img
              src="/wp/images/yash.jpg"
              alt="my pic"
              className="ui circular centered small image mypic"
            />
            <div className="ui huge header grey center aligned">
              <i>Yash Sharma</i>
            </div>
            <hr className="home-line1" />
            <div className="ui small header grey center aligned hideOnLandscape">
              <p>Proud Indian</p>
              <p>Full Stack Developer</p>
              <p>B.Tech In Computer Science</p>
            </div>
            <button
              onClick={handleSidebar}
              className="ui grey basic social center fluid vertical animated button"
            >
              <div className="visible content">Social</div>
              <div className="hidden content">
                <i className="users icon"></i>
              </div>
            </button>
          </div>
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Home;
