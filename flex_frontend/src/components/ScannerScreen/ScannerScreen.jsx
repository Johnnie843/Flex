import React, { Component } from "react";
import { Grid, Row, Col, Table,ButtonToolbar,OverlayTrigger,Tooltip, Button } from "react-bootstrap";
import Card from "../Card/Card.jsx"
import SequenceTable from "../SequenceTable/SequenceTable.jsx";
import ScannerInput from "./ScannerInput.jsx"

class ScannerScreen extends Component {

  render() {

    return (
      
      <div className="content">
        <Grid fluid>
          <Card
                content={
                  <div class = "container">
                    <Col mdOffset={1} md={6}>
                      <Row>
                      <Card title="Engine Sequence"
                            category={""}
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                            <Table hover>
                              <thead>
                                <tr>
                                  <th>Sequence Number</th>
                                  <th>Status</th>
                                  <th>Production Number</th>
                                  <th>Engine Number</th>
                                  
                                </tr>
                              </thead>
                            <SequenceTable></SequenceTable>     
                            </Table>
                            }
                            >         
                        </Card>
                        </Row>
                        <Row>
                        <ScannerInput></ScannerInput>
                        </Row>
                    </Col>
                  </div>
                }>
            
          </Card>
        </Grid>
        </div>
    );
  }
}

export default ScannerScreen;