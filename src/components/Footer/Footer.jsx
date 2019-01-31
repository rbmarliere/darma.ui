/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

import mojs from "mo-js";


import Unicorn from "../unicorn";


class Footer extends React.Component {




  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                STAKEMINE
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="about"
                className="nav-link"

              >
                about
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/list" className="nav-link" >
                Post Listing
              </Link>
            </li>
          </ul>
          <div className="copyright">

            <Unicorn />

          </div>

        </Container>

      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
