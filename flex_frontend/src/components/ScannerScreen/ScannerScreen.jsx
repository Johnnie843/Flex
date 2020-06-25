import React, { Component } from "react";
import {Row, Col, Table} from "react-bootstrap";
import Card from "../Card/Card.jsx";
import SequenceTable from "../SequenceTable/SequenceTable.jsx";
import ScannerInput from "./ScannerInput.jsx" 
import UserCard from "../UserCard/UserCard.jsx";

class ScannerScreen extends Component {

  render() {

    return (
      
      <div className="content">
                  <div class = "container">
                    <Col>
                      <Row>
                      <Card title="Next Engine In Sequence"
                            category={""}
                            content={
                              <UserCard></UserCard>
                            }
                            >         
                        </Card>

                        <ScannerInput></ScannerInput>
                        </Row>
                    </Col>
                  </div>                   
        </div>
    );
  }
}

export default ScannerScreen;