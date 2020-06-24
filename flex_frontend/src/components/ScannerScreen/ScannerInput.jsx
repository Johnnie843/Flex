import React, { Component } from "react";
import Button from "../CustomButton/CustomButton.jsx";

import {
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
} from "react-bootstrap";

export class ScannerInput extends Component {
  render() {
    return (
      <div className={"card" + (this.props.plain ? " card-plain" : "")}>
        <div
          className={
            "content" +
            (this.props.ctAllIcons ? " all-icons" : "") +
            (this.props.ctTableFullWidth ? " table-full-width" : "") +
            (this.props.ctTableResponsive ? " table-responsive" : "") +
            (this.props.ctTableUpgrade ? " table-upgrade" : "")
          }
        >
        
        <Row>
        <form>
        <div className="col-md-6">
        <FormGroup>
            <ControlLabel>Scan Engine</ControlLabel>
            <FormControl 
                type="text"
                placeholder= ""
                defaultValue= ""
            />               
        </FormGroup>
        </div>
        </form>
        </Row>
        <Row>
            <Col smOffset={4} sm={6} xs={4}>
            <ButtonToolbar>
                <Button bsStyle="default" round fill>
                    Verify Engine
                </Button>
                <Button bsStyle="default" round fill>
                    Clear
                </Button>
            </ButtonToolbar>
            </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default ScannerInput;
