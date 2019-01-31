import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import { FormGroup, Input, Row, Col, Label } from "reactstrap";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step3Select: null
    };
  }
  render() {
    return (
      <>
        <form>
          <Row className="justify-content-center">
            <Col sm="12">
              <h5 className="info-text">Sweet. Now for the fun part.</h5>
            </Col>
            <Col sm="5">
              <FormGroup>
                <label>CPU Target</label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col sm="5">
              <FormGroup>
                <label>NET Target</label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col sm="5">
              <FormGroup>
                <label>CPU Reward</label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col sm="5">
              <FormGroup>
                <label>NET Reward</label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col sm="5">
              <FormGroup>
                <label>Period</label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col sm="5">
              <FormGroup>
                <label>Heading Color</label>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  name=""
                  onChange={value => this.setState({ step3Select: value })}
                  value={this.state.step3Select}
                  options={[
                    {
                      value: "Red",
                      label: " Red "
                    },
                    { value: "Orange", label: " Orange " },
                    { value: "Yellow", label: " Yellow " },
                    {
                      value: "Green",
                      label: " Green "
                    },
                    { value: "Blue", label: " Blue " },
                    { value: "Indigo", label: " Indigo " },
                    { value: "Violet", label: " Violet " },
                    { value: "Black", label: " Black " }
                  ]}
                  placeholder="Single Select"
                />
              </FormGroup>
            </Col>
            <Col sm="10">
            <FormGroup check>
                        <Label check>
                          <Input type="checkbox" />
                          <span className="form-check-sign" />
                          I am willing to give additional tokens to StakeMine for promotional purposes.
                        </Label>
                      </FormGroup>
            </Col>
          </Row>
        </form>
      </>
    );
  }
}

export default Wizard;
