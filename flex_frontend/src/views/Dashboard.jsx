import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col, Table,ButtonToolbar,OverlayTrigger,Tooltip, Button } from "react-bootstrap";
import { EmployeeTable } from "../components/EmployeeTable/EmployeeTable.jsx"
import { Card } from "../components/Card/Card.jsx";
import { StatsCard } from "../components/StatsCard/StatsCard.jsx";
import { EmployeeAlerts } from "../components/EmployeeAlerts/EmployeeAlerts.jsx"
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "../variables/Variables.jsx";

class Dashboard extends Component {

  render() {
    
    return (
      
      <div className="content">
        <Grid fluid>

        </Grid>
      </div>
    );
  }
}

export default Dashboard;