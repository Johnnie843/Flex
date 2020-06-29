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
      <div className={"card"}>
        <div className={"content"}>
        
        <Row>
        <div className = "scanner_input">
        <form>
        <Col md="auto">
        <FormGroup>
            <ControlLabel>Scan Engine</ControlLabel>
            <FormControl 
                type="text"
                placeholder= ""
                defaultValue= ""
            />               
        </FormGroup>
        </Col>
        </form>
        </div>
        </Row>
        <Row>
          <Col className="scanner_input" xs="auto" md="auto">
              <Button block fill>
                  Verify Engine
              </Button>  
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default ScannerInput;
