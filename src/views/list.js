import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Container } from "reactstrap";

const List = () =>
{
    return (
        <div className="root">
            <NavBar></NavBar>
            <Container className="main">
                list page
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default List;

