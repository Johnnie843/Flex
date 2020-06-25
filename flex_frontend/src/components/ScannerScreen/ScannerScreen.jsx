import React, { Component } from "react";
import {Row, Col, Table} from "react-bootstrap";
import Card from "../Card/Card.jsx";
import SequenceTable from "../SequenceTable/SequenceTable.jsx";
import ScannerInput from "./ScannerInput.jsx" 
import UserCard from "../UserCard/UserCard.jsx";
import VehicleCard from "../VehicleCard/VehicleCard.jsx";

class ScannerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gepard_engine_sequence: [{"planName":"ASCLMA11_INT01_CSQ03","sequenceNumber":13353380,"lastProgressChange":"3/11/20 10:42 AM","productionOrder":"","pnrCheck":"","blockingStatus":"0","productionProgress":"AVAILABLE","modelType":"","taktName":null,"vin":"","ls1":"9147","created":null,"createdBy":null,"changed":null,"changedBy":null,"codes":[]},],
      next_engine_in_sequence: 1
    }
  }

  componentDidMount() {

    fetch('http://localhost:8000/gepard/enginesequence')
    .then((response) => response.json())
    .then(sequence => {
        this.setState({ gepard_engine_sequence: sequence.sequencePlans});
        fetch('http://53.234.70.143:81/gepard/qsys/smotor/?format=json&spnr8='+this.state.gepard_engine_sequence[0].productionOrder+this.state.gepard_engine_sequence[0].pnrCheck)
        .then((response) => response.json())
        .then(engine_info => {
              this.setState({ next_engine_in_sequence: engine_info[0].smotor_no});
           })
    })

    
  }


  render() {

    return (
      
      <div className="content">
                  <div className = "container">
                    <Col>
                      <VehicleCard production_number={this.state.gepard_engine_sequence[0].productionOrder}
                            category="Employee Related Alerts"
                            stats="Updated 3 minutes ago"
                            vin={this.state.gepard_engine_sequence[0].vin}
                            build={this.state.next_engine_in_sequence}
                            info={this.state.gepard_engine_sequence[0].modelType}
                            statsIcon="fa fa-history"
                            content={
                                      <div></div>
                                     }>              
                      </VehicleCard>
                      <ScannerInput></ScannerInput>
                    </Col>
                  </div>                   
        </div>
    );
  }
}

export default ScannerScreen;