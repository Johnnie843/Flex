
import React, { Component } from "react";
import { Grid, Col, Row} from "react-bootstrap";

export class UserCard extends Component {
  render() {
    return (
      <Row>
        <div className="content">
          <div className="author">
              <h4 className="title">
                PNR : 925001
                <br/>
                VIN : W1Z4EGHY4LT023684
                <br/>
                Build : VS30 PbP
                <br/>
                Engine: 123456
                <br/>
              </h4>
          </div>
        </div>
      </Row>
    );
  }
}

export default UserCard;
