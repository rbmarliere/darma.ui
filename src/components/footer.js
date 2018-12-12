import React, { Component } from "react";

class Footer extends Component
{
    render()
    {
        return (
            <footer className="container-fluid" expand="md">
                <div className="row d-flex justify-content-center pt-2 pb-2">
                    <div className="col-xs-12">
                        <p className="lightgray text-justify">
                            darma {( new Date().getFullYear() )} &copy; ricardo@eossweden.org
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;

