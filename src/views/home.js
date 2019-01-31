import React from "react";
import NavBar from "../components/navbar";
import Welcome from "../components/welcome";
import ProjectList from "../components/projectList";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <div className="root">
            <NavBar />

            <Welcome />

            <ProjectList />

            <Footer />
        </div>
    );
};

export default Home;
