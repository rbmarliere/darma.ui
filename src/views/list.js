import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components//Footer/Footer";
import { Container } from "reactstrap";
import Wizard from "../components/wizard";

const List = () => {
    return (
        <div className="root">
            <NavBar />
            <br />
            <br />
            <Container className="main">
                <h1 className="h1-seo text-center">
                    List On
                    <br />
                    <span>
                        <img
                            className="welcomeLogo"
                            src={require("../assets/stakemine.png")}
                            alt="StakeMine"
                        />
                        TAKE<b>MINE</b>•
                    </span>
                </h1>
                <Wizard />
            </Container>
            <Footer />
        </div>
    );
};

export default List;
