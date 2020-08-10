import React from "react";
import Wizard from "./Wizard";

const WizardList = props => {
  //display all yer wizards, or filter by house
  return (
    <div>
      {props.wizards.map((wizard, index) => <Wizard key = { index } wizard = { wizard } />)}
    </div>
  )
};

export default WizardList;
