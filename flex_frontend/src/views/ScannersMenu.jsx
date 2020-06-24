import React, { Component } from "react";
import { Grid, Col} from "react-bootstrap";
import { StatsCard } from "../components/StatsCard/StatsCard.jsx";
import ScannerScreen from "../components/ScannerScreen/ScannerScreen.jsx";

class ScannersMenu extends Component {
  state = {
    showScanner: false,
  }
  showScannerApplication() {  
    this.setState({  
      showScanner: !this.state.showScanner,
      })
    } 

  render() {
    
    return (
      
      <div className="content">
        <Grid fluid>
        {!this.state.showScanner  ?
        <React.Fragment>
          <div class = "container">
          <div class = "row">
          <Col mdOffset={2} md = {2}>
              <StatsCard
                bigIcon={<i className="material-icons employee-icon">qr_code_scanner</i>}
                statsText="Add Scanner"
                statsIcon={<i className="material-icons">add</i>}
                statsIconText="Click to add a scanner"
                btn_class="card card-stats"
                
              />
            </Col> 
            </div>
            </div>
            <div class = "container">
          <div class = "row">
          <Col mdOffset={2} md = {2}>
              <StatsCard
                bigIcon={<i className="material-icons employee-icon">phone_android</i>}
                statsText="Engine Scanner"
                statsIcon={<i className="material-icons">qr_code_scanner</i>}
                statsIconText="Engine Preassembly Sequence Scanner"
                btn_class="card card-stats"
                switchDashboard={this.showScannerApplication.bind(this)}
              />
            </Col> 
            </div>
            </div>
            </React.Fragment>
            : null  
          } 
          {this.state.showScanner  ?
        <React.Fragment>
            <ScannerScreen></ScannerScreen>
        </React.Fragment>
            : null  
          }    
        </Grid>
      </div>
    );
  }
}

export default ScannersMenu;