import React from "react";
import NavBar from "./navbar";
import ProjectCard from "./projectCard";
import Footer from "./footer";

const Main = () =>
{
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <ProjectCard></ProjectCard>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Main;

