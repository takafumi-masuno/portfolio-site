import { AppBar, Toolbar, Button } from "@material-ui/core";
import Img from "../images/logo.png";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Logo = styled.img`
  height: 50px;
  text-align: left;
  object-fit: contain;
  &:hover {
    cursor: pointer;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const homeMove = () => {
    navigate("/");
  };
  return (
    <div style={{ flexGrow: 1, height: "64px" }}>
      <AppBar color="default" position="fixed">
        <Toolbar>
          <Logo alt="logo" src={Img} onClick={homeMove} />
          <div
            style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          >
            {location.pathname !== "/" && (
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Button>HOME</Button>
              </Link>
            )}
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Button color="inherit">ABOUT</Button>
            </Link>
            <Link
              to="/skills"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Button color="inherit">SKILLS</Button>
            </Link>
            <Link
              to="/trial"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Button color="inherit">TRIAL</Button>
            </Link>
            <a
              href="https://masu-no-blog.com/"
              target="_blank"
              rel="noopener noreferrer external"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Button color="inherit">BLOG</Button>
            </a>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Button color="inherit">Contact</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
