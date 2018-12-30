import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () =>
{
    return (
        <footer className="container-fluid" expand="md">
            <div className="row d-flex justify-content-center pt-2 pb-2">
                <div className="col-xs-12">
                    <p className="lightgray text-justify">
                        <Link to="/about">
                            fasma {( new Date().getFullYear() )} &copy;
                        </Link>
                        &nbsp;
                        <a href="https://t.me/fasma">
                            <FontAwesomeIcon icon={ ["fab", "telegram"] } size="lg"/>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

