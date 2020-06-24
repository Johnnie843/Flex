
import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Checkbox from "../CustomCheckbox/CustomCheckbox.jsx";
import Button from "../CustomButton/CustomButton.jsx";

export class SequenceTable extends Component {


  constructor() {
    super();
    this.state = {
     
    };
  }


  render() {
    const edit = <Tooltip id="edit_tooltip">Edit Employee</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove Employee</Tooltip>;
    const sequence = this.props.sequence;
    var sequence_rows = [];
    var number;
    for (var i = 0; i < 3; i++) {
      number = "checkbox" + i;
      sequence_rows.push(
        <tr key={i} >
          <td>1</td>
          <td>Availble</td>
          <td>9250001</td>
          <td>123456</td>
        </tr>
      );
    }
    return <tbody>{sequence_rows}</tbody>;
  }
}

export default SequenceTable;
