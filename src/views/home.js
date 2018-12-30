import React from "react";
import NavBar from "../components/navbar";
import ProjectList from "../components/projectList";
import Footer from "../components/footer";

const Home = () =>
{
    return (
        <div className="root">
            <NavBar></NavBar>
            <ProjectList></ProjectList>
            <Footer></Footer>
        </div>
    );
};

export default Home;

