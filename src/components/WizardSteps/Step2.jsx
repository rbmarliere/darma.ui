import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectname: "",
      projecturl: "",
      logourl: "",
      eosaccount: "",
      about: "",
      projectnameState: "",
      projecturlState: "",
      logourlState: "",
      eosaccountState: "",
      aboutState: "",
    };
  }
  // verifies if value is a valid URL
  verifyUrl = value => {
    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
  };
  // function that verifies if a string has a given length or not
  verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  // function that verifies if value contains only numbers
  verifyNumber = value => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };
  change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      case "url":
        if (this.verifyUrl(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "number":
        if (this.verifyNumber(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  };
  isValidated = () => {
    if (
      this.state.projectnameState === "has-success" &&
      this.state.projecturlState === "has-success" &&
      this.state.logourlState === "has-success" &&
      this.state.aboutState === "has-success" &&
      this.state.eosaccountState === "has-success"
    ) {
      return true;
    } else {
      if (this.state.projectnameState !== "has-success") {
        this.setState({ projectnameState: "has-danger" });
      }
      if (this.state.projecturlState !== "has-success") {
        this.setState({ projecturlState: "has-danger" });
      }
      if (this.state.logourlState !== "has-success") {
        this.setState({ logourlState: "has-danger" });
      }
      if (this.state.eosaccountState !== "has-success") {
        this.setState({ eosaccountState: "has-danger" });
      }
      if (this.state.aboutState !== "has-success") {
        this.setState({ aboutState: "has-danger" });
      }
      return false;
    }
  };
  render() {
    return (
      <>
        <h5 className="info-text">
          Now some info about your project.
        </h5>
        <Row className="justify-content-center mt-5">
          <Col sm="5">
            <InputGroup
              className={classnames(this.state.projectnameState, {
                "input-group-focus": this.state.projectnameFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-badge" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="projectname"
                placeholder="Project Name..."
                type="text"
                onChange={e => this.change(e, "projectname", "length", 3)}
                onFocus={e => this.setState({ projectnameFocus: true })}
                onBlur={e => this.setState({ projectnameFocus: false })}
              />
              {this.state.projectnameState === "has-danger" ? (
                <label className="error">Please enter a valid Project Name</label>
              ) : null}
            </InputGroup>
            <InputGroup
              className={classnames(this.state.logourlState, {
                "input-group-focus": this.state.logourlFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-image-02" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="logourl"
                placeholder="Logo URL..."
                type="url"
                onChange={e => this.change(e, "logourl", "url")}
                onFocus={e => this.setState({ logourlFocus: true })}
                onBlur={e => this.setState({ logourlFocus: false })}
              />
              {this.state.logourlState === "has-danger" ? (
                <label className="error">Please enter a valid URL. (Include http://)</label>
              ) : null}
            </InputGroup>
          </Col>
          <Col sm="5">
            <InputGroup
              className={classnames(this.state.projecturlState, {
                "input-group-focus": this.state.projecturlFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-world" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="projecturl"
                placeholder="Project Website..."
                type="url"
                onChange={e => this.change(e, "projecturl", "url")}
                onFocus={e => this.setState({ projecturlFocus: true })}
                onBlur={e => this.setState({ projecturlFocus: false })}
              />
              {this.state.projecturlState === "has-danger" ? (
                <label className="error">Please enter a valid URL.</label>
              ) : null}
            </InputGroup>
            <InputGroup
              className={classnames(this.state.eosaccountState, {
                "input-group-focus": this.state.eosaccountFocus
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-single-02" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="eosaccoun"
                placeholder="EOS Account Name..."
                type="text"
                onChange={e => this.change(e, "eosaccount", "length", 3)}
                onFocus={e => this.setState({ eosaccountFocus: true })}
                onBlur={e => this.setState({ eosaccountFocus: false })}
              />
              {this.state.eosaccountState === "has-danger" ? (
                <label className="error">Please enter a valid EOS account name</label>
              ) : null}
            </InputGroup>

          </Col>
          <Col sm="10">
          <InputGroup
            className={classnames(this.state.aboutState, {
              "input-group-focus": this.state.aboutFocus
            })}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-alert-circle-exc" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              name="about"
              placeholder="Short Description..."
              type="text"
              onChange={e => this.change(e, "about", "length", 20)}
              onFocus={e => this.setState({ aboutFocus: true })}
              onBlur={e => this.setState({ aboutFocus: false })}
            />
            {this.state.aboutState === "has-danger" ? (
              <label className="error">This field is required.</label>
            ) : null}
          </InputGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default Wizard;
