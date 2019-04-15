import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import CookieConsent from "react-cookie-consent";
import "./styled/layout.css";
import { ThemeProvider } from "styled-components";
import { Flex } from "rebass";
import "typeface-montserrat";
import "typeface-dosis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
  faPeace,
  faCoffee,
  faYinYang
} from "@fortawesome/free-solid-svg-icons";

import theme from "../../theme";
import Container from "../Container";
import Header from "../Header";
import Logo from "../Logo";
import Main from "../Main";
import Footer from "../Footer";
import Menu from "../Menu";
import MenuItem from "../MenuItem";
import imgLogo from "../../images/mainz.png";

library.add(fab, faCoffee, faPeace, faYinYang, faInstagram, faFacebookSquare);

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            version
          }
        }
      }
    `
  );
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Logo to="/" text="FC Rottenburg 1946" img={imgLogo} />
          <Menu>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/Newsfeed/">News</MenuItem>
            <MenuItem to="/Tickets/">Tickets</MenuItem>
            <MenuItem to="/Jugend/">Jugend</MenuItem>
            <MenuItem to="/Tabelle/">Tabelle</MenuItem>
            <MenuItem to="/Shop/">Shop</MenuItem>
          </Menu>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <div>© Jan Göger</div>
          <Flex width={"3rem"} justifyContent="space-between">
            <a
              href="https://www.instagram.com/fcr1946/"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a
              href="https://www.facebook.com/fcrottenburg/"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            </a>
          </Flex>
          <Flex flexDirection="column">
            <span>Version: {site.siteMetadata.version}</span>
            <Link to="/imprint/">Impressum</Link>
            <Link to="/data-protection/">Datenschutz</Link>
          </Flex>
        </Footer>
        <CookieConsent
          location="bottom"
          buttonText="I agree"
          cookieName="gsuaCookie"
          style={{ background: "#465A65" }}
          buttonStyle={{ color: "#4e503b", fontSize: "15px" }}
          expires={150}
        >
          By using this website you agree to the application of cookies.
        </CookieConsent>
      </Container>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
