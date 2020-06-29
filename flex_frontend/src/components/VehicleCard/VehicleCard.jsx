import React, { Component } from "react";
import Button from "../CustomButton/CustomButton.jsx";

import {
  Row,
  Col,
} from "react-bootstrap";

export class VehicleCard extends Component {
  render() {
    return (
      <div className={"card"}>
        <div className={"vehicle_card_header text-center"}>
          <Row>
            <div className={"next_order"}> 
            <Col md="auto">
            <h4 className="vehicle_card_title">Next Order In Sequence</h4>
            <p className="production_number">{this.props.production_number}</p>
            </Col>
            </div>
            <Col md="auto">
              <Row>
                <div className="text-left">
                    <i className="vehicle_card_icons material-icons">directions_bus</i>
                    <p className="vehicle_card_data">{this.props.vin}</p>
                </div>
              </Row>
              <hr/>
              <Row>
                <div className="text-left">
                    <i className="vehicle_card_icons material-icons">info</i>
                    <p className="vehicle_card_data">{this.props.info}</p>
                </div>
              </Row>
              <hr/>
              <Row>
                <div className="text-left">
                    <i className="vehicle_card_icons material-icons">build</i>
                    <p className="vehicle_card_data">{this.props.build}</p>
                </div>
              </Row>
              
            </Col>
          </Row>
        </div>
        <div
          className={
            "content" +
            (this.props.ctAllIcons ? " all-icons" : "") +
            (this.props.ctTableFullWidth ? " table-full-width" : "") +
            (this.props.ctTableResponsive ? " table-responsive" : "") +
            (this.props.ctTableUpgrade ? " table-upgrade" : "")
          }
        >
          {this.props.content}

          <div className="footer">
            {this.props.legend}
            {this.props.stats != null ? <hr /> : ""}
            <div className="stats">
              <i className={this.props.statsIcon} /> {this.props.stats}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VehicleCard;
