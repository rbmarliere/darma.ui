import React, { Component } from "react";

import NavBar from "./navbar"
import ProjectCard from "./projectCard"
import Footer from "./footer"

class Main extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            userLogged: false,
        };
    }

    render()
    {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <ProjectCard></ProjectCard>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default Main;

