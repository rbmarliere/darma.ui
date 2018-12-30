import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Container } from "reactstrap";

const About = () =>
{
    return (
        <div className="root">
            <NavBar></NavBar>
            <Container className="main">
                about page
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;

