import React from "react";
import NavBar from "./navbar";
import ProjectList from "./projectList";
import Footer from "./footer";

const Main = () =>
{
    return (
        <div className="main">
            <NavBar></NavBar>
            <ProjectList></ProjectList>
            <Footer></Footer>
        </div>
    );
};

export default Main;

