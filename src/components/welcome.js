import React from "react";

const Welcome = props => {
    return (
        <div className="page-header">
            <div className="container">
                <div className="content-center brand">
                    <h1 className="h1-seo">
                        <img
                            className="welcomeLogo"
                            src={require("../assets/stakemine.png")}
                            alt="StakeMine"
                        />
                        TAKE<b>MINE</b>•
                    </h1>
                    <h3>Staking Is The New Mining.</h3>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
