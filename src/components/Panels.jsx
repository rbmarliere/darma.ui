import React from "react";

import mojs from "mo-js";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";



class Panels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "profile",
      verticalTabs: "profile",
      verticalTabsIcons: "home",
      pageTabs: "home",
      openedCollapses: ["collapseOne"]
    };
  }

  async componentDidMount () {

    var el = document.querySelector('.contrain')
    var elSpan = el.querySelector('span')
    // mo.js timeline obj

      const COLORS = {
        RED:      '#FD5061',
        YELLOW:   '#FFCEA5',
        BLACK:    '#29363B',
        WHITE:    'white',
        VINOUS:   '#A50710'
      }



      const burst1 = new mojs.Burst({
        parent: el,
        count:    5,
        radius:   { 50: 250 },
        children: {
          fill:   'white',
          shape:  'line',
          stroke: [ COLORS.WHITE, COLORS.YELLOW ],
          strokeWidth: 12,
          radius: 'rand(30, 60)',
          radiusY: 0,
          scale: { 1: 0 },
          pathScale: 'rand(.9, 1)',
          degreeShift: 'rand(-360, 360)',
          isForce3d: true,
        }
      });

      const burst2 = new mojs.Burst({
        parent: el,
        count:  3,
        radius: { 0: 250 },
        children: {
          shape:      [ 'circle', 'rect' ],
          points:     5,
          fill:       [ COLORS.WHITE, COLORS.VINOUS, COLORS.YELLOW ],
          radius:     'rand(30, 60)',
          scale:      { 1: 0 },
          pathScale:  'rand(.5, 1)',
          degreeShift: 'rand(-160, 360)',
          isForce3d:  true
        }
      });



      el.addEventListener( 'click', function (e) {
        burst1

          .generate()
          .replay();

        burst2

          .generate()
          .replay();



  

    });
  }
  // with this function we create an array with the opened collapses
  // it is like a toggle function for all collapses from this page
  collapsesToggle = (e, collapse) => {
    e.preventDefault();
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: openedCollapses.filter(item => item !== collapse)
      });
    } else {
      openedCollapses.push(collapse);
      this.setState({
        openedCollapses: openedCollapses
      });
    }
  };
  // with this function we change the active tab for all the tabs in this page
  changeActiveTab = (e, tabState, tadName) => {
    e.preventDefault();
    this.setState({
      [tabState]: tadName
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <h5 className="card-category">Token Mining</h5>
                  <CardTitle tag="h3">Mine Tokens With Your Stakes!</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="4">
                      <Nav className="nav-pills-info flex-column" pills>
                        <NavItem>
                          <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            className={
                              this.state.verticalTabs === "profile"
                                ? "active"
                                : ""
                            }
                            onClick={e =>
                              this.changeActiveTab(e, "verticalTabs", "profile")
                            }
                          >
                            What is this?
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            className={
                              this.state.verticalTabs === "settings"
                                ? "active"
                                : ""
                            }
                            onClick={e =>
                              this.changeActiveTab(
                                e,
                                "verticalTabs",
                                "settings"
                              )
                            }
                          >
                            Why Mining?
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            className={
                              this.state.verticalTabs === "options"
                                ? "active"
                                : ""
                            }
                            onClick={e =>
                              this.changeActiveTab(e, "verticalTabs", "options")
                            }
                          >
                            Advertise?
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col md="8">
                      <TabContent activeTab={this.state.verticalTabs}>
                        <TabPane tabId="profile">
                          Each day you log in and use StakeMine you will be given STAKE tokens which act like a Pick Axe.  <br />
                          <br />
                          You can use these Pick Axe's to mine our Gold Rock which holds tokens from projects that have advertised on this page.
                        </TabPane>
                        <TabPane tabId="settings">
                          Test2
                        </TabPane>
                        <TabPane tabId="options">
                          test3
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">

            <div class="contrain" id="js-constrain">
            <span><img
                className="mine-rock"
                src={require("../assets//img/gold.png")}
                alt="StakeMine"
            /></span>
            </div>

            </Col>
          </Row>

        </div>
      </>
    );
  }
}



export default Panels;
