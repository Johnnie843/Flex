
import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

export class StatsCard extends Component {
  render() {
    return (
      
      <Button onClick={this.props.switchDashboard} className={this.props.btn_class}>
        <div className="content">
          <Row>
            <Col className= "stats-col" xs={2} md={5}>
              <div className="icon-big text-center icon-warning">
                {this.props.bigIcon}
              </div>
            </Col>
            <Col className= "stats-col" xs={3}>
              <div className="numbers">
                {this.props.statsText}
              </div>
            </Col>
          </Row>
          <div className="footer">
            <hr />
            <div className="stats">
              {this.props.statsIcon} {this.props.statsIconText}
            </div>
          </div>
        </div>
      </Button>
    );
  }
}

export default StatsCard;
